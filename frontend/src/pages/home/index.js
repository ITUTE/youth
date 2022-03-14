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

export default function Home() {
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

    const news = [
        {
            imgUrl: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/273598754_3168988113331655_4964156218595934195_n.png?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=YBPPWBIzm3UAX-abhVW&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT948YwxUwc_ZdJ_lOxfLYWHNKTD99zOIAhp6mnfYAa_8Q&oe=62174324',
            title: 'THÔNG BÁO VỀ HÌNH THỨC TỔ CHỨC LỚP HỌC, HỌC KỲ 2 NĂM HỌC 2021 - 2022 ',
            content:
                '1. Từ ngày 14 - 27/02/2022 \nĐối với các học phần lý thuyết, tích hợp, Giáo dục quốc phòng 1, Giáo dục quốc phòng 2: Nhà trường tổ chức dạy và học trực tuyến cho sinh viên theo thời khóa biểu của lớp học phần trong học kỳ 2 năm học 2021-2022...',
        },
        {
            imgUrl: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/272106611_3155071494723317_3723428237533859340_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=3tSCHng3qnAAX8WqRQK&tn=hcwJO57UoDbKxjj2&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT-lp5X10kh6Pea6lsXLDyK9jJ3lLV6aju606Q7nhOf8qA&oe=62177150',
            title: 'TRẬN CHUNG KẾT | GIẢI ĐẤU LIÊN QUÂN MOBILE MỞ RỘNG 2022  ',
            content:
                '1. Từ ngày 14 - 27/02/2022 \nĐối với các học phần lý thuyết, tích hợp, Giáo dục quốc phòng 1, Giáo dục quốc phòng 2: Nhà trường tổ chức dạy và học trực tuyến cho sinh viên theo thời khóa biểu của lớp học phần trong học kỳ 2 năm học 2021-2022...',
        },
    ]

    const currEvents = [
        {
            imgUrl: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/272057950_3154674674762999_2387629444420937740_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_ohc=GGbxxTcAHIIAX9H0y12&tn=hcwJO57UoDbKxjj2&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT9J-j149lYIxPnhxdhgLgAX_ynBcz2uGNob-bkHZ9yNYQ&oe=62180F11',
            title: 'XUÂN TÌNH NGUYỆN',
        },
        {
            imgUrl: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/271948279_3155741294656337_2251401646935471685_n.png?_nc_cat=108&ccb=1-5&_nc_sid=0debeb&_nc_ohc=Dn_LQEOWzUwAX9PEhJo&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_6JkeVjvbMNJLFN5ELj69l74iDJsf7LggHvS9ft1Kd4g&oe=62182147',
            title: 'IT SHOW',
        },
        {
            imgUrl: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/272106611_3155071494723317_3723428237533859340_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=3tSCHng3qnAAX_yLz2s&tn=hcwJO57UoDbKxjj2&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT_3aX0jSPdn-_BuD6zAVB93J1yYALJvdGifqB9b1ftpzQ&oe=62177150',
            title: 'CHUNG KẾT GIẢI LIÊN QUÂN MOBILE MỞ RỘNG KHOA CNTT 2022',
        },
    ]

    const highlightEvents = [
        [
            {
                imgUrl: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/272057950_3154674674762999_2387629444420937740_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_ohc=GGbxxTcAHIIAX9H0y12&tn=hcwJO57UoDbKxjj2&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT9J-j149lYIxPnhxdhgLgAX_ynBcz2uGNob-bkHZ9yNYQ&oe=62180F11',
                title: 'XUÂN TÌNH NGUYỆN',
            },
            {
                imgUrl: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/271948279_3155741294656337_2251401646935471685_n.png?_nc_cat=108&ccb=1-5&_nc_sid=0debeb&_nc_ohc=Dn_LQEOWzUwAX9PEhJo&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_6JkeVjvbMNJLFN5ELj69l74iDJsf7LggHvS9ft1Kd4g&oe=62182147',
                title: 'IT SHOW',
            },
            {
                imgUrl: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/272106611_3155071494723317_3723428237533859340_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=3tSCHng3qnAAX_yLz2s&tn=hcwJO57UoDbKxjj2&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT_3aX0jSPdn-_BuD6zAVB93J1yYALJvdGifqB9b1ftpzQ&oe=62177150',
                title: 'CHUNG KẾT GIẢI LIÊN QUÂN MOBILE MỞ RỘNG KHOA CNTT 2022',
            },
        ],
        [
            {
                imgUrl: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/271948279_3155741294656337_2251401646935471685_n.png?_nc_cat=108&ccb=1-5&_nc_sid=0debeb&_nc_ohc=Dn_LQEOWzUwAX9PEhJo&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_6JkeVjvbMNJLFN5ELj69l74iDJsf7LggHvS9ft1Kd4g&oe=62182147',
                title: 'IT SHOW',
            },
            {
                imgUrl: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/272057950_3154674674762999_2387629444420937740_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_ohc=GGbxxTcAHIIAX9H0y12&tn=hcwJO57UoDbKxjj2&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT9J-j149lYIxPnhxdhgLgAX_ynBcz2uGNob-bkHZ9yNYQ&oe=62180F11',
                title: 'XUÂN TÌNH NGUYỆN',
            },
            {
                imgUrl: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/272106611_3155071494723317_3723428237533859340_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=3tSCHng3qnAAX_yLz2s&tn=hcwJO57UoDbKxjj2&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT_3aX0jSPdn-_BuD6zAVB93J1yYALJvdGifqB9b1ftpzQ&oe=62177150',
                title: 'CHUNG KẾT GIẢI LIÊN QUÂN MOBILE MỞ RỘNG KHOA CNTT 2022',
            },
        ],
        [
            {
                imgUrl: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/272057950_3154674674762999_2387629444420937740_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_ohc=GGbxxTcAHIIAX9H0y12&tn=hcwJO57UoDbKxjj2&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT9J-j149lYIxPnhxdhgLgAX_ynBcz2uGNob-bkHZ9yNYQ&oe=62180F11',
                title: 'XUÂN TÌNH NGUYỆN',
            },
            {
                imgUrl: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/272106611_3155071494723317_3723428237533859340_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=3tSCHng3qnAAX_yLz2s&tn=hcwJO57UoDbKxjj2&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT_3aX0jSPdn-_BuD6zAVB93J1yYALJvdGifqB9b1ftpzQ&oe=62177150',
                title: 'CHUNG KẾT GIẢI LIÊN QUÂN MOBILE MỞ RỘNG KHOA CNTT 2022',
            },
            {
                imgUrl: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/271948279_3155741294656337_2251401646935471685_n.png?_nc_cat=108&ccb=1-5&_nc_sid=0debeb&_nc_ohc=Dn_LQEOWzUwAX9PEhJo&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_6JkeVjvbMNJLFN5ELj69l74iDJsf7LggHvS9ft1Kd4g&oe=62182147',
                title: 'IT SHOW',
            },
        ],
    ]
    const awards = [
        [
            {
                imgUrl: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/272057950_3154674674762999_2387629444420937740_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_ohc=GGbxxTcAHIIAX9H0y12&tn=hcwJO57UoDbKxjj2&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT9J-j149lYIxPnhxdhgLgAX_ynBcz2uGNob-bkHZ9yNYQ&oe=62180F11',
                title: 'Matering IT',
            },
            {
                imgUrl: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/271948279_3155741294656337_2251401646935471685_n.png?_nc_cat=108&ccb=1-5&_nc_sid=0debeb&_nc_ohc=Dn_LQEOWzUwAX9PEhJo&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_6JkeVjvbMNJLFN5ELj69l74iDJsf7LggHvS9ft1Kd4g&oe=62182147',
                title: 'Hackathon 24H',
            },
            {
                imgUrl: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/272106611_3155071494723317_3723428237533859340_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=3tSCHng3qnAAX_yLz2s&tn=hcwJO57UoDbKxjj2&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT_3aX0jSPdn-_BuD6zAVB93J1yYALJvdGifqB9b1ftpzQ&oe=62177150',
                title: 'Becoder',
            },
        ],
        [
            {
                imgUrl: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/271948279_3155741294656337_2251401646935471685_n.png?_nc_cat=108&ccb=1-5&_nc_sid=0debeb&_nc_ohc=Dn_LQEOWzUwAX9PEhJo&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_6JkeVjvbMNJLFN5ELj69l74iDJsf7LggHvS9ft1Kd4g&oe=62182147',
                title: 'IT SHOW',
            },
            {
                imgUrl: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/272057950_3154674674762999_2387629444420937740_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_ohc=GGbxxTcAHIIAX9H0y12&tn=hcwJO57UoDbKxjj2&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT9J-j149lYIxPnhxdhgLgAX_ynBcz2uGNob-bkHZ9yNYQ&oe=62180F11',
                title: 'XUÂN TÌNH NGUYỆN',
            },
            {
                imgUrl: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/272106611_3155071494723317_3723428237533859340_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=3tSCHng3qnAAX_yLz2s&tn=hcwJO57UoDbKxjj2&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT_3aX0jSPdn-_BuD6zAVB93J1yYALJvdGifqB9b1ftpzQ&oe=62177150',
                title: 'CHUNG KẾT GIẢI LIÊN QUÂN MOBILE MỞ RỘNG KHOA CNTT 2022',
            },
        ],
        [
            {
                imgUrl: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/272057950_3154674674762999_2387629444420937740_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_ohc=GGbxxTcAHIIAX9H0y12&tn=hcwJO57UoDbKxjj2&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT9J-j149lYIxPnhxdhgLgAX_ynBcz2uGNob-bkHZ9yNYQ&oe=62180F11',
                title: 'XUÂN TÌNH NGUYỆN',
            },
            {
                imgUrl: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/272106611_3155071494723317_3723428237533859340_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=3tSCHng3qnAAX_yLz2s&tn=hcwJO57UoDbKxjj2&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT_3aX0jSPdn-_BuD6zAVB93J1yYALJvdGifqB9b1ftpzQ&oe=62177150',
                title: 'CHUNG KẾT GIẢI LIÊN QUÂN MOBILE MỞ RỘNG KHOA CNTT 2022',
            },
            {
                imgUrl: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/271948279_3155741294656337_2251401646935471685_n.png?_nc_cat=108&ccb=1-5&_nc_sid=0debeb&_nc_ohc=Dn_LQEOWzUwAX9PEhJo&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_6JkeVjvbMNJLFN5ELj69l74iDJsf7LggHvS9ft1Kd4g&oe=62182147',
                title: 'IT SHOW',
            },
        ],
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
                        KHOA CÔNG NGHỆ THÔNG TIN - TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ
                        THUẬT THÀNH PHỐ HỒ CHÍ MINH
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
                    <div className={styles['bottom-left']}>SỰ KẾT HỢP CỦA</div>
                    <div className={styles['bottom-right']}></div>
                </div>
            </div>
            <div className={clsx('d-flex flex-column', styles.news)}>
                <SessionHeader title="TIN TỨC" />

                {news.map((item, index) => (
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
                        {currEvents.map((item, index) => (
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
            <div className={clsx('d-flex flex-column', styles.currEvent)}>
                <SessionHeader title="CÁC CHƯƠNG TRÌNH NỔI BẬT" />
                <MDBCarousel
                    showIndicators
                    showControls
                    className={styles.currEvent__body}
                >
                    <MDBCarouselInner>
                        {highlightEvents.map((item, index) => (
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
            <div
                className={clsx(
                    'd-flex flex-column',
                    styles.bluebg,
                    styles.currEvent,
                )}
            >
                <SessionHeader title="CUỘC THI HỌC THUẬT" />
                <MDBCarousel
                    showIndicators
                    showControls
                    className={styles.currEvent__body}
                >
                    <MDBCarouselInner>
                        {awards.map((item, index) => (
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
