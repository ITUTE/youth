import clsx from 'clsx'
import SessionHeader from 'components/sessionHeader'
import {
    MDBContainer,
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
} from 'mdb-react-ui-kit'
import React from 'react'
import styles from './index.module.scss'
import logoYIT from '../../assets/YIT.png';

export default function About() {
    const contacts = [
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1644160893/Logo/YIT_kegwop.png',
                title: 'Website Khoa Công nghệ Thông tin Trường Đại học Sư phạm Kỹ thuật TPHCM',
                url: 'http://fit.hcmute.edu.vn/',
            },
            {
                imgUrl: 'https://img.icons8.com/color/480/000000/facebook-new.png',
                title: 'Fanpage Đoàn - Hội Khoa Công Nghệ Thông Tin',
                url: 'https://www.facebook.com/DoanHoiITUTE',
            },
            {
                imgUrl: 'https://img.icons8.com/color/480/000000/facebook-new.png',
                title: 'Fanpage Khoa Công nghệ Thông tin',
                url: 'https://www.facebook.com/fit.hcmute.edu.vn',
            },
            {
                imgUrl: 'https://img.icons8.com/color/480/000000/facebook-new.png',
                title: 'DIỄN ĐÀN SINH VIÊN CÔNG NGHỆ THÔNG TIN',
                url: 'https://www.facebook.com/groups/cnttspkt',
            },
        ],
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648317647/Logo/zalo_dznmst.svg',
                title: 'Group Zalo Hỗ trợ Sinh viên 5 tốt - Khoa Công nghệ Thông tin HCMUTE',
                url: 'https://zalo.me/g/ncaoht371',
            },
            {
                imgUrl: 'https://img.icons8.com/color/480/000000/discord-new-logo.png',
                title: 'Group Discord Sinh viên Khoa Công nghệ Thông tin',
                url: 'https://discord.com/invite/pVCX6tyMXX',
            },
            {
                imgUrl: 'https://img.icons8.com/color/480/000000/facebook-new.png',
                title: 'Group SINH VIÊN 5 TỐT-KHOA CÔNG NGHỆ THÔNG TIN',
                url: 'https://www.facebook.com/groups/itute.sv5t'
            },
            {
                imgUrl: 'https://img.icons8.com/color/480/000000/youtube-play.png',
                title: 'Youtube Đoàn - Hội Khoa Công nghệ Thông tin',
                url: 'https://www.youtube.com/channel/UCGfDCrVFCmRTyQ5X8r0XZvw'
            },
        ],
    ]

    const address = {
        imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648229638/2020-2021/L%E1%BB%85%20tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T/SV5T_-_2020_2021_esdmu8.png',
        title: 'ĐOÀN - HỘI KHOA CÔNG NGHỆ THÔNG TIN, TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT TPHCM',
        content: 'Lầu 2, Trung tâm Tin học, Số 1, Võ Văn Ngân, Phường Linh Chiểu, Tp. Thủ Đức, Tp. Hồ Chí Minh'
    }

    return (
        <>
            <MDBContainer
                fluid
                className={clsx('d-flex flex-column', styles.container)}
            >
                <div className={clsx(styles.banner)}>
                    <div className={styles.left}>
                        <img src={logoYIT} alt="" width="150" />
                    </div>
                    <div className={styles.right}>
                        <h1>
                            ĐOÀN THANH NIÊN - HỘI SINH VIÊN
                        </h1>
                        <h2>
                            KHOA CÔNG NGHỆ THÔNG TIN - TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT THÀNH PHỐ HỒ CHÍ MINH
                        </h2>
                    </div>

                    <div className={styles.bottom}>
                        <div className={styles['bottom-left']}></div>
                        <div className={styles['bottom-right']}>BAN CHẤP HÀNH ĐOÀN - HỘI KHOA CÔNG NGHỆ THÔNG TIN</div>
                    </div>
                </div>
                {/* BCH */}
                <div className={clsx('d-flex flex-column', styles.news)}>
                    <SessionHeader title="BAN CHẤP HÀNH ĐOÀN - HỘI KHOA CÔNG NGHỆ THÔNG TIN" />
                    <img
                        src="https://res.cloudinary.com/yitute/image/upload/v1648310892/2021-2022/Nh%C3%A2n%20s%E1%BB%B1/DK_papol0.jpg"
                        alt="" />
                    <br />
                    <img
                        src="https://res.cloudinary.com/yitute/image/upload/v1648310892/2021-2022/Nh%C3%A2n%20s%E1%BB%B1/LCH_nenwne.jpg"
                        alt="" />
                </div>

                <div
                    className={clsx(
                        'd-flex flex-column',
                        styles.bluebg,
                        styles.currEvent,
                    )}
                >
                    <SessionHeader title="CÁC KÊNH THÔNG TIN LIÊN LẠC KHOA CÔNG NGHỆ THÔNG TIN" />
                    <MDBCarousel
                        showIndicators
                        showControls
                        className={styles.currEvent__body}
                    >
                        <MDBCarouselInner>
                            {contacts.map((item, index) => (
                                <MDBCarouselItem
                                    className={clsx({
                                        active: index === 0,
                                    })}
                                >
                                    <div className={styles['card-group']}>
                                        {item.map((contact, i) => (
                                            <MDBCard
                                                className={
                                                    styles['card-group__item']
                                                }
                                            >
                                                <MDBCardImage
                                                    src={contact.imgUrl}
                                                    position="top"
                                                    alt="..."
                                                />
                                                <MDBCardBody>
                                                    <a href={contact.url} alt={contact.title}>{contact.title}</a>
                                                </MDBCardBody>
                                            </MDBCard>
                                        ))}
                                    </div>
                                </MDBCarouselItem>
                            ))}
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>

                <div className={clsx('d-flex flex-column', styles.news)}>
                    <br />
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/d/u/2/embed?mid=160idwCJztoY6L8ETVrb7LIDXjfhGdFal&ehbc=2E312F" height="480">
                    </iframe>

                    <MDBCard className={styles.news__card}>
                        <MDBRow className="g-0">
                            <MDBCol md="12">
                                <MDBCardBody
                                    className={styles['news__card-body']}
                                >
                                    <MDBCardTitle>{address.title}</MDBCardTitle>
                                    <MDBCardText>{address.content}</MDBCardText>
                                    <MDBCardText>
                                        <small className="text-muted">
                                            Email: {' '}
                                            <a href="mailto:yit@hcmute.edu.vn" target="_blank" rel="noreferrer">
                                                yit@hcmute.edu.vn
                                            </a>
                                        </small>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </div>
            </MDBContainer>
        </>
    )
}
