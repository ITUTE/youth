import React, { useState, useEffect, useRef } from 'react'
import { MDBDataTableV5 } from 'mdbreact'
import { DOC_ROWS, DOC_COLUMNS } from './data'
import styles from './OfficeDocumentData.module.scss'

const getEmbedUrl = (url) => {
    const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/?]+)/)
    if (driveMatch) return `https://drive.google.com/file/d/${driveMatch[1]}/preview`
    const docsMatch = url.match(/docs\.google\.com\/document\/d\/([^/?]+)/)
    if (docsMatch) return `https://docs.google.com/document/d/${docsMatch[1]}/preview`
    return url
}

export default function OfficeDocumentData() {
    const [selected, setSelected] = useState(null)
    const viewerRef = useRef(null)

    useEffect(() => {
        if (selected && viewerRef.current) {
            setTimeout(() => {
                viewerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 50)
        }
    }, [selected])

    const handleSelect = (row) => {
        setSelected((prev) => (prev && prev.rawUrl === row.rawUrl ? null : row))
    }

    const exportData = (columns, rows) => {
        const rowsData = rows.map((data) => {
            const rawUrl = data.url
            const isActive = selected && selected.rawUrl === rawUrl

            const getLink = () => (
                <button
                    className={`${styles.viewBtn} ${isActive ? styles.viewBtnActive : ''}`}
                    onClick={() => handleSelect({ name: data.name, type: data.type, date: data.date, rawUrl })}
                >
                    {isActive ? (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                        </svg>
                    ) : (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                    )}
                    {isActive ? 'Đang xem' : 'Xem'}
                </button>
            )

            const getStatus = (status) => (
                <span className={`${styles.badge} ${status.toLowerCase() === 'đã ký' ? styles.badgeSigned : styles.badgePending}`}>
                    {status}
                </span>
            )

            return { ...data, url: getLink(), status: getStatus(data.status) }
        })

        return { columns, rows: rowsData }
    }

    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <div className={styles.cardHeaderLeft}>
                        <div className={styles.cardIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                                <polyline points="14 2 14 8 20 8"/>
                                <line x1="16" y1="13" x2="8" y2="13"/>
                                <line x1="16" y1="17" x2="8" y2="17"/>
                                <polyline points="10 9 9 9 8 9"/>
                            </svg>
                        </div>
                        <div>
                            <h2 className={styles.cardTitle}>Danh sách văn bản</h2>
                            <p className={styles.cardSubtitle}>Các văn bản và kế hoạch đã được ký duyệt</p>
                        </div>
                    </div>
                    <span className={styles.countBadge}>{DOC_ROWS.length} tài liệu</span>
                </div>

                <div className={styles.tableWrapper}>
                    <MDBDataTableV5
                        hover
                        searchTop
                        searchBottom={false}
                        info={false}
                        pagesAmount={10}
                        entriesOptions={[5, 10, 20, 50]}
                        entries={10}
                        paginationLabel={['Trước', 'Sau']}
                        data={exportData(DOC_COLUMNS, DOC_ROWS)}
                    />
                </div>
            </div>

            {selected && (
                <div className={styles.viewerCard} ref={viewerRef}>
                    <div className={styles.viewerHeader}>
                        <div className={styles.viewerMeta}>
                            <div className={styles.viewerIcon}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                                    <polyline points="14 2 14 8 20 8"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className={styles.viewerTitle}>{selected.name}</h3>
                                <p className={styles.viewerSub}>{selected.type} &middot; {selected.date}</p>
                            </div>
                        </div>
                        <div className={styles.viewerActions}>
                            <a
                                href={selected.rawUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.openBtn}
                            >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                                    <polyline points="15 3 21 3 21 9"/>
                                    <line x1="10" y1="14" x2="21" y2="3"/>
                                </svg>
                                Mở trang mới
                            </a>
                            <button
                                className={styles.closeBtn}
                                onClick={() => setSelected(null)}
                                aria-label="Đóng"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"/>
                                    <line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={styles.a4Wrap}>
                        <div className={styles.a4Page}>
                            <iframe
                                src={getEmbedUrl(selected.rawUrl)}
                                title={selected.name}
                                className={styles.a4Frame}
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
