import React, { useState, useEffect, useRef } from 'react'
import { MDBDataTableV5 } from 'mdbreact'
import styles from '../officeDocument/OfficeDocumentData.module.scss'

const getEmbedUrl = (url) => {
    const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/?]+)/)
    if (driveMatch) return `https://drive.google.com/file/d/${driveMatch[1]}/preview`
    const docsMatch = url.match(/docs\.google\.com\/document\/d\/([^/?]+)/)
    if (docsMatch) return `https://docs.google.com/document/d/${docsMatch[1]}/preview`
    return url
}

const COLUMNS = [
    { label: 'STT', field: 'no', width: 60 },
    { label: 'Tên biểu mẫu', field: 'name', width: 340 },
    { label: 'Loại', field: 'type', width: 180 },
    { label: 'Ngày ban hành', field: 'date', sort: 'asc', width: 120 },
    { label: 'Link', field: 'url', sort: 'disabled', width: 100 },
    { label: 'Trạng thái', field: 'status', width: 110 },
]

const ROWS = [
    {
        no: 1,
        name: 'KIỆN TOÀN CÂU LẠC BỘ - ĐỘI - NHÓM NĂM 2025',
        type: 'KHLT-ĐTN-HSV',
        date: '2025/10',
        url: 'https://itute.tiny.us/KTCLB',
        status: 'Active',
    },
    {
        no: 2,
        name: 'MẪU KẾ HOẠCH TỔ CHỨC HOẠT ĐỘNG CỦA ĐOÀN - HỘI',
        type: 'DTKP',
        date: '2026/01',
        url: 'https://docs.google.com/document/d/1TM6zEb7mtTs9Ytv8H42ch6_VAT22c5ni/edit?usp=sharing&ouid=115258241827326023436&rtpof=true&sd=true',
        status: 'Active',
    },
    {
        no: 3,
        name: 'MẪU KẾ HOẠCH KHOA',
        type: 'KH-CNTT',
        date: '2026/01',
        url: 'https://docs.google.com/document/d/13PQH3rqoS72GpjqybMKsPQ553oGieW_E/edit?usp=sharing&ouid=115258241827326023436&rtpof=true&sd=true',
        status: 'Active',
    },
    
]

export default function OfficeTemplateData() {
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
                <span className={`${styles.badge} ${status.toLowerCase() === 'active' ? styles.badgeSigned : styles.badgePending}`}>
                    {status === 'Active' ? 'Hiệu lực' : status}
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
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <line x1="9" y1="9" x2="15" y2="9"/>
                                <line x1="9" y1="12" x2="15" y2="12"/>
                                <line x1="9" y1="15" x2="12" y2="15"/>
                            </svg>
                        </div>
                        <div>
                            <h2 className={styles.cardTitle}>Danh sách biểu mẫu</h2>
                            <p className={styles.cardSubtitle}>Các mẫu biểu dùng trong công tác Đoàn - Hội</p>
                        </div>
                    </div>
                    <span className={styles.countBadge}>{ROWS.length} mẫu</span>
                </div>

                <div className={styles.tableWrapper}>
                    <MDBDataTableV5
                        hover
                        searchTop
                        searchBottom={false}
                        info={false}
                        entriesOptions={[5, 10, 20]}
                        entries={5}
                        pagesAmount={4}
                        paginationLabel={['Trước', 'Sau']}
                        data={exportData(COLUMNS, ROWS)}
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
