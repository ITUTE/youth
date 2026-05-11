import React, { useState } from 'react'
import styles from './index.module.scss'
import * as SV5T from './sv5t'
import * as ICPC from './olympic_tin_hoc_icpc'
import * as TNTT from './tntt'
import * as DVUT from './dvut'
import * as SongIT from './song_it'

const CATEGORIES = [
    {
        id: 'sv5t',
        label: 'Sinh viên 5 tốt',
        icon: '⭐',
        years: [
            {
                label: '2021 - 2022',
                news: SV5T.SV5T_2021_2022,
                photos: (SV5T.awards_SV5T_2021_2022 || []).flat(),
            },
            {
                label: '2020 - 2021',
                news: SV5T.SV5T_2020_2021,
                photos: (SV5T.awards_SV5T_2020_2021 || []).flat(),
            },
            {
                label: '2019 - 2020',
                news: SV5T.SV5T_2019_2020,
                photos: (SV5T.awards_SV5T_2019_2020 || []).flat(),
            },
        ],
    },
    {
        id: 'dvut',
        label: 'Đoàn viên ưu tú',
        icon: '🏅',
        years: [
            {
                label: '2024 - 2025',
                news: [],
                gallery: DVUT.DVUT_2024_2025,
            },
        ],
    },
    {
        id: 'tntt',
        label: 'Thanh niên tiên tiến',
        icon: '🌟',
        years: [
            {
                label: '2023 - 2024',
                news: TNTT.TNTT_2020_2021,
                photos: (TNTT.awards_TNTT_2020_2021 || []).flat(),
            },
        ],
    },
    {
        id: 'songit',
        label: 'Sóng IT',
        icon: '🎤',
        years: [
            {
                label: '2025',
                news: SongIT.SongIT_2021_2022,
                photos: (SongIT.awards_SongIT_2021_2022 || []).flat(),
            },
        ],
    },
    {
        id: 'icpc',
        label: 'Olympic & ICPC',
        icon: '💻',
        years: [
            {
                label: '2024',
                news: ICPC.OLYMPIC_TIN_HOC_ICPC_2022,
                photos: (ICPC.AWARDS_OLYMPIC_TIN_HOC_ICPC_2022 || []).flat(),
            },
        ],
    },
]

export default function Award() {
    const [activeTab, setActiveTab] = useState('sv5t')
    const activeCat = CATEGORIES.find((c) => c.id === activeTab)

    return (
        <div className={styles.page}>
            {/* Hero */}
            <div className={styles.hero}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <span className={styles.heroTag} data-aos="fade-down">
                        Khoa Công nghệ Thông tin · HCMUTE
                    </span>
                    <h1 className={styles.heroTitle} data-aos="fade-up" data-aos-delay="80">
                        VINH DANH
                    </h1>
                    <p className={styles.heroSub} data-aos="fade-up" data-aos-delay="160">
                        Tôn vinh sinh viên đạt thành tích xuất sắc trong học tập, rèn luyện và hoạt động phong trào
                    </p>
                </div>
                <div className={styles.heroWave}>
                    <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
                        <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#f4f8fd" />
                    </svg>
                </div>
            </div>

            {/* Tabs */}
            <div className={styles.tabs}>
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat.id}
                        className={`${styles.tab} ${activeTab === cat.id ? styles.tabActive : ''}`}
                        onClick={() => setActiveTab(cat.id)}
                    >
                        <span>{cat.icon}</span>
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className={styles.content}>
                {activeCat.years.map((year, yi) => (
                    <div key={yi} className={styles.yearSection}>
                        <div className={styles.yearBadge} data-aos="fade-right">
                            {year.label}
                        </div>

                        {/* News articles */}
                        {(year.news || []).map((item, ni) => (
                            <div
                                key={ni}
                                className={styles.newsCard}
                                data-aos="fade-up"
                                data-aos-delay={ni * 80}
                            >
                                <div className={styles.newsCard__img}>
                                    <img src={item.imgUrl} alt={item.title} loading="lazy" />
                                </div>
                                <div className={styles.newsCard__body}>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}

                        {/* Gallery (landscape photos, e.g. DVUT) */}
                        {year.gallery && year.gallery.length > 0 && (
                            <div className={styles.galleryGrid}>
                                {year.gallery.map((item, gi) => (
                                    <div
                                        key={gi}
                                        className={styles.galleryCard}
                                        data-aos="fade-up"
                                        data-aos-delay={(gi % 4) * 80}
                                    >
                                        <div className={styles.galleryCard__img}>
                                            <img src={item.imgUrl} alt={item.title} loading="lazy" />
                                        </div>
                                        {item.title && (
                                            <div className={styles.galleryCard__caption}>{item.title}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Student photo grid */}
                        {year.photos && year.photos.length > 0 && (
                            <>
                                <p className={styles.photoSectionTitle}>Danh sách vinh danh</p>
                                <div className={styles.photoGrid}>
                                    {year.photos.map((student, si) => (
                                        <div
                                            key={si}
                                            className={styles.photoCard}
                                            data-aos="zoom-in"
                                            data-aos-delay={(si % 6) * 50}
                                        >
                                            <div className={styles.photoCard__img}>
                                                <img src={student.imgUrl} alt={student.title || ''} loading="lazy" />
                                            </div>
                                            {student.title && (
                                                <div className={styles.photoCard__name}>{student.title}</div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export const GG_SHEET_URL = "https://docs.google.com/spreadsheets/d/15OgjKPQIg8_hSGISfdgvtSyome2zxQkVpbGPcm5IGpI/gviz/tq?tqx=out:json"

export function combineArrays(first, second) {
    return first.reduce((acc, val, ind) => {
        acc[val] = second[ind]
        return acc
    }, {})
}

export function getGoogleSheetData(url) {
    return fetch(url)
        .then((r) => r.text())
        .then((data) => {
            const r = data.match(/google\.visualization\.Query\.setResponse\(([\s\S\w]+)\)/)
            if (r && r.length === 2) {
                const obj = JSON.parse(r[1])
                const table = obj.table
                const header = table.cols.map(({ label }) => label)
                const rows = table.rows.map(({ c }) => c.map((e) => (e ? e.v || '' : '')))
                return rows.map((row) => combineArrays(header, row))
            }
        })
}
