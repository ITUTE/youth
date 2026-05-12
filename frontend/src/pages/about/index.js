import React from "react";
import styles from "./index.module.scss";
import logoYIT from "../../assets/YIT.png";
import { CONTACTS } from "./contact";

const contacts = CONTACTS.flat();

export default function About() {
  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <img src={logoYIT} alt="YIT" className={styles.heroLogo} />
          <span className={styles.heroTag}>Khoa Công nghệ Thông tin · HCMUTE</span>
          <h1 className={styles.heroTitle}>
            ĐOÀN THANH NIÊN<br />HỘI SINH VIÊN
          </h1>
          <p className={styles.heroSub}>
            Khoa Công nghệ Thông tin — Trường Đại học Công nghệ Kỹ thuật TP. Hồ Chí Minh
          </p>
        </div>
        <div className={styles.heroWave}>
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,70 L0,70 Z" fill="#f4f8fd" />
          </svg>
        </div>
      </section>

      <div className={styles.content}>
        {/* ── BCH Đoàn Khoa ── */}
        <section className={styles.section} data-aos="fade-up">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionAccent} />
            <h2 className={styles.sectionTitle}>BAN CHẤP HÀNH ĐOÀN KHOA</h2>
            <p className={styles.sectionSub}>Khoa Công nghệ Thông tin — Nhiệm kỳ 2025 – 2028</p>
          </div>
          <div className={styles.imgCard} data-aos="zoom-in" data-aos-delay="100">
            <img
              src="https://res.cloudinary.com/dp5xqgbsj/image/upload/v1747086498/Slide.pptx_vgjo07.png"
              alt="BCH Đoàn Khoa Công nghệ Thông tin"
              loading="lazy"
            />
          </div>
        </section>

        {/* ── BCH Liên Chi Hội ── */}
        <section className={styles.section} data-aos="fade-up">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionAccent} />
            <h2 className={styles.sectionTitle}>BAN CHẤP HÀNH LIÊN CHI HỘI KHOA</h2>
            <p className={styles.sectionSub}>Khoa Công nghệ Thông tin — Nhiệm kỳ 2025 – 2028</p>
          </div>
          <div className={styles.imgCard} data-aos="zoom-in" data-aos-delay="100">
            <img
              src="https://res.cloudinary.com/dp5xqgbsj/image/upload/v1747086495/RA_M%E1%BA%AET_BAN_CH%E1%BA%A4P_H%C3%80NH_LI%C3%8AN_CHI_H%E1%BB%98I_KHOA_C%C3%94NG_NGH%E1%BB%86_TH%C3%94NG_TIN_KH%C3%93A_VIII_NHI%E1%BB%86M_K%E1%BB%B2_2025_-_2028_jlgg9g.png"
              alt="BCH Liên Chi Hội Khoa Công nghệ Thông tin"
              loading="lazy"
            />
          </div>
        </section>

        {/* ── Kênh liên lạc ── */}
        <section className={styles.section} data-aos="fade-up">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionAccent} />
            <h2 className={styles.sectionTitle}>KÊNH THÔNG TIN LIÊN LẠC</h2>
            <p className={styles.sectionSub}>Theo dõi và kết nối với chúng tôi trên các nền tảng</p>
          </div>
          <div className={styles.contactGrid}>
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactCard}
                data-aos="zoom-in"
                data-aos-delay={(i % 4) * 60}
              >
                <div className={styles.contactCard__icon}>
                  <img src={c.imgUrl} alt="" loading="lazy" />
                </div>
                <span className={styles.contactCard__title}>{c.title}</span>
                <span className={styles.contactCard__arrow}>→</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── Vị trí & Liên hệ ── */}
        <section className={styles.section} data-aos="fade-up">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionAccent} />
            <h2 className={styles.sectionTitle}>VỊ TRÍ & LIÊN HỆ</h2>
          </div>
          <div className={styles.mapWrap} data-aos="fade-up" data-aos-delay="80">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.485467675207!2d106.76933817490898!3d10.850632389302698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1685176506201!5m2!1svi!2s"
              height="420"
              loading="lazy"
            />
          </div>
          <div className={styles.addressCard} data-aos="fade-up" data-aos-delay="140">
            <div className={styles.addressCard__pin}>📍</div>
            <div className={styles.addressCard__info}>
              <p className={styles.addressCard__name}>
                ĐOÀN - HỘI KHOA CÔNG NGHỆ THÔNG TIN<br />
                TRƯỜNG ĐẠI HỌC CÔNG NGHỆ KỸ THUẬT TP.HCM
              </p>
              <p className={styles.addressCard__detail}>
                Tầng Hầm, Số 1, Võ Văn Ngân, Phường Thủ Đức, Tp. Hồ Chí Minh
              </p>
              <p className={styles.addressCard__email}>
                Email:{" "}
                <a href="mailto:yit@hcmute.edu.vn" target="_blank" rel="noreferrer">
                  yit@hcmute.edu.vn
                </a>
              </p>
              <p className={styles.addressCard__copy}>
                © {new Date().getFullYear()} Đoàn - Hội Khoa Công nghệ Thông tin HCMUTE
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
