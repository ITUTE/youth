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
} from 'mdb-react-ui-kit'
import React from 'react'
import styles from './index.module.scss'

export default function Home() {
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

    return (
        <MDBContainer
            fluid
            className={clsx('d-flex flex-row', styles.container)}
        >
            <div className="d-flex flex-column">
                <SessionHeader title="TIN TỨC" />

                {news.map((item) => (
                    <MDBCard className={styles.news__card}>
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
        </MDBContainer>
    )
}
