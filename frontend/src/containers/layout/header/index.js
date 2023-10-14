import React, { useState } from 'react'
import clsx from 'clsx'
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
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
} from 'mdb-react-ui-kit'

import styles from './index.module.scss'

export default function App() {
    const [showBasic, setShowBasic] = useState(false)
    const [navigator, setNavigator] = useState([
        {
            text: 'Trang chủ',
            to: '/',
        },
        {
            text: 'Văn phòng điện tử',
            to: '/office',
        },
        // {
        //     text: 'CLB/Đội/Nhóm',
        //     to: '/club',
        // },
        {
            text: 'Sinh viên 5 tốt',
            to: '/it-sv5t',
        },
        {
            text: 'Đăng ký Sinh viên 5 tốt',
            to: '/dang-ky-sv5t',
        },
        {
            text: 'Không gian văn hóa Hồ Chí Minh',
            to: '/HCM',
        },
        {
            text: 'Vinh danh',
            to: '/award',
        },
        {
            text: 'Đánh giá',
            to: '/feedback',
        },
        {
            text: 'Về chúng tôi',
            to: '/about',
        },
        // {
        //     text: 'Đăng nhập',
        //     to: '/login',
        // },
    ])

    return (
        <header className={styles.header}>
            <MDBNavbar sticky expand="lg" className="d-flex ">
                <MDBContainer fluid>
                    <MDBNavbarBrand className="font-weight-bold" href="/">
                        YOUTH ITUTE
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
                        <input
                            type="text"
                            className={styles.inputsearch}
                            placeholder="Tìm kiếm..."
                        />
                        <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 align-items-center justify-content-end">
                            {navigator.map((nav, index) => (
                                <MDBNavbarItem
                                    key={index}
                                    className={styles.navItem}
                                >
                                    <Link to={nav.to}>{nav.text}</Link>
                                </MDBNavbarItem>
                            ))}
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </header>
    )
}
