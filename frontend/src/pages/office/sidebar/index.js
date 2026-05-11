import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/YIT logo.png'
import Img1 from '../../../assets/office icon/1.png'
import Img2 from '../../../assets/office icon/2.png'
import styles from './index.module.scss'

const NAV_ITEMS = [
    { to: '/office/vanban', icon: Img1, label: 'Văn bản' },
    { to: '/office/bieumau', icon: Img2, label: 'Biểu mẫu' },
]

export default function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.brand}>
                <img src={logo} alt="YIT Logo" className={styles.logo} />
                <span className={styles.brandName}>Văn phòng điện tử</span>
                <span className={styles.brandSub}>Đoàn - Hội Khoa CNTT</span>
            </div>

            <nav className={styles.nav}>
                <p className={styles.navSection}>Danh mục</p>
                {NAV_ITEMS.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            `${styles.navItem} ${isActive ? styles.active : ''}`
                        }
                    >
                        <img src={item.icon} alt={item.label} className={styles.navIcon} />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className={styles.footer}>
                <p>YOUTH ITUTE &copy; 2025</p>
            </div>
        </aside>
    )
}
