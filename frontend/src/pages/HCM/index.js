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
import * as TIEUSU from './tieu_su'
import * as DISAN from './di_san'
import * as THU_GUI_TN from './thu_gui_thanh_nien'
import * as HINH_ANH from './hinh_anh'
import * as SDLLV from './sua_doi_loi_lam_viec'

export default function HCM() {

    return (
        <>
            {/* TIỂU SỬ */}
            <MDBContainer
                fluid
                className={clsx('d-flex flex-column', styles.container)}
            >
                <div className={clsx(styles.banner)}>
                    <div className={styles.left}>
                        <h1>KHÔNG GIAN VĂN HÓA HỒ CHÍ MINH</h1>
                        <h2>
                            TIỂU SỬ, CUỘC ĐỜI VÀ SỰ NGHIỆP <br />
                            ANH HÙNG GIẢI PHÓNG DÂN TỘC, DANH NHÂN VĂN HÓA THẾ GIỚI
                        </h2>
                    </div>
                    
                    <div className={clsx(styles.right)}>
                        <MDBCarousel showIndicators showControls fade>
                            <MDBCarouselInner className="rounded-2 ">
                                {TIEUSU.SLIDERS.map((item, index) => (
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
                    <div className={styles.bottom} id="tieu-su">
                        <div className={styles['bottom-left']}></div>
                        <a href='#tieu-su' className={styles['bottom-right']}>{TIEUSU.SECTION_TITLE}</a>
                    </div>
                </div>

                <div
                    className={clsx(
                        'd-flex flex-column',
                        styles.bluebg,
                        styles.currEvent,
                    )}
                >
                    <MDBCarousel className={styles.currEvent__body} 
                    >
                        <div className={styles.imageShowcase}>
                            {TIEUSU.ITEMS.map((item, index) => (
                                <img src={item.imgUrl} alt={index} key={'tieusu-'+index} loading="lazy"/>
                            ))}
                        </div>
                    </MDBCarousel>
                </div>
            </MDBContainer>

            {/* DI SẢN */}
            <MDBContainer
                fluid
                className={clsx('d-flex flex-column', styles.container)}
            >
                <div className={clsx(styles.banner)}>
                    <div className={styles.left}>
                        <h1>KHÔNG GIAN VĂN HÓA HỒ CHÍ MINH</h1>
                        <h2>
                            BỘ SÁCH "DI SẢN HỒ CHÍ MINH"
                        </h2>
                    </div>
                    
                    <div className={clsx(styles.right)}>
                        <MDBCarousel showIndicators showControls fade>
                            <MDBCarouselInner className="rounded-2 ">
                                {DISAN.SLIDERS.map((item, index) => (
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
                    <div className={styles.bottom} id="di-san">
                        <div className={styles['bottom-left']}></div>
                        <a href='#di-san' className={styles['bottom-right']}>{DISAN.SECTION_TITLE}</a>
                    </div>
                </div>

                <div
                    className={clsx(
                        'd-flex flex-column',
                        styles.bluebg,
                        styles.currEvent,
                    )}
                >
                    <MDBCarousel className={styles.currEvent__body}
                    >
                        <div className={styles.imageShowcase}>
                            {DISAN.ITEMS.map((item, index) => (
                                <img src={item.imgUrl} alt={index} key={'tieusu-'+index} loading="lazy"/>
                            ))}
                        </div>
                    </MDBCarousel>
                </div>
            </MDBContainer>

            {/* SỬA ĐỔI LỐI LÀM VIỆC */}
            <MDBContainer
                fluid
                className={clsx('d-flex flex-column', styles.container)}
            >
                <div className={clsx(styles.banner)}>
                    <div className={styles.left}>
                        <h1>KHÔNG GIAN VĂN HÓA HỒ CHÍ MINH</h1>
                        <h2>
                            TÁC PHẨM "SỬA ĐỔI LỐI LÀM VIỆC"
                        </h2>
                    </div>
                    
                    <div className={clsx(styles.right)}>
                        <MDBCarousel showIndicators showControls fade>
                            <MDBCarouselInner className="rounded-2 ">
                                {SDLLV.SLIDERS.map((item, index) => (
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
                    <div className={styles.bottom} id="sua-doi-loi-lam-viec">
                        <div className={styles['bottom-left']}></div>
                        <a href='#sua-doi-loi-lam-viec' className={styles['bottom-right']}>{SDLLV.SECTION_TITLE}</a>
                    </div>
                </div>

                <div
                    className={clsx(
                        'd-flex flex-column',
                        styles.bluebg,
                        styles.currEvent,
                    )}
                >
                    <MDBCarousel className={styles.currEvent__body}
                    >
                        <div className={styles.imageShowcase}>
                            {SDLLV.ITEMS.map((item, index) => (
                                <img src={item.imgUrl} alt={index} key={'tieusu-'+index} loading="lazy"/>
                            ))}
                        </div>
                    </MDBCarousel>
                </div>
            </MDBContainer>

            {/* THƯ BÁC GỬI THANH NIÊN */}
            <MDBContainer
                fluid
                className={clsx('d-flex flex-column', styles.container)}
            >
                <div className={clsx(styles.banner)}>
                    <div className={styles.left}>
                        <h1>KHÔNG GIAN VĂN HÓA HỒ CHÍ MINH</h1>
                        <h2>
                            THƯ BÁC GỬI THANH NIÊN
                        </h2>
                    </div>
                    
                    <div className={clsx(styles.right)}>
                        <MDBCarousel showIndicators showControls fade>
                            <MDBCarouselInner className="rounded-2 ">
                                {THU_GUI_TN.SLIDERS.map((item, index) => (
                                    <MDBCarouselItem
                                        className={clsx(styles.bannerItem, {
                                            active: index === 0,
                                        })}
                                        styles={{height: '20vh !important'}}
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
                    <div className={styles.bottom} id="thu-gui-thanh-nien">
                        <div className={styles['bottom-left']}></div>
                        <a href='#thu-gui-thanh-nien' className={styles['bottom-right']}>{THU_GUI_TN.SECTION_TITLE}</a>
                    </div>
                </div>

                <div
                    className={clsx(
                        'd-flex flex-column',
                        styles.bluebg,
                        styles.currEvent,
                    )}
                >
                    <MDBCarousel className={styles.currEvent__body}
                    >
                        <div className={styles.imageShowcase}>
                            {THU_GUI_TN.ITEMS.map((item, index) => (
                                <img src={item.imgUrl} alt={index} key={'tieusu-'+index} loading="lazy"/>
                            ))}
                        </div>
                    </MDBCarousel>
                </div>
            </MDBContainer>

            {/* HÌNH ẢNH */}
            <MDBContainer
                fluid
                className={clsx('d-flex flex-column', styles.container)}
            >
                <div className={clsx(styles.banner)}>
                    <div className={styles.left}>
                        <h1>KHÔNG GIAN VĂN HÓA HỒ CHÍ MINH</h1>
                        <h2>
                            MỘT VÀI HÌNH ẢNH VỀ CHỦ TỊCH HỒ CHÍ MINH
                        </h2>
                    </div>
                    
                    <div className={clsx(styles.right)}>
                        <MDBCarousel showIndicators showControls fade>
                            <MDBCarouselInner className="rounded-2 ">
                                {HINH_ANH.SLIDERS.map((item, index) => (
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
                    <div className={styles.bottom} id="hinh-anh">
                        <div className={styles['bottom-left']}></div>
                        <a href='#hinh-anh' className={styles['bottom-right']}>{HINH_ANH.SECTION_TITLE}</a>
                    </div>
                </div>

                <div
                    className={clsx(
                        'd-flex flex-column',
                        styles.bluebg,
                        styles.currEvent,
                    )}
                >
                    <MDBCarousel className={styles.currEvent__body}
                    >
                        {HINH_ANH.ITEMS.map((item, index) => (
                            <MDBCard key={index} className={styles.news__card}>   
                                <MDBCardImage
                                    src={item.imgUrl}
                                    alt="..."
                                    className={styles['news__card-image']}
                                />
                                <MDBCardTitle className={styles['title_info']}>{item.title}</MDBCardTitle>
                            </MDBCard>
                            ))
                        }
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