import clsx from "clsx";
import SessionHeader from "components/sessionHeader";
import {
  MDBContainer,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import React from "react";
import styles from "./index.module.scss";
import logoYIT from "../../assets/YIT.png";
import { CONTACTS } from "./contact";

export default function About() {
  const address = {
    title:
      "ĐOÀN - HỘI KHOA CÔNG NGHỆ THÔNG TIN, TRƯỜNG ĐẠI HỌC CÔNG NGHỆ KỸ THUẬT TPHCM",
    content: "Tầng Hầm, Số 1, Võ Văn Ngân, Phường Thủ Đức, Tp. Hồ Chí Minh",
  };

  return (
    <>
      <MDBContainer
        fluid
        className={clsx("d-flex flex-column", styles.container)}
      >
        {/* Banner */}
        <div className={styles.banner}>
          <div className={styles.left}>
            <img src={logoYIT} alt="" width="150" loading="lazy" />
          </div>
          <div className={styles.right}>
            <h1 style={{ fontSize: "3.5rem" }}>
              ĐOÀN THANH NIÊN - HỘI SINH VIÊN
            </h1>
            <h2>
              KHOA CÔNG NGHỆ THÔNG TIN - TRƯỜNG ĐH CÔNG NGHỆ KỸ THUẬT TPHCM
            </h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles["bottom-left"]}></div>
            <div className={styles["bottom-right"]}>
              BAN CHẤP HÀNH ĐOÀN - HỘI KHOA CÔNG NGHỆ THÔNG TIN
            </div>
          </div>
        </div>

        {/* BCH Đoàn Khoa */}
        <div
          className={clsx("d-flex flex-column", styles.news)}
          data-aos="fade-up"
        >
          <SessionHeader title="BAN CHẤP HÀNH ĐOÀN KHOA CÔNG NGHỆ THÔNG TIN" />
          <img
            data-aos="zoom-in"
            data-aos-delay="100"
            src="https://res.cloudinary.com/dp5xqgbsj/image/upload/v1747086498/Slide.pptx_vgjo07.png"
            alt=""
            loading="lazy"
            style={{
              borderRadius: "0.75rem",
              boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        {/* BCH LCH Khoa */}
        <div
          className={clsx("d-flex flex-column", styles.news)}
          data-aos="fade-up"
        >
          <SessionHeader title="BAN CHẤP HÀNH LIÊN CHI HỘI KHOA CÔNG NGHỆ THÔNG TIN" />
          <img
            data-aos="zoom-in"
            data-aos-delay="100"
            src="https://res.cloudinary.com/dp5xqgbsj/image/upload/v1747086495/RA_M%E1%BA%AET_BAN_CH%E1%BA%A4P_H%C3%80NH_LI%C3%8AN_CHI_H%E1%BB%98I_KHOA_C%C3%94NG_NGH%E1%BB%86_TH%C3%94NG_TIN_KH%C3%93A_VIII_NHI%E1%BB%86M_K%E1%BB%B2_2025_-_2028_jlgg9g.png"
            alt=""
            loading="lazy"
            style={{
              borderRadius: "0.75rem",
              boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        {/* Kênh liên lạc */}
        <div
          className={clsx(
            "d-flex flex-column",
            styles.bluebg,
            styles.currEvent,
          )}
        >
          <SessionHeader title="CÁC KÊNH THÔNG TIN LIÊN LẠC KHOA CÔNG NGHỆ THÔNG TIN" />
          {CONTACTS.map((item, index) => (
            <div key={index} className={styles["card-group"]}>
              {item.map((contact, i) => (
                <MDBCard
                  key={i}
                  className={styles["card-group__item"]}
                  data-aos="zoom-in"
                  data-aos-delay={i * 80}
                >
                  <MDBCardImage src={contact.imgUrl} position="top" alt="..." />
                  <MDBCardBody>
                    <a href={contact.url} alt={contact.title}>
                      {contact.title}
                    </a>
                  </MDBCardBody>
                </MDBCard>
              ))}
            </div>
          ))}
        </div>

        {/* Bản đồ + địa chỉ */}
        <div className={clsx("d-flex flex-column", styles.news)}>
          <br />
          <div data-aos="fade-up">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.485467675207!2d106.76933817490898!3d10.850632389302698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1685176506201!5m2!1svi!2s"
              height="480"
              style={{ width: "100%", borderRadius: "0.75rem", border: "none" }}
            />
          </div>

          <MDBCard
            className={styles.news__card}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <MDBRow className="g-0">
              <MDBCol md="12">
                <MDBCardBody className={styles["news__card-body"]}>
                  <MDBCardTitle>{address.title}</MDBCardTitle>
                  <MDBCardText>{address.content}</MDBCardText>
                  <MDBCardText>
                    <div>
                      <small className="text-muted">
                        Email:{" "}
                        <a
                          href="mailto:yit@hcmute.edu.vn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          yit@hcmute.edu.vn
                        </a>
                      </small>
                    </div>
                    <div>
                      <small className="text-muted">
                        Copyright &copy; {new Date().getFullYear()}. Made with
                        love by{" "}
                        <a
                          href="https://github.com/TienNHM"
                          target="_blank"
                          rel="noreferrer"
                        >
                          TienNHM
                        </a>
                      </small>
                    </div>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </div>
      </MDBContainer>
    </>
  );
}
