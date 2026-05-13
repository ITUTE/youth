import React, { useState, useEffect, useRef, useCallback } from 'react'
import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'
import styles from './index.module.scss'

const LS_TEAMS = 'bocTham_teams'
const LS_TOPICS = 'bocTham_topics'
const LS_HISTORY = 'bocTham_history'

const SPIN_FRAMES = 24
const SPIN_MS = 72

function parseList(str) {
    return str.split('\n').map(s => s.trim()).filter(Boolean)
}

// generate random spark positions (fixed at module load)
const SPARKS = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    style: {
        '--dx': `${(Math.random() - 0.5) * 200}px`,
        '--dy': `${-(50 + Math.random() * 130)}px`,
    },
}))

export default function BocTham() {
    const [teamsInput, setTeamsInput] = useState(
        () => localStorage.getItem(LS_TEAMS) || ''
    )
    const [topicsInput, setTopicsInput] = useState(
        () => localStorage.getItem(LS_TOPICS) || ''
    )
    const [history, setHistory] = useState(() => {
        try { return JSON.parse(localStorage.getItem(LS_HISTORY)) || [] }
        catch { return [] }
    })

    // 'idle' | 'spinningTeam' | 'teamDrawn' | 'spinningTopic' | 'pairComplete'
    const [drawState, setDrawState] = useState('idle')
    const [spinText, setSpinText] = useState('')
    const [currentTeam, setCurrentTeam] = useState(null)
    const [currentTopic, setCurrentTopic] = useState(null)
    const [showSparks, setShowSparks] = useState(false)

    const intervalRef = useRef(null)

    const allTeams = parseList(teamsInput)
    const allTopics = parseList(topicsInput)
    const usedTeams = new Set(history.map(h => h.team))
    const usedTopics = new Set(history.map(h => h.topic))
    const availableTeams = allTeams.filter(t => !usedTeams.has(t))
    const availableTopics = allTopics.filter(t => !usedTopics.has(t))

    useEffect(() => { localStorage.setItem(LS_TEAMS, teamsInput) }, [teamsInput])
    useEffect(() => { localStorage.setItem(LS_TOPICS, topicsInput) }, [topicsInput])
    useEffect(() => { localStorage.setItem(LS_HISTORY, JSON.stringify(history)) }, [history])
    useEffect(() => () => clearInterval(intervalRef.current), [])

    const runSpin = useCallback((list, onDone) => {
        const result = list[Math.floor(Math.random() * list.length)]
        let count = 0
        intervalRef.current = setInterval(() => {
            setSpinText(list[Math.floor(Math.random() * list.length)])
            count++
            if (count >= SPIN_FRAMES) {
                clearInterval(intervalRef.current)
                setSpinText(result)
                onDone(result)
            }
        }, SPIN_MS)
    }, [])

    const drawTeam = () => {
        if (availableTeams.length === 0) return
        if (drawState === 'spinningTeam' || drawState === 'spinningTopic') return
        setCurrentTeam(null)
        setCurrentTopic(null)
        setShowSparks(false)
        setSpinText('')
        setDrawState('spinningTeam')
        runSpin(availableTeams, result => {
            setCurrentTeam(result)
            setDrawState('teamDrawn')
        })
    }

    const drawTopic = () => {
        if (drawState !== 'teamDrawn' || availableTopics.length === 0) return
        setDrawState('spinningTopic')
        runSpin(availableTopics, result => {
            setCurrentTopic(result)
            setDrawState('pairComplete')
            setShowSparks(true)
            setTimeout(() => setShowSparks(false), 1800)
            setHistory(prev => [{
                team: currentTeam,
                topic: result,
                time: new Date().toLocaleTimeString('vi-VN'),
            }, ...prev])
        })
    }

    const nextDraw = () => {
        setCurrentTeam(null)
        setCurrentTopic(null)
        setSpinText('')
        setShowSparks(false)
        setDrawState('idle')
    }

    const reset = () => {
        clearInterval(intervalRef.current)
        setHistory([])
        setCurrentTeam(null)
        setCurrentTopic(null)
        setSpinText('')
        setShowSparks(false)
        setDrawState('idle')
    }

    const deleteEntry = index => setHistory(prev => prev.filter((_, i) => i !== index))

    const exportExcel = () => {
        const rows = [...history].reverse().map((h, i) => ({
            'STT': i + 1,
            'Đội': h.team,
            'Đề tài': h.topic,
            'Giờ bốc': h.time,
        }))
        const ws = XLSX.utils.json_to_sheet(rows)
        ws['!cols'] = [{ wch: 6 }, { wch: 32 }, { wch: 44 }, { wch: 12 }]
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, 'Kết quả bốc thăm')
        const buf = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
        saveAs(new Blob([buf], { type: 'application/octet-stream' }), 'ket-qua-boc-tham.xlsx')
    }

    const isSpinning = drawState === 'spinningTeam' || drawState === 'spinningTopic'

    const resultBoxClass = [
        styles.resultBox,
        isSpinning ? styles.glowYellow : '',
        drawState === 'teamDrawn' ? styles.glowOrange : '',
        drawState === 'pairComplete' ? styles.glowGreen : '',
    ].filter(Boolean).join(' ')

    const renderDisplay = () => {
        switch (drawState) {
            case 'spinningTeam':
            case 'spinningTopic':
                return <div className={styles.slotText}>{spinText || '...'}</div>
            case 'teamDrawn':
                return <div className={styles.teamDrawnText}>{currentTeam}</div>
            case 'pairComplete':
                return (
                    <div className={styles.pairResult}>
                        <div className={styles.pairTeamLine}>{currentTeam}</div>
                        <div className={styles.pairDivider} />
                        <div className={styles.pairTopicLine}>{currentTopic}</div>
                    </div>
                )
            default:
                return <div className={styles.idleText}>🎲 Sẵn sàng bốc thăm</div>
        }
    }

    const stepState = s => {
        const order = ['idle', 'spinningTeam', 'teamDrawn', 'spinningTopic', 'pairComplete']
        const cur = order.indexOf(drawState)
        const tgt = order.indexOf(s)
        if (cur === tgt) return styles.active
        if (cur > tgt) return styles.done
        return ''
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>

                {/* ── Header ── */}
                <div className={styles.pageHeader}>
                    <h1 className={styles.title}>🎲 BỐC THĂM</h1>
                    <p className={styles.subtitle}>Hệ thống bốc thăm sự kiện</p>
                </div>

                {/* ── Setup ── */}
                <div className={styles.setupGrid}>
                    <div className={styles.setupBox}>
                        <div className={styles.setupLabel}>
                            <span>👥 Danh sách đội</span>
                            <span className={styles.countBadge}>{availableTeams.length} / {allTeams.length}</span>
                        </div>
                        <textarea
                            className={styles.textarea}
                            value={teamsInput}
                            onChange={e => setTeamsInput(e.target.value)}
                            placeholder={'Mỗi đội 1 dòng...\nVD:\nĐội Alpha\nĐội Beta\nĐội Gamma'}
                            rows={7}
                        />
                    </div>
                    <div className={styles.setupBox}>
                        <div className={styles.setupLabel}>
                            <span>📋 Danh sách đề tài</span>
                            <span className={styles.countBadge}>{availableTopics.length} / {allTopics.length}</span>
                        </div>
                        <textarea
                            className={styles.textarea}
                            value={topicsInput}
                            onChange={e => setTopicsInput(e.target.value)}
                            placeholder={'Mỗi đề tài 1 dòng...\nVD:\nĐề tài 1: AI trong giáo dục\nĐề tài 2: IoT thông minh'}
                            rows={7}
                        />
                    </div>
                </div>

                {/* ── Draw stage ── */}
                <div className={styles.drawCard}>
                    <div className={resultBoxClass}>
                        {showSparks && (
                            <div className={styles.sparks}>
                                {SPARKS.map(s => (
                                    <div key={s.id} className={styles.spark} style={s.style} />
                                ))}
                            </div>
                        )}
                        {renderDisplay()}
                    </div>

                    {/* Steps */}
                    <div className={styles.steps}>
                        <div className={`${styles.step} ${stepState('spinningTeam')}`}>
                            <span className={styles.stepNum}>1</span>
                            <span>Bốc đội</span>
                        </div>
                        <div className={`${styles.stepLine} ${drawState !== 'idle' ? styles.stepLineDone : ''}`} />
                        <div className={`${styles.step} ${stepState('spinningTopic')}`}>
                            <span className={styles.stepNum}>2</span>
                            <span>Bốc đề tài</span>
                        </div>
                        <div className={`${styles.stepLine} ${drawState === 'pairComplete' ? styles.stepLineDone : ''}`} />
                        <div className={`${styles.step} ${stepState('pairComplete')}`}>
                            <span className={styles.stepNum}>3</span>
                            <span>Xác nhận</span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className={styles.btnRow}>
                        <button
                            className={`${styles.btn} ${styles.btnTeam}`}
                            onClick={drawTeam}
                            disabled={isSpinning || availableTeams.length === 0 || drawState === 'pairComplete'}
                        >
                            🎲 BỐC ĐỘI
                            <span className={styles.btnBadge}>{availableTeams.length} còn lại</span>
                        </button>

                        <button
                            className={`${styles.btn} ${styles.btnTopic}`}
                            onClick={drawTopic}
                            disabled={drawState !== 'teamDrawn' || availableTopics.length === 0}
                        >
                            🎲 BỐC ĐỀ TÀI
                            <span className={styles.btnBadge}>{availableTopics.length} còn lại</span>
                        </button>

                        {drawState === 'pairComplete' && (
                            <button className={`${styles.btn} ${styles.btnNext}`} onClick={nextDraw}>
                                ✅ TIẾP THEO
                            </button>
                        )}
                    </div>
                </div>

                {/* ── History ── */}
                <div className={styles.historyCard}>
                    <div className={styles.historyHeader}>
                        <h2 className={styles.historyTitle}>
                            📋 Lịch sử bốc thăm
                            <span className={styles.historyCnt}>{history.length} cặp</span>
                        </h2>
                        <div className={styles.historyActions}>
                            {history.length > 0 && (
                                <button className={styles.btnExport} onClick={exportExcel}>
                                    📊 Xuất Excel
                                </button>
                            )}
                            <button className={styles.btnReset} onClick={reset}>🔄 Reset</button>
                        </div>
                    </div>

                    {history.length === 0
                        ? <div className={styles.emptyHistory}>Chưa có kết quả nào — bắt đầu bốc thăm!</div>
                        : (
                            <div className={styles.historyList}>
                                {history.map((h, i) => (
                                    <div key={i} className={styles.historyItem}>
                                        <span className={styles.historyNo}>{history.length - i}</span>
                                        <span className={styles.historyTeam}>{h.team}</span>
                                        <span className={styles.historyArrow}>→</span>
                                        <span className={styles.historyTopic}>{h.topic}</span>
                                        <span className={styles.historyTime}>{h.time}</span>
                                        <button
                                            className={styles.btnDel}
                                            onClick={() => deleteEntry(i)}
                                            title="Xóa"
                                        >✕</button>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}
