import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import styles from "./index.module.scss";
import * as NEWS from "./news";
import * as EVENTS from "./events";
import * as HIGHTLIGHT from "./hightlight_events";

const homeSliders = [
  {
    imgUrl:
      "https://res.cloudinary.com/dp5xqgbsj/image/upload/v1747085352/HACKATHON_e2z65j.jpg",
    title: "HACKATHON",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dp5xqgbsj/image/upload/v1747085785/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2025-05-13_043605_jrmp91.png",
    title: "SÓNG IT - IT SHOW",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dp5xqgbsj/image/upload/v1747085352/XTN2025_jfzarm.jpg",
    title: "XTN",
  },
];

const quickLinks = [
  { label: "Văn phòng điện tử", to: "/office", icon: "🏢" },
  { label: "Sinh viên 5 tốt", to: "/it-sv5t", icon: "⭐" },
  { label: "Vinh danh", to: "/award", icon: "🏆" },
  { label: "Không gian HCM", to: "/HCM", icon: "🌿" },
];

const stats = [
  { target: 3000, suffix: "+", label: "Sinh viên" },
  { target: 2750, suffix: "+", label: "Đoàn viên" },
  { target: 50, suffix: "+", label: "Chương trình mỗi năm" },
  { target: 25, suffix: "", label: "Năm hoạt động" },
];

const NEXT_EVENT = {
  name: "MIT HCM-UTE 2026",
  date: new Date("2026-05-17T08:00:00"),
};

// Cập nhật tên thực tế tại đây
const thuongTrucDoan = [
  {
    name: "Nông Quốc Hưng",
    role: "Bí thư Đoàn khoa",
    avatar:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/658197034_1582861139488370_8688833445616399201_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=K56R6_B48-AQ7kNvwGqOE75&_nc_oc=Adr4P_c7WX54_u86TOhX0yULwl2HhaSBNnM7swy-XlDnLD-xMfqWTjMiEEQyW8lf0bnYA15hbYXqjShIKxslanpP&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=8rNdCX8CoRnTLhg4xt5D5g&_nc_ss=7b2a8&oh=00_Af5wBD4uNyVGfiA1hDrQ32_D9InO-NKV4jeP9om6w4093A&oe=6A076A4C",
  },
  {
    name: "Huỳnh Ngọc Tài",
    role: "Phó Bí thư Đoàn khoa",
    avatar:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/526812055_1475750493456996_3063260008498645240_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=53a332&_nc_ohc=hJOwWHl_HC0Q7kNvwFP5zPf&_nc_oc=AdrZ-2KPyFR7qVUalGRlf1pWw6ogqgJl1_HxkAV1tCsexIgcBXMX3EDfwH02k76XPUcRr4HZA4LUA2FFNvLZLKae&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=yTj_h2plxi_v6ESuT06j8w&_nc_ss=7b2a8&oh=00_Af6GgbcOL9UZKEkjww_BXxDWGGFTvyv-ee1I7KhDlf3pQQ&oe=6A07906B",
  },
  {
    name: "Nguyễn Quốc Khoa",
    role: "Phó Bí thư Đoàn khoa",
    avatar:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/480048448_1384084192944445_6925273558335105177_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=53a332&_nc_ohc=BPZUPaRd-0IQ7kNvwFFxTcx&_nc_oc=AdruoX2Lb7pXTO_cE_b5BXFQJ-ZmGS7UxUCZ85rwVHmtJX5eIQX-GTHNJme35hzF4Ijq5qcu0wZXad-0eX45Cc6L&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=i83YHoE9raxtsLMbB-IWSA&_nc_ss=7b2a8&oh=00_Af6qMKLYVSWKfX3x-VXjDRHXXD4m4XgIKFhXGUjD_S80aw&oe=6A077BEA",
  },
];

const lchGroup = [
  {
    name: "Huỳnh Ngọc Tài",
    role: "LCH Trưởng LCH khoa",
    avatar:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/526812055_1475750493456996_3063260008498645240_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=53a332&_nc_ohc=hJOwWHl_HC0Q7kNvwFP5zPf&_nc_oc=AdrZ-2KPyFR7qVUalGRlf1pWw6ogqgJl1_HxkAV1tCsexIgcBXMX3EDfwH02k76XPUcRr4HZA4LUA2FFNvLZLKae&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=yTj_h2plxi_v6ESuT06j8w&_nc_ss=7b2a8&oh=00_Af6GgbcOL9UZKEkjww_BXxDWGGFTvyv-ee1I7KhDlf3pQQ&oe=6A07906B",
  },
  {
    name: "Võ An Thái",
    role: "LCH Phó",
    avatar:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/489807499_1905816819949103_8870639775027989478_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd6889&_nc_ohc=5dyoh1tUXKIQ7kNvwGeA9u-&_nc_oc=Adonx1ezrXAfFJsJiBQ8g2qmCuB-1cQD9mKZ7Hr-WzBUpCuiswfWARxOfeyL-bsAGab4rf31w2siqbvaWtvj_G03&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=ot3-dO9-C_jkoMv3U2Rueg&_nc_ss=7b2a8&oh=00_Af6Qt8oleRR3vr1jMC7VIvte3VC7Qpqvcoma2oUDljNr8w&oe=6A0784A6",
  },
  {
    name: "Đinh Phú Sỹ",
    role: "LCH Phó",
    avatar:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/537159931_1244645480745258_3675518665797640733_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=53a332&_nc_ohc=bSNpZyHK6cIQ7kNvwErhKXB&_nc_oc=AdoGiD6ZOTcvGTOZd6ZGxRAaJtweQH-3Y8DhpjjJBHgVi69SRuh20fkRpeQ643BAS26IQ1UddroPerlES5NCUDI8&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=7AGKQc0NwTlVBqxgalV0rw&_nc_ss=7b2a8&oh=00_Af4L9RGEm2Z4Fxh2mpgSM3IhYZcQ3WqZP8S4OAz3nGrM2g&oe=6A077BD8",
  },
];

const allHighlights = HIGHTLIGHT.HIGHTLIGHT_2022_2023.flat();

/* ── Animated counter khi scroll vào vùng nhìn thấy ── */
function AnimatedStat({ target, suffix, label, delay }) {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let start = 0;
        const duration = 1400;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      },
      { threshold: 0.4 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className={styles.statItem}
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <strong>
        {count.toLocaleString("vi-VN")}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

/* ── Countdown renderer ── */
function CdBox({ value, label }) {
  return (
    <div className={styles.cdBox}>
      <span className={styles.cdBox__value}>
        {String(value).padStart(2, "0")}
      </span>
      <span className={styles.cdBox__label}>{label}</span>
    </div>
  );
}

function CountdownRenderer({ days, hours, minutes, seconds, completed }) {
  if (completed)
    return <span className={styles.cdComplete}>Sự kiện đang diễn ra! 🎉</span>;
  return (
    <div className={styles.cdTimer}>
      <CdBox value={days} label="Ngày" />
      <span className={styles.cdSep}>:</span>
      <CdBox value={hours} label="Giờ" />
      <span className={styles.cdSep}>:</span>
      <CdBox value={minutes} label="Phút" />
      <span className={styles.cdSep}>:</span>
      <CdBox value={seconds} label="Giây" />
    </div>
  );
}

function NewsModal({ item, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.modal__close} onClick={onClose}>✕</button>
        <div className={styles.modal__img}>
          <img src={item.imgUrl} alt={item.title} />
        </div>
        <div className={styles.modal__body}>
          <span className={styles.modal__tag}>Thông báo</span>
          <h2 className={styles.modal__title}>{item.title}</h2>
          <p className={styles.modal__content}>{item.content}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div className={styles.page}>
      {selectedNews && (
        <NewsModal item={selectedNews} onClose={() => setSelectedNews(null)} />
      )}
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.hero__overlay} />
        <div className={styles.hero__content}>
          <div className={styles.hero__left}>
            <span className={styles.hero__badge} data-aos="fade-down">
              Khoa Công nghệ Thông tin · HCM-UTE
            </span>
            <h1
              className={styles.hero__title}
              data-aos="fade-right"
              data-aos-delay="100"
            >
              ĐOÀN THANH NIÊN
              <br />
              HỘI SINH VIÊN
            </h1>
            <p
              className={styles.hero__sub}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Khoa Công nghệ Thông tin - Trường Đại học Công nghệ Kỹ thuật
              TP.HCM
            </p>
            <div
              className={styles.hero__actions}
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <Link to="/about" className={styles.hero__btnPrimary}>
                Tìm hiểu thêm
              </Link>
              <Link to="/office" className={styles.hero__btnOutline}>
                Văn phòng điện tử
              </Link>
            </div>
          </div>
          <div
            className={styles.hero__right}
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <MDBCarousel showIndicators showControls fade>
              <MDBCarouselInner className={styles.hero__carousel}>
                {homeSliders.map((item, index) => (
                  <MDBCarouselItem
                    key={index}
                    className={index === 0 ? "active" : ""}
                  >
                    <MDBCarouselElement src={item.imgUrl} alt={item.title} />
                    <MDBCarouselCaption>
                      <h5>{item.title}</h5>
                    </MDBCarouselCaption>
                  </MDBCarouselItem>
                ))}
              </MDBCarouselInner>
            </MDBCarousel>
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <div className={styles.quickLinks}>
        {quickLinks.map((ql, i) => (
          <Link
            key={i}
            to={ql.to}
            className={styles.quickLink}
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            <span className={styles.quickLink__icon}>{ql.icon}</span>
            <span className={styles.quickLink__label}>{ql.label}</span>
          </Link>
        ))}
      </div>

      {/* ── STATS ── */}
      <div className={styles.statsBar}>
        {stats.map((s, i) => (
          <AnimatedStat key={i} {...s} delay={i * 100} />
        ))}
      </div>

      {/* ── NEWS ── */}
      <section className={styles.section}>
        <div className={styles.sectionHead} data-aos="fade-up">
          <div className={styles.sectionHead__title}>
            <span />
            <h2>Tin tức mới nhất</h2>
          </div>
        </div>
        <div className={styles.newsGrid}>
          {NEWS.NEWS_2022_2023.map((item, index) => (
            <article
              key={index}
              className={styles.newsCard}
              data-aos="fade-up"
              data-aos-delay={index * 60}
            >
              <div className={styles.newsCard__img}>
                <img src={item.imgUrl} alt={item.title} />
              </div>
              <div className={styles.newsCard__body}>
                <span className={styles.newsCard__tag}>Thông báo</span>
                <h3 className={styles.newsCard__title}>{item.title}</h3>
                <p className={styles.newsCard__excerpt}>{item.content}</p>
                <button
                  className={styles.newsCard__readmore}
                  onClick={() => setSelectedNews(item)}
                >
                  Xem thêm →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── COUNTDOWN ── */}
      <div className={styles.countdown} data-aos="fade-up">
        <div className={styles.countdown__inner}>
          <div className={styles.countdown__left}>
            <span className={styles.countdown__label}>Sự kiện sắp diễn ra</span>
            <h3 className={styles.countdown__name}>{NEXT_EVENT.name}</h3>
          </div>
          <Countdown date={NEXT_EVENT.date} renderer={CountdownRenderer} />
        </div>
      </div>

      {/* ── EVENTS ── */}
      <section className={styles.sectionBlue}>
        <div className={styles.section}>
          <div className={styles.sectionHead} data-aos="fade-up">
            <div className={styles.sectionHead__title}>
              <span />
              <h2>Chương trình đang diễn ra</h2>
            </div>
          </div>
          <div className={styles.eventsGrid}>
            {EVENTS.EVENTS_2022_2023.map((item, index) => (
              <div
                key={index}
                className={styles.eventCard}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <img src={item.imgUrl} alt={item.title || "Sự kiện"} />
                {item.title && (
                  <div className={styles.eventCard__overlay}>
                    <span>{item.title}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className={styles.section}>
        <div className={styles.sectionHead} data-aos="fade-up">
          <div className={styles.sectionHead__title}>
            <span />
            <h2>Các chương trình nổi bật</h2>
          </div>
        </div>
        <div className={styles.highlightGrid}>
          {allHighlights.map((item, index) => (
            <div
              key={index}
              className={styles.highlightCard}
              data-aos="zoom-in"
              data-aos-delay={(index % 4) * 80}
            >
              <img src={item.imgUrl} alt={item.title} />
              <div className={styles.highlightCard__overlay}>
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BAN CHẤP HÀNH ── */}
      <section className={styles.sectionBlue}>
        <div className={styles.section}>
          <div className={styles.sectionHead} data-aos="fade-up">
            <div className={styles.sectionHead__title}>
              <span />
              <h2>THƯỜNG TRỰC ĐOÀN - HỘI KHOA CÔNG NGHỆ THÔNG TIN</h2>
            </div>
          </div>

          {/* Thường trực Đoàn khoa */}
          <div
            className={styles.bchGroup}
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div className={styles.bchGroup__header}>
              <span className={styles.bchGroup__tag}>Đoàn khoa</span>
              <h3>Thường trực Đoàn khoa</h3>
            </div>
            <div className={styles.bchGrid3}>
              {thuongTrucDoan.map((member, i) => (
                <div
                  key={i}
                  className={styles.bchCard}
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 100}
                >
                  <div className={styles.bchCard__avatar}>
                    <img src={member.avatar} alt={member.name} />
                  </div>
                  <div className={styles.bchCard__info}>
                    <h4>{member.name}</h4>
                    <span>{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Liên Chi Hội */}
          <div
            className={styles.bchGroup}
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div className={styles.bchGroup__header}>
              <span
                className={`${styles.bchGroup__tag} ${styles["bchGroup__tag--lch"]}`}
              >
                Liên Chi Hội
              </span>
              <h3>Thường trực Liên Chi Hội</h3>
            </div>
            <div className={styles.bchGrid3}>
              {lchGroup.map((member, i) => (
                <div
                  key={i}
                  className={`${styles.bchCard} ${styles["bchCard--lch"]}`}
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 100}
                >
                  <div className={styles.bchCard__avatar}>
                    <img src={member.avatar} alt={member.name} />
                  </div>
                  <div className={styles.bchCard__info}>
                    <h4>{member.name}</h4>
                    <span>{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
