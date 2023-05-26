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
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648145499/2020-2021/Xu%C3%A2n%20t%C3%ACnh%20nguy%E1%BB%87n%202021/Xu%C3%A2n_t%C3%ACnh_nguy%E1%BB%87n_2021_kk3pq9.jpg',
            title: 'XTN 2021',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648147095/2020-2021/Hackathon/Hackathon_2020_nsfbso.jpg',
            title: 'Hackathon 2022',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648147033/2020-2021/L%E1%BB%85%20tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T/Tuyen_duong_SV5T_oepslz.jpg',
            title: 'SV5T',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ]

    const news = [
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1685123777/2022-2023/TNTTLTLB-2023_njgot7.webp',
            title: 'THÔNG BÁO BÌNH XÉT DANH HIỆU THANH NIÊN TIÊN TIẾN LÀM THEO LỜI BÁC NĂM 2023',
            content:
                '🌻Thiết thực kỷ niệm 133 năm ngày sinh của chủ tịch Hồ Chí Minh 19/5/1890 - 19/5/2023 và chào mừng kỷ niệm 112 năm ngày Bác ra đi tìm đường cứu nước (5/6/1911 - 5/6/2023).🌻🌻 \n\n' +
                '🌸Nhằm tuyên dương cá nhân xuất sắc làm theo lời Bác, Đoàn trường tổ chức Tuyên dương gương điển hình “Thanh niên tiên tiến làm theo lời Bác” Trường Đại học Sư phạm Kỹ thuật TP. Hồ Chí Minh năm 2023"',
        },
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1685124234/2022-2023/olympic-ta-2023_aadnzw.webp',
            title: 'HƯỚNG DẪN ĐĂNG KÝ “OLYMPIC TIẾNG ANH HỌC SINH, SINH VIÊN TOÀN QUỐC” LẦN THỨ V',
            content:
                '✍️ Bạn là học sinh, sinh viên không ngại rèn luyện và muốn thử sức với các cuộc thi Tiếng Anh? Bạn là học sinh, sinh viên muốn tham gia sân chơi học tập vừa bổ ích vừa thú vị? Vậy thì còn chần chờ gì nữa hãy nhanh tay tham dự cuộc thi “OLYMPIC TIẾNG ANH HỌC SINH, SINH VIÊN TOÀN QUỐC” LẦN THỨ V bằng cách tạo TÀI KHOẢN DỰ THI ngay thôi nào! 📍Hãy xem hướng dẫn các bước đăng ký TÀI KHOẢN theo các bước sau đây nhé!',
        },
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1685123776/2022-2023/hcmute-run-2023_ioudpw.png',
            title: 'PHÁT ĐỘNG GIẢI CHẠY HCMUTE RUNNING - “HCMUTE RUN 2023”',
            content:
                '👉 Với mục đích chào mừng Đại hội Đại biểu Hội Sinh Viên Việt Nam Trường Đại học Sư Phạm Kỹ thuật TP Hồ Chí Minh lần thứ XI nhiệm kỳ 2023-2025 và gây quỹ cho một Mùa hè xanh thật thành công, Đoàn Thanh niên - Hội Sinh viên trường Đại học Sư phạm Kỹ thuật TP. HCM phối hợp với tổ chức VietRace365 xây dựng giải chạy trực tuyến HCMUTE RUNNING - "HCMUTE RUN 2023"... ' + 
                '👤Đối tượng: Sinh viên các trường Cao đẳng, Đại học trên địa bàn TP. Hồ Chí Minh; '
        },
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1685123775/2022-2023/anh-sang-soi-duong-2023_pao2aj.jpg',
            title: 'HỘI THI OLYMPIC TOÀN QUỐC CÁC MÔN KHOA HỌC MÁC - LÊNIN VÀ TƯ TƯỞNG HỒ CHÍ MINH “ÁNH SÁNG SOI ĐƯỜNG” LẦN THỨ V, NĂM 2023',
            content:
                'Nhằm mục đích tăng cường giáo dục chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh, qua đó nâng cao nhận thức chính trị, bồi dưỡng lý tưởng cách mạng cho đoàn viên, thanh niên trong trường học. Tạo điều kiện cho đoàn viên, thanh niên giao lưu, trao đổi kinh nghiệm trong việc tìm hiểu, học tập ...',
        },
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1685123778/2022-2023/mit-2023_wi5e6f.webp',
            title: 'ĐĂNG KÝ DỰ THI CUỘC THI HỌC THUẬT TRUYỀN THỐNG MASTERING IT  LẦN THỨ XVI NĂM 2023',
            content:
                'MASTERING IT - Một sân chơi học thuật lành mạnh, bổ ích đang chờ đón bạn, là nơi lý tưởng để bạn thỏa sức thể hiện tài năng, tầm hiểu biết của bản thân, bên cạnh đó bạn sẽ được trau dồi thêm nhiều kiến thức mới, tạo được mối quan hệ với những người bạn mới và chắc chắn rằng MIT 2023 sẽ giúp bạn có những trải nghiệm thú vị và đáng nhớ trên con đường học thuật của mình....',
        },
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1685125412/2022-2023/tieu-chuan-sv5t_ewfcrv.jpg',
            title: 'BỘ TIÊU CHUẨN XÉT CHỌN "SINH VIÊN 5 TỐT" VÀ "TẬP THỂ SINH VIÊN 5 TỐT" TPHCM (2022 - 2023)',
            content:
                '👉 Bạn muốn đặt ra lộ trình cho bản thân để phấn đấu và rèn luyện nhằm nâng cao giá trị bản thân 🤔 Bạn có thắc mắc làm sao để đạt được  danh hiệu cao quý "Sinh viên 5 tốt" và "Tập thể Sinh viên 5 tốt" cấp thành phố năm học 2021 - 2022 💖💖 Đừng lo, hãy cùng Sinh viên 5 tốt  ĐH Sư phạm Kỹ thuật TP. Hồ Chí Minh tìm hiểu về bộ tiêu chuẩn xét chọn "Sinh viên 5 tốt" và "Tập thể Sinh viên 5 tốt" Thành phố Hồ Chí Minh được áp dụng từ năm học 2022 - 2023 do BTK HSV TP Hồ Chí Minh ban hành các bạn nhé.',
        },
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648143814/2021-2022/Th%C3%B4ng%20b%C3%A1o/TB-hinh-thuc-hoc_pqmwwl.png',
            title: 'THÔNG BÁO VỀ HÌNH THỨC TỔ CHỨC LỚP HỌC, HỌC KỲ 2 NĂM HỌC 2021 - 2022 ',
            content:
                '1. Từ ngày 14 - 27/02/2022 \nĐối với các học phần lý thuyết, tích hợp, Giáo dục quốc phòng 1, Giáo dục quốc phòng 2: Nhà trường tổ chức dạy và học trực tuyến cho sinh viên theo thời khóa biểu của lớp học phần trong học kỳ 2 năm học 2021-2022...',
        },
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648144324/2021-2022/Li%C3%AAn%20Qu%C3%A2n%20mobile%20m%E1%BB%9F%20r%E1%BB%99ng/LQ_Mobile_atdlqw.jpg',
            title: 'TRẬN CHUNG KẾT | GIẢI ĐẤU LIÊN QUÂN MOBILE MỞ RỘNG 2022  ',
            content:
                '1. Từ ngày 14 - 27/02/2022 \nĐối với các học phần lý thuyết, tích hợp, Giáo dục quốc phòng 1, Giáo dục quốc phòng 2: Nhà trường tổ chức dạy và học trực tuyến cho sinh viên theo thời khóa biểu của lớp học phần trong học kỳ 2 năm học 2021-2022...',
        },
    ]

    const currEvents = [
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1685123778/2022-2023/mit-2023_wi5e6f.webp',
            // title: 'MASTERING IT 2023',
        },
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648146264/2021-2022/Hackathon/Hackathon-2022_awhnfg.png',
            // title: 'HACKATHON 2022',
        },
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648146366/2021-2022/Th%C3%A1ng%20thanh%20ni%C3%AAn/TTN_indytq.jpg',
            // title: 'THÁNG THANH NIÊN 2022',
        },
        {
            imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648146506/2021-2022/Tuy%C3%AAn%20d%C6%B0%C6%A1ng%20SV5T%20-%20IT%20Show/SV5T-IT_Show_dtuand.jpg',
            // title: 'LỄ TUYÊN DƯƠNG SINH VIÊN NĂM TỐT - IT SHOW',
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
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648144955/2020-2021/Mastering%20IT/MIT2021_ejzri7.jpg',
                title: 'Matering IT',
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648144592/2021-2022/Hackathon/Hackathon-2022_wgfc5n.png',
                title: 'Hackathon',
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648145092/2021-2022/beCod3r/beCod3r-2021_g0pdum.jpg',
                title: 'Becoder',
            },
        ],
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648145201/2021-2022/IT%20Show/IT-Show_qll6rm.jpg',
                title: 'IT SHOW',
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648145499/2020-2021/Xu%C3%A2n%20t%C3%ACnh%20nguy%E1%BB%87n%202021/Xu%C3%A2n_t%C3%ACnh_nguy%E1%BB%87n_2021_kk3pq9.jpg',
                title: 'XUÂN TÌNH NGUYỆN',
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648145614/2021-2022/Ch%E1%BB%A7%20nh%E1%BA%ADt%20xanh/CNX-20032022_zzsvif.jpg',
                title: 'CHỦ NHẬT XANH',
            },
        ],
        [
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648145722/2021-2022/Tr%E1%BA%A1i%20K%E1%BB%B9%20n%C4%83ng/TKN_ismten.png',
                title: 'TRẠI KỸ NĂNG',
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648145825/2021-2022/Kho%E1%BA%A3nh%20kh%E1%BA%AFc%20tr%C6%B0%E1%BB%9Dng%20t%C3%B4i/KKTT_hqrmqb.jpg',
                title: 'KHOẢNH KHẮC TRƯỜNG TÔI',
            },
            {
                imgUrl: 'https://res.cloudinary.com/yitute/image/upload/v1648145935/2021-2022/Trung%20thu%20y%C3%AAu%20th%C6%B0%C6%A1ng/TTYT_xk2hay.jpg',
                title: 'TRUNG THU YÊU THƯƠNG',
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
                    <div className={styles['bottom-left']}></div>
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
            {/* <div className={clsx('d-flex flex-column', styles.currEvent)}>
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
            </div> */}
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
