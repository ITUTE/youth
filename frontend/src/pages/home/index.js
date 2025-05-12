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
import * as NEWS from './news'
import * as EVENTS from './events'
import * as HIGHTLIGHT from './hightlight_events'

export default function Home() {
    const homeSliders = [
        {
            imgUrl: 'https://drive.google.com/file/d/1lMQrkBkaVAicIZ9qpvtkqjpvWUSntNNr/view?usp=sharing',
            title: 'HACKATHON 2024',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            imgUrl: 'https://drive.google.com/file/d/1d0_XAhK_ApVu1h-7jWz7TjL08n8xEg5H/view?usp=sharing',
            title: 'SÓNG IT - ITSHOW',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            imgUrl: 'https://drive.google.com/file/d/1JnDyFpYNazhrC0yTSSfxZeXQL5ZCkfCf/view?usp=sharing',
            title: 'XTN 2025',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ]

    return (
        <MDBContainer
            fluid
            className={clsx('d-flex flex-column', styles.container)}
        >
            <div className={clsx(styles.banner)}>
                <div className={styles.left}>
                    <h1>
                        ĐOÀN THANH NIÊN <br />
                        HỘI SINH VIÊN
                    </h1>
                    <h2>
                        KHOA CÔNG NGHỆ THÔNG TIN - 
                        TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT 
                        THÀNH PHỐ HỒ CHÍ MINH
                    </h2>
                </div>
                <div className={clsx(styles.right)}>
                    <MDBCarousel showIndicators showControls fade>
                        <MDBCarouselInner className="rounded-2 ">
                            {homeSliders.map((item, index) => (
                                <MDBCarouselItem
                                    className={clsx(styles.bannerItem, {
                                        active: index === 0,
                                    })}
                                    key={index}
                                >
                                    <MDBCarouselElement
                                        src={item.imgUrl}
                                        alt={item.title}
                                    />
                                    <MDBCarouselCaption>
                                        <h5>{item.title}</h5>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>
                            ))}
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
                <div className={styles.bottom}>
                    <div className={styles['bottom-left']}></div>
                    <div className={styles['bottom-right']}></div>
                </div>
            </div>
            <div className={clsx('d-flex flex-column', styles.news)}>
                <SessionHeader title="TIN TỨC" />

                {NEWS.NEWS_2022_2023.map((item, index) => (
                    <MDBCard key={index} className={styles.news__card}>
                        <MDBRow className="g-0">
                            <MDBCol md="4">
                                <MDBCardImage
                                    src={item.imgUrl}
                                    alt="..."
                                    fluid
                                    className={styles['news__card-image']}
                                />
                            </MDBCol>
                            <MDBCol md="8">
                                <MDBCardBody
                                    className={styles['news__card-body']}
                                >
                                    <MDBCardTitle>{item.title}</MDBCardTitle>
                                    <MDBCardText>{item.content}</MDBCardText>
                                    <MDBCardText>
                                        <small className="text-muted">
                                            Last updated 3 mins ago
                                        </small>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                ))}
            </div>
            <div
                className={clsx(
                    'd-flex flex-column',
                    styles.currEvent,
                    styles.bluebg,
                )}
            >
                <SessionHeader title="CHƯƠNG TRÌNH ĐANG DIỄN RA" />
                <MDBCarousel showControls className={styles.currEvent__body}>
                    <MDBCarouselInner>
                        {EVENTS.EVENTS_2022_2023.map((item, index) => (
                            <MDBCarouselItem
                                className={clsx({
                                    active: index === 0,
                                })}
                            >
                                <MDBCarouselElement
                                    className={styles['currEvent__body-img']}
                                    src={item.imgUrl}
                                    alt={item.title}
                                />
                                <MDBCarouselCaption>
                                    <span
                                        className={
                                            styles['currEvent__body-caption']
                                        }
                                    >
                                        {item.title}
                                    </span>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                        ))}
                    </MDBCarouselInner>
                </MDBCarousel>
            </div>
            <div
                className={clsx(
                    'd-flex flex-column',
                    styles.bluebg,
                    styles.currEvent,
                )}
            >
                <SessionHeader title="CÁC CHƯƠNG TRÌNH NỔI BẬT" />
                <MDBCarousel
                    showIndicators
                    showControls
                    className={styles.currEvent__body}
                >
                    <MDBCarouselInner>
                        {HIGHTLIGHT.HIGHTLIGHT_2022_2023.map((item, index) => (
                            <MDBCarouselItem
                                className={clsx({
                                    active: index === 0,
                                })}
                            >
                                <div className={styles['card-group']}>
                                    {item.map((event, i) => (
                                        <MDBCard
                                            className={
                                                styles['card-group__item']
                                            }
                                        >
                                            <MDBCardImage
                                                src={event.imgUrl}
                                                position="top"
                                                alt="..."
                                            />
                                            <MDBCardBody>
                                                {event.title}
                                            </MDBCardBody>
                                        </MDBCard>
                                    ))}
                                </div>
                            </MDBCarouselItem>
                        ))}
                    </MDBCarouselInner>
                </MDBCarousel>
            </div>
        </MDBContainer>
    )
}
