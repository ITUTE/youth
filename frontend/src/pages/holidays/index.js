import React, { useState } from "react";
import styles from "./index.module.scss";

const FILTERS = [
  { id: "all", label: "Tất cả" },
  { id: "quoc-gia", label: "Quốc gia" },
  { id: "doan-hoi", label: "Đoàn – Hội" },
  { id: "tri-an", label: "Tri ân" },
  { id: "quoc-te", label: "Quốc tế" },
];

const HOLIDAYS = [
  {
    date: "03/02",
    month: 2,
    name: "Ngày thành lập Đảng Cộng sản Việt Nam",
    year: "03/02/1930",
    desc: "Kỷ niệm ngày thành lập Đảng Cộng sản Việt Nam — dấu mốc lịch sử mở ra kỷ nguyên mới cho cách mạng và dân tộc.",
    activities: [
      "Sinh hoạt chi đoàn chuyên đề lịch sử Đảng",
      "Học tập và quán triệt Nghị quyết",
      "Tuyên truyền online về lịch sử cách mạng",
    ],
    color: "#dc2626",
    bg: "rgba(220,38,38,0.07)",
    icon: "⭐",
    category: "quoc-gia",
  },
  {
    date: "08/03",
    month: 3,
    name: "Ngày Quốc tế Phụ nữ",
    year: "1910",
    desc: "Tôn vinh vai trò và đóng góp to lớn của phụ nữ trong xã hội, khoa học và phong trào thanh niên sinh viên.",
    activities: [
      "Tri ân nữ sinh viên, hội viên tiêu biểu",
      "Chương trình văn nghệ & chia sẻ",
      "Tặng quà ý nghĩa cho hội viên nữ",
    ],
    color: "#db2777",
    bg: "rgba(219,39,119,0.07)",
    icon: "🌸",
    category: "quoc-te",
  },
  {
    date: "26/03",
    month: 3,
    name: "Ngày thành lập Đoàn TNCS Hồ Chí Minh",
    year: "26/03/1931",
    desc: "Kỷ niệm ngày thành lập Đoàn Thanh niên Cộng sản Hồ Chí Minh — tổ chức chính trị – xã hội của tuổi trẻ Việt Nam.",
    activities: [
      "Lễ kết nạp Đoàn viên mới",
      "Hội trại truyền thống Tháng Thanh niên",
      "Giải thể thao sinh viên toàn khoa",
      "Các hoạt động thiện nguyện cộng đồng",
    ],
    color: "#1d4ed8",
    bg: "rgba(29,78,216,0.07)",
    icon: "🔵",
    category: "doan-hoi",
    highlight: true,
  },
  {
    date: "30/04",
    month: 4,
    name: "Ngày Giải phóng miền Nam, thống nhất đất nước",
    year: "30/04/1975",
    desc: "Ngày đại thắng lịch sử, thống nhất non sông — kết thúc cuộc kháng chiến chống Mỹ, mở ra kỷ nguyên độc lập, hòa bình.",
    activities: [
      "Hành trình về nguồn — thăm di tích lịch sử",
      "Thắp nến tri ân anh hùng liệt sĩ",
      "Triển lãm ảnh & tư liệu lịch sử",
      "Sân khấu hóa sự kiện lịch sử",
    ],
    color: "#b91c1c",
    bg: "rgba(185,28,28,0.07)",
    icon: "🇻🇳",
    category: "quoc-gia",
    highlight: true,
  },
  {
    date: "01/05",
    month: 5,
    name: "Ngày Quốc tế Lao động",
    year: "1886",
    desc: "Vinh danh tinh thần lao động sáng tạo trong thế hệ trẻ, tôn vinh quyền và đóng góp của người lao động.",
    activities: [
      "Hoạt động tình nguyện cộng đồng",
      "Chương trình tư vấn việc làm sinh viên",
      "Giao lưu văn hóa – thể thao",
    ],
    color: "#d97706",
    bg: "rgba(217,119,6,0.07)",
    icon: "⚙️",
    category: "quoc-te",
  },
  {
    date: "19/05",
    month: 5,
    name: "Ngày sinh nhật Chủ tịch Hồ Chí Minh",
    year: "19/05/1890",
    desc: "Kỷ niệm ngày sinh Chủ tịch Hồ Chí Minh — vị lãnh tụ vĩ đại, tấm gương đạo đức cách mạng sáng ngời cho mọi thế hệ.",
    activities: [
      "Học tập và làm theo tư tưởng, đạo đức, phong cách Bác",
      "Thắp nến tri ân tại các địa điểm lịch sử",
      "Sinh hoạt chuyên đề chuyên sâu về Bác Hồ",
      "Chiến dịch truyền thông online về Bác",
    ],
    color: "#059669",
    bg: "rgba(5,150,105,0.07)",
    icon: "🌟",
    category: "quoc-gia",
    highlight: true,
  },
  {
    date: "27/07",
    month: 7,
    name: "Ngày Thương binh — Liệt sĩ",
    year: "27/07/1947",
    desc: "Tri ân các anh hùng, liệt sĩ đã hy sinh vì độc lập, tự do của Tổ quốc — truyền lửa tinh thần yêu nước cho thế hệ trẻ.",
    activities: [
      "Thắp nến tri ân tại nghĩa trang liệt sĩ",
      "Thăm hỏi, tặng quà gia đình thương binh",
      "Dâng hương tại đài tưởng niệm",
    ],
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.07)",
    icon: "🕯️",
    category: "tri-an",
  },
  {
    date: "02/09",
    month: 9,
    name: "Ngày Quốc khánh Việt Nam",
    year: "02/09/1945",
    desc: "Kỷ niệm ngày Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập — khai sinh nước Việt Nam Dân chủ Cộng hòa.",
    activities: [
      "Tổ chức chương trình chào mừng Quốc khánh",
      "Hội trại truyền thống — cắm trại đêm",
      "Hoạt động văn nghệ – thể thao chào mừng",
      "Tuyên truyền lịch sử cách mạng mùa thu",
    ],
    color: "#b91c1c",
    bg: "rgba(185,28,28,0.07)",
    icon: "🇻🇳",
    category: "quoc-gia",
    highlight: true,
  },
  {
    date: "15/10",
    month: 10,
    name: "Ngày thành lập Hội Liên hiệp Thanh niên Việt Nam",
    year: "15/10/1956",
    desc: "Kỷ niệm ngày thành lập Hội LHTN Việt Nam — tổ chức chính trị – xã hội rộng rãi, mái nhà chung của thanh niên cả nước.",
    activities: [
      "Đại hội Hội sinh viên các cấp",
      "Lễ kết nạp hội viên mới",
      "Giao lưu kết nối thanh niên liên khoa",
    ],
    color: "#0891b2",
    bg: "rgba(8,145,178,0.07)",
    icon: "🤝",
    category: "doan-hoi",
  },
  {
    date: "20/11",
    month: 11,
    name: "Ngày Nhà giáo Việt Nam",
    year: "20/11/1982",
    desc: "Tri ân thầy cô giáo — những người thầy tận tụy truyền đạt tri thức và truyền cảm hứng cho thế hệ sinh viên IT.",
    activities: [
      "Lễ tri ân thầy cô giáo toàn khoa",
      "Chương trình văn nghệ chào mừng",
      "Tặng quà và hoa cho giảng viên tiêu biểu",
      "Hội thi học thuật vinh danh sinh viên xuất sắc",
    ],
    color: "#ea580c",
    bg: "rgba(234,88,12,0.07)",
    icon: "📚",
    category: "tri-an",
    highlight: true,
  },
  {
    date: "22/12",
    month: 12,
    name: "Ngày thành lập Quân đội Nhân dân Việt Nam",
    year: "22/12/1944",
    desc: "Kỷ niệm ngày thành lập Quân đội Nhân dân Việt Nam anh hùng, giáo dục tinh thần yêu nước và quốc phòng toàn dân.",
    activities: [
      "Giao lưu với các đơn vị quân đội",
      "Hoạt động giáo dục quốc phòng – an ninh",
      "Trải nghiệm rèn luyện kỹ năng quân sự",
    ],
    color: "#166534",
    bg: "rgba(22,101,52,0.07)",
    icon: "🎖️",
    category: "quoc-gia",
  },
];

const MONTHS = [
  "T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12"
];

export default function Holidays() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? HOLIDAYS
    : HOLIDAYS.filter((h) => h.category === activeFilter);

  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroStars}>
          {[...Array(12)].map((_, i) => (
            <span key={i} className={styles.heroStar} style={{
              left: `${8 + i * 8}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.3}s`,
              fontSize: `${0.5 + (i % 3) * 0.3}rem`,
              opacity: 0.15 + (i % 4) * 0.05,
            }}>★</span>
          ))}
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroFlagStar}>★</div>
          <span className={styles.heroTag}>Tuổi trẻ IT hướng về</span>
          <h1 className={styles.heroTitle}>
            Các ngày lễ lớn<br />
            <span className={styles.heroTitleAccent}>sự kiện trọng đại</span>
          </h1>
          <p className={styles.heroSub}>
            Đoàn – Hội Khoa Công nghệ Thông tin tổ chức các hoạt động ý nghĩa,
            hướng về những dấu mốc lịch sử và sự kiện trọng đại của đất nước.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>{HOLIDAYS.length}</span>
              <span className={styles.heroStatLabel}>Ngày lễ lớn</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>12</span>
              <span className={styles.heroStatLabel}>Tháng trong năm</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>100+</span>
              <span className={styles.heroStatLabel}>Hoạt động / năm</span>
            </div>
          </div>
        </div>
        <div className={styles.heroWave}>
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
            <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="#f4f8fd" />
          </svg>
        </div>
      </section>

      <div className={styles.content}>
        {/* ── Timeline tháng ── */}
        <div className={styles.monthBar} data-aos="fade-up">
          {MONTHS.map((m, i) => {
            const monthNum = i + 1;
            const hasHoliday = HOLIDAYS.some((h) => h.month === monthNum);
            const holiday = HOLIDAYS.find((h) => h.month === monthNum);
            return (
              <div key={i} className={`${styles.monthCell} ${hasHoliday ? styles.monthCellActive : ""}`}
                style={hasHoliday ? { "--dot-color": holiday.color } : {}}>
                <span className={styles.monthLabel}>{m}</span>
                {hasHoliday && (
                  <span className={styles.monthDot} style={{ background: holiday.color }} />
                )}
              </div>
            );
          })}
        </div>

        {/* ── Bộ lọc ── */}
        <div className={styles.filters} data-aos="fade-up">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className={`${styles.filterBtn} ${activeFilter === f.id ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ── Cards ── */}
        <div className={styles.grid}>
          {filtered.map((h, i) => (
            <article
              key={h.date}
              className={`${styles.card} ${h.highlight ? styles.cardHighlight : ""}`}
              style={{ "--card-color": h.color, "--card-bg": h.bg }}
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 80}
            >
              <div className={styles.card__top}>
                <div className={styles.card__dateBadge} style={{ background: h.color }}>
                  <span className={styles.card__dateDay}>{h.date.split("/")[0]}</span>
                  <span className={styles.card__dateMonth}>tháng {h.date.split("/")[1]}</span>
                </div>
                <span className={styles.card__icon}>{h.icon}</span>
                {h.highlight && (
                  <span className={styles.card__starBadge}>★ Nổi bật</span>
                )}
              </div>

              <div className={styles.card__body}>
                <p className={styles.card__since}>Kể từ năm {h.year}</p>
                <h3 className={styles.card__name}>{h.name}</h3>
                <p className={styles.card__desc}>{h.desc}</p>

                <div className={styles.card__divider} style={{ background: h.color }} />

                <p className={styles.card__actLabel}>Hoạt động tiêu biểu</p>
                <ul className={styles.card__acts}>
                  {h.activities.map((act, ai) => (
                    <li key={ai} className={styles.card__act}>
                      <span className={styles.card__actDot} style={{ background: h.color }} />
                      {act}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.card__accentBar} style={{ background: h.color }} />
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>Không có ngày lễ nào trong danh mục này.</p>
        )}

        {/* ── CTA ── */}
        <div className={styles.cta} data-aos="fade-up">
          <div className={styles.cta__inner}>
            <div className={styles.cta__flag}>🇻🇳</div>
            <h2 className={styles.cta__title}>Cùng nhau hướng về Tổ quốc</h2>
            <p className={styles.cta__sub}>
              Theo dõi fanpage Đoàn – Hội Khoa CNTT để cập nhật các hoạt động
              kỷ niệm ngày lễ lớn trong năm học mới.
            </p>
            <a
              href="https://www.facebook.com/DoanHoiITUTE"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta__btn}
            >
              Theo dõi fanpage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
