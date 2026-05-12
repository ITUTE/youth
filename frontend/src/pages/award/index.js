import React, { useState } from "react";
import styles from "./index.module.scss";
import * as SV5T from "./sv5t";
import * as ICPC from "./olympic_tin_hoc_icpc";
import * as TNTT from "./tntt";
import * as DVUT from "./dvut";
import * as SongIT from "./song_it";

/* ── Dữ liệu Vinh danh Tiêu biểu ── */
const HOF_SV5T = [
  {
    name: "Đồng Gia Sang",
    class: "Công nghệ Thông tin",
    year: "2024 - 2025",
    imgUrl:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/612600688_122268825854179744_8218997744900030307_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=f964FV_u3IIQ7kNvwH0dXTa&_nc_oc=Adpuj6aSZAIdlguZIhu1wx7ir65uU_DhmRSiIEeJItG68nNqFZvwPrv6rr6OC50jQ_8D1MHIjv2TA89XRRIo20sx&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=ZLiLymkiFNtfz0OV9THXqg&_nc_ss=7b2a8&oh=00_Af7rXK2L9N7nPXJQ_3nP-0hngFixPGd4bpLyjf83lyGUmA&oe=6A08A567",
    note: "Sinh viên 5 tốt cấp Trung ương",
  },
  {
    name: "Trần Công Toản",
    class: "Công nghệ Thông tin",
    year: "2024 - 2025",
    imgUrl:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/612253251_122268825914179744_3795136986750445851_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=GZYzPz4xWHoQ7kNvwHpUjoI&_nc_oc=AdoIQDm3YYPVWsL5ywIlj9CJDG2mQmDEHgNRRz8wHJSMJuPnza9AK2SNrS7uC6NjD2JkvXM0-Xp3LFSJcTFl0cpy&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=Vnmn_qELUSkgLrC-K1VsYA&_nc_ss=7b2a8&oh=00_Af4CigeTQ9dxV5uvgQfGnRq27GAaINaaEssrLAG8rGNiLw&oe=6A088DEC",
    note: "Sinh viên 5 tốt cấp Trung ương",
  },
  {
    name: "Văn Thị Mười Ngọc",
    class: "Công nghệ Thông tin",
    year: "2024 - 2025",
    imgUrl:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/611609278_122268825980179744_1518460269528486171_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=AglVmqG6KTMQ7kNvwGLaKD2&_nc_oc=AdrzWEYlWv1ThSeL4ieRmoV8HhvvAlvjH84gpVyp6q5Yao9rx0i3W4spvUpNXV01PjU9WgSi6ou3V48oGckaq88F&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=Vnmn_qELUSkgLrC-K1VsYA&_nc_ss=7b2a8&oh=00_Af47YcDmRjCLmFHF9WeV6lMjuWMeEqZ7yWFqKk0k9wJbkg&oe=6A08A475",
    note: "Sinh viên 5 tốt cấp Trung ương",
  },
];
const HOF_SV5TTP = [
  {
    name: "Nguyễn Thị Phương Anh",
    class: "Kỹ Thuật Dữ Liệu",
    year: "2024 - 2025",
    imgUrl:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/612541542_122268826040179744_1390083498694726913_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=UlgIq97AZZcQ7kNvwFf1Nx2&_nc_oc=AdrnKYlTaH5Bw7uVXCcjskP68YZ5ZK1K0R0symbUbD_ENTUP7kE_nY7Q8zJXbSXWjBSBz-fmBsOJ-2GEGr6kJuu_&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=u40Mfud95nvVplIRZnvDlg&_nc_ss=7b2a8&oh=00_Af5UbfVYXkZ9b6sIKS4DH3g_u4YfavJhx-Fe5A0g9NQnpA&oe=6A08AA3D",
    note: "Sinh viên 5 tốt cấp Thành phố",
  },
  {
    name: "Liên Huệ Tiên",
    class: "Công nghệ Thông tin",
    year: "2024 - 2025",
    imgUrl:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/612021044_122268826118179744_7875334957692107182_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=gMp7ZxZIB84Q7kNvwGDh_Bs&_nc_oc=AdpnFozZjNJUMqGXrUCEnmEaGS-Scl5djvDi8z63wXz2bXpCWRTvQGqLLXpNkGP61uGCLOctrfzNyjvzsFAEehUc&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=5x3gAYNgk14pgnoey62yvQ&_nc_ss=7b2a8&oh=00_Af6g7GW96V090Nl3TV_HNQfN-8xykLe0Sr888-n3PFV8Ng&oe=6A08B5C5",
    note: "Sinh viên 5 tốt cấp Thành phố",
  },
  {
    name: "Lâm Hoài Kim Ngân",
    class: "Kỹ thuật Dữ liệu",
    year: "2024 - 2025",
    imgUrl:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/612068946_122268826178179744_3094189260710389075_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=zsUbvFt3Sw4Q7kNvwFBVrew&_nc_oc=AdooshrEa_oASbnddfq-DFmNTax-Nv7Koa0quRUyyUza6QQpAg0RILc2CerZyxsSLoM2-39Fv45Atv5Klx9ZlQIw&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=-wLKnv9dQTTU-1Pxz8V-wQ&_nc_ss=7b2a8&oh=00_Af7Wkw_9PSJZwUTycEEFurCTiXxfn8hKQhAD0YxoGvZ8Yw&oe=6A0899C1",
    note: "Sinh viên 5 tốt cấp Thành phố",
  },
  {
    name: "Đặng Minh Nhật",
    class: "Công nghệ Thông tin",
    year: "2024 - 2025",
    imgUrl:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/611956916_122268826238179744_6091815999460656774_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=tJ9hXUINAAoQ7kNvwEBJPO2&_nc_oc=AdrSwutDrvImNisPt0YwdGn3Z9O4R-8HNpdLQ8RK-aNLRdLzW0xxl_JNjnpNsOiP_75Iw3J4mO9sPqkybJzi8G-o&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=L9HAPgnyCNQvsQR-cnlF9A&_nc_ss=7b2a8&oh=00_Af46VoYo6rt5evMS_DbIxqC-o5y0vK2ahtIYs8cTNjV5GA&oe=6A08897A",
    note: "Sinh viên 5 tốt cấp Thành phố",
  },
];

const HOF_CANBO = [
  {
    name: "Huỳnh Ngọc Tài",
    class:
      "UV BCH Đoàn trường, UV BCH Hội Sinh viên trường, Phó Bí thư, LCH trưởng LCH khoa CNTT",
    year: "2024 - 2025",
    imgUrl:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/653711327_939857235360261_2756959843630612007_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=nrXW0VcvqwsQ7kNvwHlhE7s&_nc_oc=AdpaR4utI9WzXlrtkBpOJcC8JSSvHhYgfGT_EHmFlGEvqqaRjoB5EeToc8GjBvnAmXqFWWz-Igp2JYl_cKvUD_2Q&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=6j-JxstwQ9zTjqBoEhL7Qg&_nc_ss=7b2a8&oh=00_Af67HJP0funxoe7t4_aeNpAlQjyH7Ynr9l7pEdYRAcxEkw&oe=6A089B4F",
    note: "Cán bộ Đoàn - Hội tiêu biểu cấp Trường",
  },
  {
    name: "Võ An Thái",
    class: "UV Ban Kiểm tra Hội Sinh viên trường, LCH phó LCH khoa CNTT",
    year: "2024 - 2025",
    imgUrl:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/655345583_939857282026923_7312768481603541397_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=AXlEdNFJCLAQ7kNvwGxXNvX&_nc_oc=Ado41NAV1BlHtjsy3jvLCTykL-AKzUBbScbqH9s_ULHwGmHfYJ9RP5D3RmP9WTZowPLHGekj04Tt-fql5zXPrjiP&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=nCbulNf3tHE_O4KrWu8Oww&_nc_ss=7b2a8&oh=00_Af4qCT0oc0d4iQzgOJur9V-ZZyfB8_2jcE-eZksV2f5pOA&oe=6A08AE52",
    note: "Cán bộ Đoàn - Hội tiêu biểu cấp Trường",
  },
  {
    name: "Nguyễn Trần Quốc Thi",
    class:
      "UV Ban thường vụ Đoàn khoa, Trưởng ban Tổ chức - Kiểm tra Đoàn khoa CNTT",
    year: "2024 - 2025",
    imgUrl:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/655831465_939857242026927_7130991867021293940_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=neLWLACoLZMQ7kNvwHHfUsQ&_nc_oc=AdpWZ1za-Kv187nj00nibDO442_C38LgVG7unBDBxWZjfTkCmBLcjcnfYXVNHiwzoD1evPQ4KHJKgWtDZkzDY8mT&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=JH5CUrrI4j-4Vokmji83zg&_nc_ss=7b2a8&oh=00_Af6d4hxrghFj76qwXhABWO8ARrOGiMrn1DnbHrh3XDQ8lQ&oe=6A088F38",
    note: "Cán bộ Đoàn - Hội tiêu biểu cấp Trường",
  },
];

const HOF_COMPETITIONS = [
  {
    name: "Last Dance (Trần Cảnh Nam – Lâm Duy Bảo – Nghiêm Quang Huy)",
    competition: "ICPC Asia Ho Chi Minh City 2025",
    prize: "HUY CHƯƠNG VÀNG",
    imgUrl:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/598676283_122264741438179744_463883768972288368_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=EVEoW6l0jjkQ7kNvwGGwMuI&_nc_oc=AdoC9-dfWwVuzPDqNsCCZ4BY4_9RmFYRcjarXX1dxxe2WgKl8ENSJIIa_1hnCNCdrCcKATGzKG4VUL7zERL9yQTD&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=Di-1sm94XY_OoaFqXBCvNg&_nc_ss=7b2a8&oh=00_Af482S-htnQJu-DUpUVHkdr0tqPplpsx-mHRBkoM9Lc2Pw&oe=6A08AE75",
    prizeLevel: 1,
    year: "2025",
  },
  {
    name: "Thái Gia Vỹ",
    competition: "Olympic Tin học Sinh viên Việt Nam 2025 – Bảng Chuyên Tin",
    prize: "Giải Ba",
    imgUrl:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/599216416_122264741192179744_3039777635706697237_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=friWL9P4q-0Q7kNvwEaAW72&_nc_oc=AdqM948lEJswFaoBYMfW0uUHmZYKlVgutmsO2dLLZHfUYwAe95ugcE4U14unIsclC7DPOoHOwpLz9DG3W_vQftCn&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=mank4mOBgWwo1RwbRDrY-Q&_nc_ss=7b2a8&oh=00_Af6snO5c5PMG-Yq8ZlLUmtkWpgu5UyyjOVwHPXX3i_2X9Q&oe=6A0895AD",
    prizeLevel: 3,
    year: "2025",
  },
  {
    name: "Mai Quốc Bảo",
    competition: "Olympic Tin học Sinh viên Việt Nam 2025 – Bảng Chuyên Tin",
    prize: "Giải Ba",
    imgUrl:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/599216416_122264741192179744_3039777635706697237_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=friWL9P4q-0Q7kNvwEaAW72&_nc_oc=AdqM948lEJswFaoBYMfW0uUHmZYKlVgutmsO2dLLZHfUYwAe95ugcE4U14unIsclC7DPOoHOwpLz9DG3W_vQftCn&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=mank4mOBgWwo1RwbRDrY-Q&_nc_ss=7b2a8&oh=00_Af6snO5c5PMG-Yq8ZlLUmtkWpgu5UyyjOVwHPXX3i_2X9Q&oe=6A0895AD",
    prizeLevel: 3,
    year: "2025",
  },
  {
    name: "Nguyễn Hải Đăng",
    competition: "Olympic Tin học Sinh viên Việt Nam 2025 – Bảng Chuyên Tin",
    prize: "Giải Khuyến Khích",
    prizeLevel: 4,
    imgUrl:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/598372624_122264741252179744_2599808621558268316_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=e20vGxGb8q8Q7kNvwHPQOmG&_nc_oc=AdrSl41BrQowjmx-lpiEiz-wWJzJzR8QOQaP60jO4cH0oKPGKqxZNS4BTyajz01I5kPkoz5yxiYezy7P5ZLCZ7qI&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=2C_m_sX_K6wnhCC8770Cbw&_nc_ss=7b2a8&oh=00_Af4saydnZ_ETDMPKdk_rGrjsXJoOOpC2GSyRhJRQDMPXrw&oe=6A089525",
    year: "2025",
  },
  {
    name: "Tralalero Tralala (Đào Huỳnh Gia Huy – Lê Huy Hoàng – Dương Đức Anh)",
    competition: "OLP’AI 2025",
    prize: "Giải Khuyến Khích",
    imgUrl:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/600218485_122264741324179744_5873104440344803090_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=YHhqi8ncp6kQ7kNvwE3aBJn&_nc_oc=AdoIE-xM-uReuuEed0ma3MocRG7TcEQTjIYaYrfOGQFA9_ITC1-vQ_zHX8bXnmt-ZmE4AyDaY99So9Oj1MrEbcY5&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=Nm1weChdsmen9RuSpYIqeQ&_nc_ss=7b2a8&oh=00_Af54JGS7i-n3Vm4yQCFkXPMLm9-80Axk0RRZy_KvJ1RCKg&oe=6A088ABE",
    prizeLevel: 4,
    year: "2025",
  },
];

const CATEGORIES = [
  {
    id: "sv5t",
    label: "Sinh viên 5 tốt",
    icon: "⭐",
    years: [
      {
        label: "2024 - 2025",
        news: SV5T.SV5T_2024_2025,
        photos: (SV5T.awards_SV5T_2024_2025 || []).flat(),
      },
      {
        label: "2023 - 2024",
        news: SV5T.SV5T_2023_2024,
        photos: (SV5T.awards_SV5T_2023_2024 || []).flat(),
      },
      {
        label: "2022 - 2023",
        news: SV5T.SV5T_2022_2023,
        photos: (SV5T.awards_SV5T_2022_2023 || []).flat(),
      },
      {
        label: "2021 - 2022",
        news: SV5T.SV5T_2021_2022,
        photos: (SV5T.awards_SV5T_2021_2022 || []).flat(),
      },
      {
        label: "2020 - 2021",
        news: SV5T.SV5T_2020_2021,
        photos: (SV5T.awards_SV5T_2020_2021 || []).flat(),
      },
      {
        label: "2019 - 2020",
        news: SV5T.SV5T_2019_2020,
        photos: (SV5T.awards_SV5T_2019_2020 || []).flat(),
      },
    ],
  },
  {
    id: "dvut",
    label: "Đoàn viên ưu tú",
    icon: "🏅",
    years: [
      {
        label: "2024 - 2025",
        news: [],
        gallery: DVUT.DVUT_2024_2025,
      },
    ],
  },
  {
    id: "tntt",
    label: "Thanh niên tiên tiến",
    icon: "🌟",
    years: [
      {
        label: "2023 - 2024",
        news: TNTT.TNTT_2020_2021,
        photos: (TNTT.awards_TNTT_2020_2021 || []).flat(),
      },
    ],
  },
  {
    id: "songit",
    label: "Sóng IT",
    icon: "🎤",
    years: [
      {
        label: "2025",
        news: SongIT.SongIT_2021_2022,
        photos: (SongIT.awards_SongIT_2021_2022 || []).flat(),
      },
    ],
  },
  {
    id: "icpc",
    label: "Olympic & ICPC",
    icon: "💻",
    years: [
      {
        label: "2024",
        news: ICPC.OLYMPIC_TIN_HOC_ICPC_2022,
        photos: (ICPC.AWARDS_OLYMPIC_TIN_HOC_ICPC_2022 || []).flat(),
      },
    ],
  },
];

export default function Award() {
  const [activeTab, setActiveTab] = useState("sv5t");
  const activeCat = CATEGORIES.find((c) => c.id === activeTab);

  return (
    <div className={styles.page}>
      {/* Hero */}
      {/* <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroTag} data-aos="fade-down">
            Khoa Công nghệ Thông tin · HCMUTE
          </span>
          <h1
            className={styles.heroTitle}
            data-aos="fade-up"
            data-aos-delay="80"
          >
            VINH DANH
          </h1>
          <p className={styles.heroSub} data-aos="fade-up" data-aos-delay="160">
            Tôn vinh sinh viên đạt thành tích xuất sắc trong học tập, rèn luyện
            và hoạt động phong trào
          </p>
        </div>
        <div className={styles.heroWave}>
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
            <path
              d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z"
              fill="#f4f8fd"
            />
          </svg>
        </div>
      </div> */}

      {/* ── Hall of Fame ── */}
      <div className={styles.hof}>
        {/* Header */}
        <div className={styles.hofHeader} data-aos="fade-up">
          <div className={styles.hofHeaderLine} />
          <div className={styles.hofHeaderCenter}>
            <span className={styles.hofStar}>★</span>
            <span className={styles.hofTitle}>
              Không gian Vinh danh Tiêu biểu năm học 2025-2026
            </span>
            <span className={styles.hofStar}>★</span>
          </div>
          <div className={styles.hofHeaderLine} />
        </div>
        <p className={styles.hofSub} data-aos="fade-up" data-aos-delay="60">
          Tôn vinh những sinh viên tiêu biểu đạt thành tích xuất sắc nhất ở cấp
          Trung ương và Thành phố trong năm học 2025-2026, cùng các cán bộ Đoàn - Hội
        </p>

        {/* SV5T Trung ương spotlight */}
        <div className={styles.hofBlock}>
          <div className={styles.hofBlockLabel} data-aos="fade-right">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            SV5T Cấp Trung ương
          </div>

          <div className={styles.hofCards}>
            {HOF_SV5T.map((sv, i) => (
              <div
                key={i}
                className={styles.hofCard}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className={styles.hofCard__badge}>Trung ương</div>
                <div className={styles.hofCard__photo}>
                  {sv.imgUrl ? (
                    <img src={sv.imgUrl} alt={sv.name} loading="lazy" />
                  ) : (
                    <div className={styles.hofCard__photoPlaceholder}>
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  )}
                  <div className={styles.hofCard__overlay}>
                    <div className={styles.hofCard__overlayStars}>★★★</div>
                  </div>
                </div>
                <div className={styles.hofCard__body}>
                  <p className={styles.hofCard__name}>{sv.name}</p>
                  <p className={styles.hofCard__class}>{sv.class}</p>
                  <p className={styles.hofCard__note}>{sv.note}</p>
                  <span className={styles.hofCard__year}>{sv.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.hofBlock}>
          <div className={styles.hofBlockLabel} data-aos="fade-right">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            SV5T Cấp Thành phố
          </div>

          <div className={styles.hofCards4}>
            {HOF_SV5TTP.map((sv, i) => (
              <div
                key={i}
                className={styles.hofCard}
                data-aos="zoom-in"
                data-aos-delay={i * 80}
              >
                <div
                  className={`${styles.hofCard__badge} ${styles.hofCard__badgeCity}`}
                >
                  Thành phố
                </div>
                <div className={styles.hofCard__photo}>
                  {sv.imgUrl ? (
                    <img src={sv.imgUrl} alt={sv.name} loading="lazy" />
                  ) : (
                    <div className={styles.hofCard__photoPlaceholder}>
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  )}
                  <div className={styles.hofCard__overlay}>
                    <div className={styles.hofCard__overlayStars}>★★★</div>
                  </div>
                </div>
                <div className={styles.hofCard__body}>
                  <p className={styles.hofCard__name}>{sv.name}</p>
                  <p className={styles.hofCard__class}>{sv.class}</p>
                  <p className={styles.hofCard__note}>{sv.note}</p>
                  <span className={styles.hofCard__year}>{sv.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cán bộ Đoàn Hội tiêu biểu */}
        <div className={styles.hofBlock}>
          <div className={styles.hofBlockLabel} data-aos="fade-right">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Cán bộ Đoàn - Hội tiêu biểu cấp Trường
          </div>

          <div className={styles.hofCards}>
            {HOF_CANBO.map((cb, i) => (
              <div
                key={i}
                className={styles.hofCard}
                data-aos="zoom-in"
                data-aos-delay={i * 80}
              >
                <div className={`${styles.hofCard__badge} ${styles.hofCard__badgeGreen}`}>Tiêu biểu</div>
                <div className={styles.hofCard__photo}>
                  {cb.imgUrl ? (
                    <img src={cb.imgUrl} alt={cb.name} loading="lazy" />
                  ) : (
                    <div className={styles.hofCard__photoPlaceholder}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                  )}
                  <div className={styles.hofCard__overlay}>
                    <div className={styles.hofCard__overlayStars}>★★★</div>
                  </div>
                </div>
                <div className={styles.hofCard__body}>
                  <p className={styles.hofCard__name}>{cb.name}</p>
                  {cb.class && <p className={styles.hofCard__class}>{cb.class}</p>}
                  <span className={styles.hofCard__year}>{cb.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* National competition honors */}
        <div className={styles.hofBlock}>
          <div className={styles.hofBlockLabel} data-aos="fade-right">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 21h8M12 17v4M17 3H7L5 9c0 3.31 3.13 6 7 6s7-2.69 7-6l-2-6z" />
              <path d="M5 9H3a2 2 0 0 0 0 4h2M19 9h2a2 2 0 0 0 0 4h-2" />
            </svg>
            Thành tích Thi đua Toàn quốc
          </div>

          <div className={styles.hofCards}>
            {HOF_COMPETITIONS.map((c, i) => {
              const badgeClass =
                c.prizeLevel === 1
                  ? ""
                  : c.prizeLevel === 2
                    ? styles.hofCard__badgeSilver
                    : styles.hofCard__badgeBronze;
              const medal =
                c.prizeLevel === 1 ? "🥇" : c.prizeLevel === 2 ? "🥈" : "🥉";
              return (
                <div
                  key={i}
                  className={styles.hofCard}
                  data-aos="zoom-in"
                  data-aos-delay={i * 80}
                >
                  <div className={`${styles.hofCard__badge} ${badgeClass}`}>
                    {c.prize}
                  </div>
                  <div className={styles.hofCard__photo}>
                    {c.imgUrl ? (
                      <img src={c.imgUrl} alt={c.name} loading="lazy" />
                    ) : (
                      <div className={styles.hofCard__photoPlaceholder}>
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.2"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                    )}
                    <div className={styles.hofCard__overlay}>
                      <div className={styles.hofCard__overlayStars}>
                        {medal} {c.year}
                      </div>
                    </div>
                  </div>
                  <div className={styles.hofCard__body}>
                    <p className={styles.hofCard__name}>{c.name}</p>
                    <p className={styles.hofCard__competition}>
                      {c.competition}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.tab} ${activeTab === cat.id ? styles.tabActive : ""}`}
            onClick={() => setActiveTab(cat.id)}
          >
            <span>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        {activeCat.years.map((year, yi) => (
          <div key={yi} className={styles.yearSection}>
            <div className={styles.yearBadge} data-aos="fade-right">
              {year.label}
            </div>

            {/* News articles */}
            {(year.news || []).map((item, ni) => (
              <div
                key={ni}
                className={styles.newsCard}
                data-aos="fade-up"
                data-aos-delay={ni * 80}
              >
                <div className={styles.newsCard__img}>
                  <img src={item.imgUrl} alt={item.title} loading="lazy" />
                </div>
                <div className={styles.newsCard__body}>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}

            {/* Gallery (landscape photos, e.g. DVUT) */}
            {year.gallery && year.gallery.length > 0 && (
              <div className={styles.galleryGrid}>
                {year.gallery.map((item, gi) => (
                  <div
                    key={gi}
                    className={styles.galleryCard}
                    data-aos="fade-up"
                    data-aos-delay={(gi % 4) * 80}
                  >
                    <div className={styles.galleryCard__img}>
                      <img src={item.imgUrl} alt={item.title} loading="lazy" />
                    </div>
                    {item.title && (
                      <div className={styles.galleryCard__caption}>
                        {item.title}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Student photo grid */}
            {year.photos && year.photos.length > 0 && (
              <>
                <p className={styles.photoSectionTitle}>Danh sách vinh danh</p>
                <div className={styles.photoGrid}>
                  {year.photos.map((student, si) => (
                    <div
                      key={si}
                      className={styles.photoCard}
                      data-aos="zoom-in"
                      data-aos-delay={(si % 6) * 50}
                    >
                      <div className={styles.photoCard__img}>
                        <img
                          src={student.imgUrl}
                          alt={student.title || ""}
                          loading="lazy"
                        />
                      </div>
                      {student.title && (
                        <div className={styles.photoCard__name}>
                          {student.title}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export const GG_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/15OgjKPQIg8_hSGISfdgvtSyome2zxQkVpbGPcm5IGpI/gviz/tq?tqx=out:json";

export function combineArrays(first, second) {
  return first.reduce((acc, val, ind) => {
    acc[val] = second[ind];
    return acc;
  }, {});
}

export function getGoogleSheetData(url) {
  return fetch(url)
    .then((r) => r.text())
    .then((data) => {
      const r = data.match(
        /google\.visualization\.Query\.setResponse\(([\s\S\w]+)\)/,
      );
      if (r && r.length === 2) {
        const obj = JSON.parse(r[1]);
        const table = obj.table;
        const header = table.cols.map(({ label }) => label);
        const rows = table.rows.map(({ c }) =>
          c.map((e) => (e ? e.v || "" : "")),
        );
        return rows.map((row) => combineArrays(header, row));
      }
    });
}
