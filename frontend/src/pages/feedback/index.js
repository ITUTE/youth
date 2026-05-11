import React from 'react'
import styles from './index.module.scss'

export default function Feedback() {
    return (
        <div className={styles.page}>
            <div className={styles.header} data-aos="fade-down">
                <h1 className={styles.title}>Đánh giá & Góp ý</h1>
                <p className={styles.sub}>Chia sẻ ý kiến của bạn để chúng tôi cải thiện hoạt động Đoàn - Hội</p>
            </div>
            <div className={styles.iframeWrap} data-aos="fade-up">
                <iframe
                    title="feedback"
                    src="https://padlet.com/embed/dljssv8mauksx2bq"
                    frameBorder="0"
                    allow="camera;microphone;geolocation"
                    className={styles.iframe}
                />
            </div>
        </div>
    )
}
