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
            text: 'SV5T',
            to: '/SV5T',
        },
        {
            text: 'Hỗ trợ sinh viên',
            to: '/support',
        },
        {
            text: 'Vinh danh',
            to: '/award',
        },
        {
            text: 'Về chúng tôi',
            to: '/about',
        },
        {
            text: 'Đăng nhập',
            to: '/login',
        },
    ])

    const homeSliders = [
        {
            imgUrl: 'https://vtv1.mediacdn.vn/thumb_w/650/2021/11/18/tom-holland-in-spider-man-far-from-home-16372219999081867730777-crop-1637222004036539914417.jpg',
            title: 'YEYE ANH TOM DEP TRAI',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqUb6BqHGWVZOIQXWn5nZUKOE07s_39hrO1FKmLOKlfRY07nru4TnoF_ps6qd0O_jdQ&usqp=CAU',
            title: 'NỮA NÈ',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            imgUrl: 'https://hiepsibaotap.com/wp-content/uploads/2018/09/8P8FOVZ-1.jpg',
            title: 'OKE NHÌN OKE ĐÓ',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ]

    return (
        <header className={styles.header}>
            <MDBNavbar sticky expand="lg" className="d-flex ">
                <MDBContainer fluid>
                    <MDBNavbarBrand className="font-weight-bold" href="#">
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
