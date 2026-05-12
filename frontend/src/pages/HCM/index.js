import React, { useState, useEffect, useRef } from 'react'
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
} from 'mdb-react-ui-kit'
import styles from './index.module.scss'
import * as TIEUSU from './tieu_su'
import * as DISAN from './di_san'
import * as THU_GUI_TN from './thu_gui_thanh_nien'
import * as HINH_ANH from './hinh_anh'
import * as SDLLV from './sua_doi_loi_lam_viec'

const SECTIONS = [
    { id: 'tieu-su',                label: 'Tiểu sử',              data: TIEUSU    },
    { id: 'di-san',                 label: 'Di sản',               data: DISAN     },
    { id: 'sua-doi-loi-lam-viec',   label: 'Sửa đổi lối làm việc', data: SDLLV    },
    { id: 'thu-gui-thanh-nien',     label: 'Thư gửi thanh niên',   data: THU_GUI_TN },
    { id: 'hinh-anh',               label: 'Hình ảnh',             data: HINH_ANH  },
]

/* ── Lightbox ── */
function Lightbox({ items, startIndex, onClose }) {
    const [cur, setCur] = useState(startIndex)

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowRight') setCur((c) => Math.min(c + 1, items.length - 1))
            if (e.key === 'ArrowLeft')  setCur((c) => Math.max(c - 1, 0))
        }
        window.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [items, onClose])

    return (
        <div className={styles.lbBackdrop} onClick={onClose}>
            <div className={styles.lbBox} onClick={(e) => e.stopPropagation()}>
                <button className={styles.lbClose} onClick={onClose} aria-label="Đóng">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>

                <button
                    className={`${styles.lbNav} ${styles.lbPrev}`}
                    onClick={() => setCur((c) => Math.max(c - 1, 0))}
                    disabled={cur === 0}
                    aria-label="Trước"
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"/>
                    </svg>
                </button>

                <div className={styles.lbImg}>
                    <img src={items[cur].imgUrl} alt={items[cur].title || ''} />
                </div>

                <button
                    className={`${styles.lbNav} ${styles.lbNext}`}
                    onClick={() => setCur((c) => Math.min(c + 1, items.length - 1))}
                    disabled={cur === items.length - 1}
                    aria-label="Sau"
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                    </svg>
                </button>

                {items[cur].title && (
                    <div className={styles.lbCaption}>
                        <span className={styles.lbCounter}>{cur + 1} / {items.length}</span>
                        <p>{items[cur].title}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

/* ── InView hook ── */
function useInView(threshold = 0.1) {
    const ref = useRef(null)
    const [inView, setInView] = useState(false)
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setInView(true) },
            { threshold }
        )
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [threshold])
    return [ref, inView]
}

/* ── Section ── */
function AnimatedSection({ id, data, index }) {
    const [headerRef, headerIn] = useInView()
    const [carouselRef, carouselIn] = useInView()
    const [gridRef, gridIn] = useInView(0.05)
    const [lightbox, setLightbox] = useState(null)

    const isPhotoEssay = id === 'hinh-anh'

    return (
        <section className={styles.section} id={id}>
            {/* Section header */}
            <div ref={headerRef} className={`${styles.sectionHeader} ${headerIn ? styles.visible : ''}`}>
                <span className={styles.sectionNum}>{String(index + 1).padStart(2, '0')}</span>
                <div>
                    <p className={styles.sectionTag}>Không gian văn hóa Hồ Chí Minh</p>
                    <h2 className={styles.sectionTitle}>{data.SECTION_TITLE}</h2>
                </div>
            </div>

            {/* Carousel */}
            {data.SLIDERS?.length > 0 && (
                <div ref={carouselRef} className={`${styles.carouselWrap} ${carouselIn ? styles.visible : ''}`}>
                    <MDBCarousel showIndicators showControls fade>
                        <MDBCarouselInner className="rounded-3">
                            {data.SLIDERS.map((item, i) => (
                                <MDBCarouselItem className={i === 0 ? 'active' : ''} key={i}>
                                    <MDBCarouselElement src={item.imgUrl} alt={item.title || ''} />
                                    {item.title && <MDBCarouselCaption><h5>{item.title}</h5></MDBCarouselCaption>}
                                </MDBCarouselItem>
                            ))}
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
            )}

            {/* Photo essay layout for Hình ảnh */}
            {isPhotoEssay ? (
                <div ref={gridRef} className={styles.essay}>
                    {data.ITEMS.map((item, i) => (
                        <div
                            key={i}
                            className={`${styles.essayRow} ${i % 2 !== 0 ? styles.essayReverse : ''} ${gridIn ? styles.essayVisible : ''}`}
                            style={{ transitionDelay: `${Math.min(i * 80, 640)}ms` }}
                        >
                            <div className={styles.essayImg} onClick={() => setLightbox(i)}>
                                <img src={item.imgUrl} alt="" loading="lazy" />
                                <div className={styles.essayImgOverlay}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                                        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.essayText}>
                                <span className={styles.essayIdx}>{String(i + 1).padStart(2, '0')}</span>
                                <p className={styles.essayCaption}>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* Regular image grid */
                <div ref={gridRef} className={styles.imageGrid}>
                    {data.ITEMS.map((item, i) => (
                        <div
                            key={i}
                            className={`${styles.imageCard} ${gridIn ? styles.imageVisible : ''}`}
                            style={{ transitionDelay: `${Math.min(i * 60, 600)}ms` }}
                            onClick={() => setLightbox(i)}
                        >
                            <div className={styles.imageInner}>
                                <img src={item.imgUrl} alt={item.title || ''} loading="lazy" />
                                <div className={styles.imageOverlay}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                                        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                                    </svg>
                                </div>
                            </div>
                            {item.title && <p className={styles.imageCaption}>{item.title}</p>}
                        </div>
                    ))}
                </div>
            )}

            {lightbox !== null && (
                <Lightbox
                    items={data.ITEMS}
                    startIndex={lightbox}
                    onClose={() => setLightbox(null)}
                />
            )}
        </section>
    )
}

/* ── Page ── */
export default function HCM() {
    const [activeTab, setActiveTab] = useState(SECTIONS[0].id)

    useEffect(() => {
        const onScroll = () => {
            for (const s of SECTIONS) {
                const el = document.getElementById(s.id)
                if (!el) continue
                const rect = el.getBoundingClientRect()
                if (rect.top <= 120 && rect.bottom > 120) { setActiveTab(s.id); break }
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <div className={styles.heroOverlay} />

                {/* Decorative corner patterns */}
                <div className={styles.heroDecorTL} aria-hidden="true" />
                <div className={styles.heroDecorBR} aria-hidden="true" />

                <div className={styles.heroContent}>
                    {/* Gold star */}
                    <div className={styles.heroStarWrap} data-aos="zoom-in">
                        <svg className={styles.heroStar} viewBox="0 0 100 100" aria-hidden="true">
                            <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" />
                        </svg>
                    </div>

                    <span className={styles.heroTag} data-aos="fade-down" data-aos-delay="60">
                        Đoàn - Hội Khoa Công nghệ Thông tin · HCMUTE
                    </span>

                    <div className={styles.heroTitleBlock} data-aos="fade-up" data-aos-delay="120">
                        <p className={styles.heroTitleEyebrow}>KHÔNG GIAN VĂN HÓA</p>
                        <h1 className={styles.heroTitle}>HỒ CHÍ MINH</h1>
                    </div>

                    <div className={styles.heroQuote} data-aos="fade-up" data-aos-delay="200">
                        <svg className={styles.heroQuoteIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.016.66-1.066 1.515-1.867 2.558-2.403L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368z"/>
                        </svg>
                        <p>Không có gì quý hơn độc lập, tự do</p>
                    </div>

                    <p className={styles.heroSub} data-aos="fade-up" data-aos-delay="260">
                        Tìm hiểu về tiểu sử, cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh —
                        Anh hùng giải phóng dân tộc, Danh nhân văn hóa thế giới
                    </p>

                    <div className={styles.heroNav} data-aos="fade-up" data-aos-delay="320">
                        {SECTIONS.map((s) => (
                            <button key={s.id} className={styles.heroNavBtn} onClick={() => scrollTo(s.id)}>
                                {s.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.heroWave}>
                    <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
                        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8f9fa"/>
                    </svg>
                </div>
            </div>

            <nav className={styles.tabs}>
                {SECTIONS.map((s) => (
                    <button
                        key={s.id}
                        className={`${styles.tab} ${activeTab === s.id ? styles.tabActive : ''}`}
                        onClick={() => scrollTo(s.id)}
                    >
                        {s.label}
                    </button>
                ))}
            </nav>

            <div className={styles.content}>
                {SECTIONS.map((s, i) => (
                    <AnimatedSection key={s.id} id={s.id} data={s.data} index={i} />
                ))}
            </div>
        </div>
    )
}
