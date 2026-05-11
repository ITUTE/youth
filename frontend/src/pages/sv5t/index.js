import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'

export default function SV5T() {
    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <div className={styles.heroInner} data-aos="fade-down">
                    <span className={styles.tag}>Đoàn - Hội Khoa Công nghệ Thông tin</span>
                    <h1 className={styles.heroTitle}>Sinh viên 5 tốt</h1>
                    <p className={styles.heroSub}>
                        Chương trình rèn luyện và tôn vinh sinh viên đạt thành tích xuất sắc
                        trên 5 tiêu chí: Đạo đức tốt · Học tập tốt · Thể lực tốt · Tình nguyện tốt · Hội nhập tốt
                    </p>
                    <div className={styles.heroActions} data-aos="fade-up" data-aos-delay="200">
                        <Link to="/dang-ky-sv5t" className={styles.btnPrimary}>
                            Đăng ký ngay
                        </Link>
                        <a
                            href="https://www.facebook.com/DoanHoiITUTE"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.btnOutline}
                        >
                            Tìm hiểu thêm
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.criteria}>
                {[
                    { num: '01', title: 'Đạo đức tốt', desc: 'Điểm rèn luyện cao, phẩm chất tốt, chấp hành tốt nội quy' },
                    { num: '02', title: 'Học tập tốt', desc: 'GPA đạt từ 7.5/10 trở lên, không nợ môn trong năm học' },
                    { num: '03', title: 'Thể lực tốt', desc: 'Tham gia rèn luyện thể dục thể thao thường xuyên' },
                    { num: '04', title: 'Tình nguyện tốt', desc: 'Tham gia các hoạt động tình nguyện, cộng đồng' },
                    { num: '05', title: 'Hội nhập tốt', desc: 'Tích cực tham gia sinh hoạt Đoàn - Hội, các hoạt động phong trào' },
                ].map((c, i) => (
                    <div key={c.num} className={styles.criteriaCard} data-aos="fade-up" data-aos-delay={i * 80}>
                        <span className={styles.criteriaNum}>{c.num}</span>
                        <h3 className={styles.criteriaTitle}>{c.title}</h3>
                        <p className={styles.criteriaDesc}>{c.desc}</p>
                    </div>
                ))}
            </div>

            <div className={styles.iframeSection}>
                <div className={styles.iframeHeader} data-aos="fade-up">
                    <h2>Thông tin chi tiết</h2>
                    <p>Xem đầy đủ tiêu chí và hướng dẫn đăng ký bên dưới</p>
                </div>
                <div className={styles.iframeWrap} data-aos="fade-up" data-aos-delay="100">
                    <iframe
                        title="Sinh viên 5 tốt"
                        src="https://itute.github.io/SV5T"
                        className={styles.iframe}
                    />
                </div>
            </div>
        </div>
    )
}
