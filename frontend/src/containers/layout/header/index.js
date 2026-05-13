import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
} from 'mdb-react-ui-kit'
import logo from 'assets/YIT logo.png'

import styles from './index.module.scss'

function NavDropdown({ label, items }) {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        function handleOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false)
        }
        document.addEventListener('mousedown', handleOutside)
        return () => document.removeEventListener('mousedown', handleOutside)
    }, [])

    return (
        <div className={styles.navDropdown} ref={ref}>
            <button
                className={styles.navDropdownToggle}
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
            >
                {label}
                <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>▾</span>
            </button>
            {open && (
                <div className={styles.navDropdownMenu}>
                    {items.map((item, i) => (
                        <Link
                            key={i}
                            to={item.to}
                            className={styles.navDropdownItem}
                            onClick={() => setOpen(false)}
                        >
                            {item.text}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

const NAV = [
    { text: 'Trang chủ', to: '/' },
    {
        text: 'Không gian',
        children: [
            { text: 'Không gian văn hóa HCM', to: '/HCM' },
            { text: 'ITER Green Campus', to: '/iter-green-campus' },
            { text: 'Ngày lễ lớn', to: '/ngay-le-lon' },
        ],
    },
    {
        text: 'Sinh viên 5 tốt',
        children: [
            { text: 'Thông tin SV5T', to: '/it-sv5t' },
            { text: 'Đăng ký SV5T', to: '/dang-ky-sv5t' },
        ],
    },
    { text: 'Hoạt động SV', to: '/hoat-dong-sinh-vien' },
    { text: 'Tài nguyên', to: '/tai-nguyen' },
    { text: 'Vinh danh', to: '/award' },
    {
        text: 'Thêm',
        children: [
            { text: 'Văn phòng điện tử', to: '/office' },
            { text: 'Bốc thăm', to: '/boc-tham' },
            { text: 'Đánh giá', to: '/feedback' },
            { text: 'Về chúng tôi', to: '/about' },
        ],
    },
]

export default function App() {
    const [showBasic, setShowBasic] = useState(false)

    return (
        <header className={styles.header}>
            <MDBNavbar sticky expand="lg" className="d-flex">
                <MDBContainer fluid>
                    <MDBNavbarBrand href="/" className={styles.brand}>
                        <img src={logo} alt="YIT Logo" className={styles.brand__logo} />
                        <div className={styles.brand__name}>YOUTH ITUTE</div>
                    </MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon="bars" fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 align-items-center justify-content-end">
                            {NAV.map((item, index) =>
                                item.children ? (
                                    <MDBNavbarItem key={index} className={styles.navItem}>
                                        <NavDropdown label={item.text} items={item.children} />
                                    </MDBNavbarItem>
                                ) : (
                                    <MDBNavbarItem key={index} className={styles.navItem}>
                                        <Link to={item.to}>{item.text}</Link>
                                    </MDBNavbarItem>
                                )
                            )}
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </header>
    )
}
