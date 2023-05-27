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
import { CONTACTS } from './contact'

export default function About() {
   

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
                        <h1 style={{fontSize: '3.5rem'}}>
                            ĐOÀN THANH NIÊN - HỘI SINH VIÊN
                        </h1>
                        <h2>
                            KHOA CÔNG NGHỆ THÔNG TIN - TRƯỜNG ĐH SƯ PHẠM KỸ THUẬT THÀNH PHỐ HỒ CHÍ MINH
                        </h2>
                    </div>

                    <div className={styles.bottom}>
                        <div className={styles['bottom-left']}></div>
                        <div className={styles['bottom-right']}>BAN CHẤP HÀNH ĐOÀN - HỘI KHOA CÔNG NGHỆ THÔNG TIN</div>
                    </div>
                </div>

                {/* BCH ĐOÀN KHOA*/}
                <div className={clsx('d-flex flex-column', styles.news)}>
                    <SessionHeader title="BAN CHẤP HÀNH ĐOÀN KHOA CÔNG NGHỆ THÔNG TIN" />
                    <img src="https://res.cloudinary.com/yitute/image/upload/v1685175681/2022-2023/bch-doan-khoa.png" alt="" />
                </div>

                {/* BCH LCH KHOA*/}
                <div className={clsx('d-flex flex-column', styles.news)}>
                    <SessionHeader title="BAN CHẤP HÀNH LIÊN CHI HỘI KHOA CÔNG NGHỆ THÔNG TIN" />
                    <img src="https://res.cloudinary.com/yitute/image/upload/v1685175734/2022-2023/bch-lch.png" alt="" />
                </div>

                <div
                    className={clsx(
                        'd-flex flex-column',
                        styles.bluebg,
                        styles.currEvent,
                    )}
                >
                    <SessionHeader title="CÁC KÊNH THÔNG TIN LIÊN LẠC KHOA CÔNG NGHỆ THÔNG TIN" />
                    {CONTACTS.map((item, index) => (
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
                               ))
                            }
                        </div>
                    ))}
                </div>

                <div className={clsx('d-flex flex-column', styles.news)}>
                    <br />
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.485467675207!2d106.76933817490898!3d10.850632389302698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1685176506201!5m2!1svi!2s" height="480">
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
