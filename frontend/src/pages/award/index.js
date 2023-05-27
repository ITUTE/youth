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
    MDBBtn,
} from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import log from 'eslint-plugin-react/lib/util/log'
import * as SV5T from './sv5t'
import * as ICPC from './olympic_tin_hoc_icpc'
import * as TNTT from './tntt'
import * as DVUT from './dvut'
import * as SongIT from './song_it'

export default function Award() {

    return (
        <>
            {/* SINH VIÊN 5 TỐT */}
            <MDBContainer
                fluid
                className={clsx('d-flex flex-column', styles.container)}
            >
                <div className={clsx(styles.banner)}>
                    <div className={styles.left}>
                        <h1>VINH DANH</h1>
                        <h2>
                            SINH VIÊN ĐẠT THÀNH TÍCH CAO CÁC LĨNH VỰC <br />
                            KHOA CÔNG NGHỆ THÔNG TIN - TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT THÀNH PHỐ HỒ CHÍ MINH
                        </h2>
                    </div>
                    <div className={clsx(styles.right)}>
                        <MDBCarousel showIndicators showControls fade>
                            <MDBCarouselInner className="rounded-2 ">
                                {SV5T.SLIDERS_SV5T.map((item, index) => (
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
                        <div className={styles['bottom-right']}>SINH VIÊN 5 TỐT</div>
                    </div>
                </div>

                {/* 2021 - 2022 */}
                <div className={clsx('d-flex flex-column', styles.news)}>
                    <SessionHeader title="2021 - 2022" />

                    {SV5T.SV5T_2021_2022.map((item, index) => (
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
                                                Last updated 4 days ago
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
                        styles.bluebg,
                        styles.currEvent,
                    )}
                >
                    <MDBCarousel
                        showIndicators
                        showControls
                        className={styles.currEvent__body}
                    >
                        <MDBCarouselInner>
                            {SV5T.awards_SV5T_2021_2022.map((item, index) => (
                                <MDBCarouselItem
                                    className={clsx({
                                        active: index === 0,
                                    })}
                                >
                                    <div className={styles['card-group']}>
                                        {item.map((student, i) => (
                                            <MDBCard
                                                key={i}
                                                className={
                                                    styles['card-group__item']
                                                }
                                            >
                                                <MDBCardImage
                                                    src={student.imgUrl}
                                                    position="top"
                                                    alt="..."
                                                />
                                                <MDBCardBody>
                                                    {/* 
                                                <MDBCardBody>
                                                    <MDBCardTitle>{student.title}</MDBCardTitle>
                                                    <a href="https://fb.com/DoanHoiITUTE">Chi tiết</a>
                                                    <MDBCardText>{student.sid}</MDBCardText>
                                                    <MDBBtn href="#">Chi tiết</MDBBtn>
                                                </MDBCardBody> 
                                                */}
                                                </MDBCardBody>
                                            </MDBCard>
                                        ))}
                                    </div>
                                </MDBCarouselItem>
                            ))}
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>

                {/* 2020 - 2021 */}
                <div className={clsx('d-flex flex-column', styles.news)}>
                    <SessionHeader title="2020 - 2021" />

                    {SV5T.SV5T_2020_2021.map((item, index) => (
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
                                                Last updated 4 days ago
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
                        styles.bluebg,
                        styles.currEvent,
                    )}
                >
                    <MDBCarousel
                        showIndicators
                        showControls
                        className={styles.currEvent__body}
                    >
                        <MDBCarouselInner>
                            {SV5T.awards_SV5T_2020_2021.map((item, index) => (
                                <MDBCarouselItem
                                    className={clsx({
                                        active: index === 0,
                                    })}
                                >
                                    <div className={styles['card-group']}>
                                        {item.map((student, i) => (
                                            <MDBCard
                                                key={i}
                                                className={
                                                    styles['card-group__item']
                                                }
                                            >
                                                <MDBCardImage
                                                    src={student.imgUrl}
                                                    position="top"
                                                    alt="..."
                                                />
                                                <MDBCardBody>
                                                    {/* 
                                                <MDBCardBody>
                                                    <MDBCardTitle>{student.title}</MDBCardTitle>
                                                    <a href="https://fb.com/DoanHoiITUTE">Chi tiết</a>
                                                    <MDBCardText>{student.sid}</MDBCardText>
                                                    <MDBBtn href="#">Chi tiết</MDBBtn>
                                                </MDBCardBody> 
                                                */}
                                                </MDBCardBody>
                                            </MDBCard>
                                        ))}
                                    </div>
                                </MDBCarouselItem>
                            ))}
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>

                {/* 2019 - 2020 */}
                <div className={clsx('d-flex flex-column', styles.news)}>
                    <SessionHeader title="2019 - 2020" />

                    {SV5T.SV5T_2019_2020.map((item, index) => (
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
                                                Last updated 5 days ago
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
                        styles.bluebg,
                        styles.currEvent,
                    )}
                >
                    <MDBCarousel
                        showIndicators
                        showControls
                        className={styles.currEvent__body}
                    >
                        <MDBCarouselInner>
                            {SV5T.awards_SV5T_2019_2020.map((item, index) => (
                                <MDBCarouselItem
                                    className={clsx({
                                        active: index === 0,
                                    })}
                                >
                                    <div className={styles['card-group']}>
                                        {item.map((student, i) => (
                                            <MDBCard
                                                key={i}
                                                className={
                                                    styles['card-group__item']
                                                }
                                            >
                                                <MDBCardImage
                                                    src={student.imgUrl}
                                                    position="top"
                                                    alt="..."
                                                />
                                                <MDBCardBody>
                                                    {/* 
                                                <MDBCardBody>
                                                    <MDBCardTitle>{student.title}</MDBCardTitle>
                                                    <a href="https://fb.com/DoanHoiITUTE">Chi tiết</a>
                                                    <MDBCardText>{student.sid}</MDBCardText>
                                                    <MDBBtn href="#">Chi tiết</MDBBtn>
                                                </MDBCardBody> 
                                                */}
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

            {/* ĐOÀN VIÊN ƯU TÚ */}
            <MDBContainer
                fluid
                className={clsx('d-flex flex-column', styles.container)}
            >
                <div className={clsx(styles.banner)}>
                    <div className={styles.left}>
                        <h1>VINH DANH</h1>
                        <h2>
                            SINH VIÊN ĐẠT THÀNH TÍCH CAO CÁC LĨNH VỰC <br />
                            KHOA CÔNG NGHỆ THÔNG TIN - TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT THÀNH PHỐ HỒ CHÍ MINH
                        </h2>
                    </div>
                    <div className={clsx(styles.right)}>
                        <MDBCarousel showIndicators showControls fade>
                            <MDBCarouselInner className="rounded-2 ">
                                {DVUT.homeSliders_DVUT.map((item, index) => (
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
                        <div className={styles['bottom-right']}>ĐOÀN VIÊN ƯU TÚ</div>
                    </div>
                </div>
                {/* 2021 - 2022 */}
                <div
                    className={clsx(
                        'd-flex flex-column',
                        styles.currEvent,
                        styles.bluebg,
                    )}
                >
                    <SessionHeader title="2021 - 2022" />
                    <MDBCarousel showControls className={styles.currEvent__body}>
                        <MDBCarouselInner>
                            {DVUT.DVUT_2021_2022.map((item, index) => (
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
            </MDBContainer>

            {/* THANH NIÊN TIÊN TIẾN LÀM THEO LỜI BÁC */}
            <MDBContainer
                fluid
                className={clsx('d-flex flex-column', styles.container)}
            >
                <div className={clsx(styles.banner)}>
                    <div className={styles.left}>
                        <h1>VINH DANH</h1>
                        <h2>
                            SINH VIÊN ĐẠT THÀNH TÍCH CAO CÁC LĨNH VỰC <br />
                            KHOA CÔNG NGHỆ THÔNG TIN - TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT THÀNH PHỐ HỒ CHÍ MINH
                        </h2>
                    </div>
                    <div className={clsx(styles.right)}>
                        <MDBCarousel showIndicators showControls fade>
                            <MDBCarouselInner className="rounded-2 ">
                                {TNTT.homeSliders_TNTT.map((item, index) => (
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
                        <div className={styles['bottom-right']}>THANH NIÊN TIÊN TIẾN LÀM THEO LỜI BÁC</div>
                    </div>
                </div>
                {/* 2020 - 2021 */}
                <div className={clsx('d-flex flex-column', styles.news)}>
                    <SessionHeader title="2020 - 2021" />

                    {TNTT.TNTT_2020_2021.map((item, index) => (
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
                                                Last updated 8 days ago
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
                        styles.bluebg,
                        styles.currEvent,
                    )}
                >
                    <MDBCarousel
                        showIndicators
                        showControls
                        className={styles.currEvent__body}
                    >
                        <MDBCarouselInner>
                            {TNTT.awards_TNTT_2020_2021.map((item, index) => (
                                <MDBCarouselItem
                                    className={clsx({
                                        active: index === 0,
                                    })}
                                >
                                    <div className={styles['card-group']}>
                                        {item.map((student, i) => (
                                            <MDBCard
                                                key={i}
                                                className={
                                                    styles['card-group__item']
                                                }
                                            >
                                                <MDBCardImage
                                                    src={student.imgUrl}
                                                    position="top"
                                                    alt="..."
                                                />
                                                <MDBCardBody>
                                                    {/* 
                                                <MDBCardBody>
                                                    <MDBCardTitle>{student.title}</MDBCardTitle>
                                                    <a href="https://fb.com/DoanHoiITUTE">Chi tiết</a>
                                                    <MDBCardText>{student.sid}</MDBCardText>
                                                    <MDBBtn href="#">Chi tiết</MDBBtn>
                                                </MDBCardBody> 
                                                */}
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

            {/* SÓNG IT - GƯƠNG ĐIỂN HÌNH TUỔI TRẺ CÔNG NGHỆ THÔNG TIN */}
            <MDBContainer
                fluid
                className={clsx('d-flex flex-column', styles.container)}
            >
                <div className={clsx(styles.banner)}>
                    <div className={styles.left}>
                        <h1>VINH DANH</h1>
                        <h2>
                            SINH VIÊN ĐẠT THÀNH TÍCH CAO CÁC LĨNH VỰC <br />
                            KHOA CÔNG NGHỆ THÔNG TIN - TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT THÀNH PHỐ HỒ CHÍ MINH
                        </h2>
                    </div>
                    <div className={clsx(styles.right)}>
                        <MDBCarousel showIndicators showControls fade>
                            <MDBCarouselInner className="rounded-2 ">
                                {SongIT.homeSliders_SongIT.map((item, index) => (
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
                        <div className={styles['bottom-right']}>SÓNG IT - GƯƠNG ĐIỂN HÌNH TUỔI TRẺ CÔNG NGHỆ THÔNG TIN</div>
                    </div>
                </div>
                {/* 2020 - 2021 */}
                <div className={clsx('d-flex flex-column', styles.news)}>
                    <SessionHeader title="2021 - 2022" />

                    {SongIT.SongIT_2021_2022.map((item, index) => (
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
                                                Last updated 8 days ago
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
                        styles.bluebg,
                        styles.currEvent,
                    )}
                >
                    <MDBCarousel
                        showIndicators
                        showControls
                        className={styles.currEvent__body}
                    >
                        <MDBCarouselInner>
                            {SongIT.awards_SongIT_2021_2022.map((item, index) => (
                                <MDBCarouselItem
                                    className={clsx({
                                        active: index === 0,
                                    })}
                                >
                                    <div className={styles['card-group']}>
                                        {item.map((student, i) => (
                                            <MDBCard
                                                key={i}
                                                className={
                                                    styles['card-group__item']
                                                }
                                            >
                                                <MDBCardImage
                                                    src={student.imgUrl}
                                                    position="top"
                                                    alt="..."
                                                />
                                                <MDBCardBody>
                                                    {/* 
                                                <MDBCardBody>
                                                    <MDBCardTitle>{student.title}</MDBCardTitle>
                                                    <a href="https://fb.com/DoanHoiITUTE">Chi tiết</a>
                                                    <MDBCardText>{student.sid}</MDBCardText>
                                                    <MDBBtn href="#">Chi tiết</MDBBtn>
                                                </MDBCardBody> 
                                                */}
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

             {/* OLYMPIC TIN HỌC */}
             <MDBContainer
                fluid
                className={clsx('d-flex flex-column', styles.container)}
            >
                <div className={clsx(styles.banner)}>
                    <div className={styles.left}>
                        <h1>VINH DANH</h1>
                        <h2>
                            SINH VIÊN ĐẠT THÀNH TÍCH CAO CÁC LĨNH VỰC <br />
                            KHOA CÔNG NGHỆ THÔNG TIN - TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT THÀNH PHỐ HỒ CHÍ MINH
                        </h2>
                    </div>
                    <div className={clsx(styles.right)}>
                        <MDBCarousel showIndicators showControls fade>
                            <MDBCarouselInner className="rounded-2 ">
                                {ICPC.SLIDERS_OLYMPIC_TIN_HOC_ICPC_2022.map((item, index) => (
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
                        <div className={styles['bottom-right']}>OLYMPIC TIN HỌC SINH VIÊN VIỆT NAM LẦN THỨ 31, PROCON VIỆT NAM VÀ KỲ THI LẬP TRÌNH QUỐC TẾ ICPC KHU VỰC CHÂU Á - TP. HỒ CHÍ MINH 2022</div>
                    </div>
                </div>
                {/* 2022 */}
                <div className={clsx('d-flex flex-column', styles.news)}>
                    <SessionHeader title="2022" />

                    {ICPC.OLYMPIC_TIN_HOC_ICPC_2022.map((item, index) => (
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
                                                Last updated 8 days ago
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
                        styles.bluebg,
                        styles.currEvent,
                    )}
                >
                    <MDBCarousel
                        showIndicators
                        showControls
                        className={styles.currEvent__body}
                    >
                        <MDBCarouselInner>
                            {ICPC.AWARDS_OLYMPIC_TIN_HOC_ICPC_2022.map((item, index) => (
                                <MDBCarouselItem
                                    className={clsx({
                                        active: index === 0,
                                    })}
                                >
                                    <div className={styles['card-group']}>
                                        {item.map((student, i) => (
                                            <MDBCard
                                                key={i}
                                                className={
                                                    styles['card-group__item']
                                                }
                                            >
                                                <MDBCardImage
                                                    src={student.imgUrl}
                                                    position="top"
                                                    alt="..."
                                                />
                                                {/* 
                                                <MDBCardBody>
                                                    <MDBCardTitle>{student.title}</MDBCardTitle>
                                                    <a href="https://fb.com/DoanHoiITUTE">Chi tiết</a>
                                                    <MDBCardText>{student.sid}</MDBCardText>
                                                    <MDBBtn href="#">Chi tiết</MDBBtn>
                                                </MDBCardBody> 
                                                */}
                                            </MDBCard>
                                        ))}
                                    </div>
                                </MDBCarouselItem>
                            ))}
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
            </MDBContainer>
        </>
    )
}


export const GG_SHEET_URL = "https://docs.google.com/spreadsheets/d/15OgjKPQIg8_hSGISfdgvtSyome2zxQkVpbGPcm5IGpI/gviz/tq?tqx=out:json"

export function combineArrays(first, second) {
    return first.reduce((acc, val, ind) => {
      acc[val] = second[ind];
      return acc;
    }, {});
  };

export function getGoogleSheetData(url) {
    return fetch(url)
      .then(r => r.text())
      .then(data => {
        const r = data.match(/google\.visualization\.Query\.setResponse\(([\s\S\w]+)\)/);
        if (r && r.length === 2) {
          const obj = JSON.parse(r[1]);
          const table = obj.table;
          const header = table.cols.map(({ label } ) => label);
          const rows = table.rows.map(({ c } ) => c.map((e) => e ? (e.v || "") : "")); // Modified from const rows = table.rows.map(({c}) => c.map(({v}) => v));
          var result = rows.map((row ) => {
            var student = combineArrays(header, row);
            return student;
          });

          return result;
        }
      })
  }