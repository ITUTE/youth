import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'assets/YIT logo.png'
import styles from './index.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <div className={styles.footer__brand}>
                    <img src={logo} alt="YOUTH ITUTE Logo" />
                    <h3>YOUTH ITUTE</h3>
                    <p>
                        Văn phòng điện tử Đoàn - Hội Khoa Công nghệ Thông tin,
                        Trường Đại học Công nghệ Kỹ thuật TP. Hồ Chí Minh.
                    </p>
                </div>

                <div className={styles.footer__links}>
                    <h4>Liên kết nhanh</h4>
                    <ul>
                        <li><Link to="/">Trang chủ</Link></li>
                        <li><Link to="/office">Văn phòng điện tử</Link></li>
                        <li><Link to="/it-sv5t">Sinh viên 5 tốt</Link></li>
                        <li><Link to="/award">Vinh danh</Link></li>
                        <li><Link to="/HCM">Không gian HCM</Link></li>
                        <li><Link to="/about">Về chúng tôi</Link></li>
                        <li><Link to="/feedback">Đánh giá</Link></li>
                    </ul>
                </div>

                <div className={styles.footer__contact}>
                    <h4>Liên hệ</h4>
                    <p>01 Võ Văn Ngân, P. Thủ Đức</p>
                    <p> TP. Hồ Chí Minh</p>
                    <p>Trường Đại học Công nghệ Kỹ thuật TP.HCM</p>
                    <div className={styles.footer__social}>
                        <a
                            href="https://www.facebook.com/DoanHoiITUTE"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://github.com/ITUTE"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.footer__bottom}>
                <p>© 2025 YOUTH ITUTE · Khoa Công nghệ Thông tin · Đại học Công nghệ Kỹ thuật TP.HCM</p>
            </div>
        </footer>
    )
}

export default Footer
