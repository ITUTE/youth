import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.scss";

/* ── Static data ── */
const STATS = [
  { value: 86, suffix: "+", label: "Sinh viên tham gia" },
  { value: 7, suffix: "", label: "Ngày thử thách" },
  { value: 15, suffix: "+", label: "Hoạt động xanh" },
];

const INTRO_CARDS = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22V12M12 12C12 6 6 4 2 6c0 4 2 8 10 6M12 12c0-6 6-8 10-6-1 4-3 8-10 6" />
      </svg>
    ),
    title: "Xanh hóa khuôn viên",
    desc: "Trồng cây, bảo tồn mảng xanh và xây dựng không gian học tập thân thiện với môi trường trong khuôn viên trường.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Tiết kiệm năng lượng",
    desc: "Hướng dẫn thực hành tiết kiệm điện, sử dụng năng lượng tái tạo và giảm lượng khí thải carbon trong sinh hoạt hàng ngày.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20z" />
        <path d="M12 2c-4 6-4 12 0 20M12 2c4 6 4 12 0 20M2 12h20" />
      </svg>
    ),
    title: "Bảo tồn nguồn nước",
    desc: "Nâng cao ý thức sử dụng nước hợp lý, giảm thiểu ô nhiễm nguồn nước và tuyên truyền bảo vệ tài nguyên nước sạch.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Cộng đồng xanh",
    desc: "Kết nối sinh viên, giảng viên và cộng đồng cùng chung tay hành động vì môi trường — mỗi người một việc nhỏ, cùng tạo nên thay đổi lớn.",
  },
];

const DAYS = [
  {
    num: 1,
    emoji: "🚲",
    title: "Phương tiện Xanh",
    desc: "Đi bộ, đạp xe, đi xe buýt hoặc carpool (đi chung xe) ít nhất 1 chuyến. Nếu bắt buộc đi xe máy thì tắt máy khi dừng đèn đỏ và không chạy quá tốc độ.",
    color: "#16a34a",
  },
  {
    num: 2,
    emoji: "🫙",
    title: "Bình nước cá nhân",
    desc: "Dùng bình nước riêng thay vì chai nhựa — tiết kiệm hàng chục chai mỗi tuần.",
    color: "#0ea5e9",
  },
  {
    num: 3,
    emoji: "🚲",
    title: "Đồ dùng xanh",
    desc: "Sử dụng các túi vải, hộp cơm, ống hút và đồ dùng tái sử dụng thay vì đồ nhựa dùng một lần.",
    color: "#84cc16",
  },
  {
    num: 4,
    emoji: "🥗",
    title: "Bữa ăn xanh",
    desc: "Ăn chay ít nhất 1 bữa — giảm phát thải và bảo vệ sức khỏe.",
    color: "#f59e0b",
  },
  {
    num: 5,
    emoji: "💡",
    title: "Tiết kiệm điện",
    desc: "Tắt đèn, điều hòa, thiết bị điện khi ra khỏi phòng.",
    color: "#a855f7",
  },
  {
    num: 6,
    emoji: "♻️",
    title: "Phân loại rác",
    desc: "Phân loại rác hữu cơ, tái chế và rác thải thông thường đúng cách.",
    color: "#14b8a6",
  },
  {
    num: 7,
    emoji: "📣",
    title: "Lan tỏa thông điệp",
    desc: "Chia sẻ 1 hành động xanh của bạn lên mạng xã hội với #ITERGreenCampus.",
    color: "#ec4899",
  },
];

const LEADERBOARD = [
  {
    rank: 1,
    name: "Nguyễn Minh Khoa",
    class: "CNTT-K22",
    points: 980,
    badge: "🥇",
  },
  {
    rank: 2,
    name: "Trần Thị Lan Anh",
    class: "CNTT-K25",
    points: 870,
    badge: "🥈",
  },
  { rank: 3, name: "Lê Văn Hùng", class: "CNTT-K23", points: 820, badge: "🥉" },
  {
    rank: 4,
    name: "Phạm Bảo Châu",
    class: "ATTT-K22",
    points: 750,
    badge: null,
  },
  {
    rank: 5,
    name: "Võ Thị Kim Ngân",
    class: "KTDL-K21A",
    points: 710,
    badge: null,
  },
  {
    rank: 6,
    name: "Đặng Quốc Thịnh",
    class: "CNTT-K23",
    points: 680,
    badge: null,
  },
];

const RESOURCES = [
  {
    tag: "Bài viết",
    title: "10 thói quen xanh dễ áp dụng cho sinh viên",
    desc: "Những hành động nhỏ trong cuộc sống hàng ngày có thể tạo ra sự thay đổi lớn cho môi trường xung quanh bạn.",
    color: "#16a34a",
  },
  {
    tag: "Video",
    title: 'Tại sao trường đại học cần trở nên "xanh" hơn?',
    desc: "Khám phá lý do các trường đại học trên thế giới đang chạy đua triển khai mô hình Green Campus.",
    color: "#0ea5e9",
  },
  {
    tag: "Hướng dẫn",
    title: "Cách phân loại rác đúng cách tại nhà và trường học",
    desc: "Hướng dẫn chi tiết 3 loại rác cơ bản — hữu cơ, tái chế và rác thải thông thường — cùng mẹo xử lý hiệu quả.",
    color: "#84cc16",
  },
  {
    tag: "Infographic",
    title: "Dấu chân carbon của 1 sinh viên là bao nhiêu?",
    desc: "Tìm hiểu lượng khí thải carbon bạn tạo ra trong 1 ngày học và những cách thiết thực để giảm con số đó.",
    color: "#f59e0b",
  },
];

const STORIES = [
  {
    name: "Nguyễn Thành Đạt",
    class: "CNTT K22",
    avatar: "ĐT",
    quote:
      "Sau 7 ngày thử thách, mình nhận ra những thứ nhỏ như mang bình nước hay đi bộ lại có tác động lớn hơn mình tưởng. Bây giờ những thói quen đó đã trở thành một phần của mình rồi!",
    action: "7 ngày hoàn thành · 980 điểm",
  },
  {
    name: "Trần Ngọc Hà",
    class: "CNTT K21",
    avatar: "NH",
    quote:
      "Khi chia sẻ hành trình xanh của mình lên Instagram, mình nhận được rất nhiều bạn bè hỏi và muốn cùng tham gia. Thật sự ý nghĩa khi lan tỏa được điều tốt!",
    action: "7 ngày hoàn thành · 870 điểm",
  },
  {
    name: "Lê Minh Quân",
    class: "CNTT K23",
    avatar: "MQ",
    quote:
      "Ngày thử thách ăn chay là khó nhất nhưng cũng thú vị nhất — mình khám phá ra nhiều món ngon mà trước giờ không biết. Green Campus không chỉ tốt cho Trái đất mà còn tốt cho mình.",
    action: "5 ngày hoàn thành · 620 điểm",
  },
];

/* ── Animated counter ── */
function AnimatedCount({ value, suffix, label, delay }) {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        let start = 0;
        const step = value / (1200 / 16);
        const t = setInterval(() => {
          start += step;
          if (start >= value) {
            setCount(value);
            clearInterval(t);
          } else setCount(Math.floor(start));
        }, 16);
      },
      { threshold: 0.4 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className={styles.statItem}
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <strong>
        {count}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

/* ── Page ── */
export default function GreenCampus() {

  const scrollToChallenge = () => {
    document
      .getElementById("thu-thach")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.page}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroBgCircle1} />
          <div className={styles.heroBgCircle2} />
          <div className={styles.heroBgLeaves} aria-hidden="true">
            {[...Array(6)].map((_, i) => (
              <svg
                key={i}
                className={`${styles.floatLeaf} ${styles[`leaf${i + 1}`]}`}
                viewBox="0 0 40 60"
                fill="none"
              >
                <path
                  d="M20 58 C20 58 2 40 2 22 C2 10 10 2 20 2 C30 2 38 10 38 22 C38 40 20 58 20 58Z"
                  fill="currentColor"
                  opacity="0.35"
                />
              </svg>
            ))}
          </div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroLogoWrap} data-aos="zoom-in">
            <svg className={styles.heroLogo} viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="40" fill="rgba(255,255,255,0.12)" />
              <path
                d="M40 65 C40 65 16 48 16 30 C16 18 26 10 40 10 C54 10 64 18 64 30 C64 48 40 65 40 65Z"
                fill="rgba(255,255,255,0.9)"
              />
              <path
                d="M40 65 C40 65 28 52 26 38 C32 30 36 28 40 30 C44 28 48 30 54 38 C52 52 40 65 40 65Z"
                fill="rgba(134,239,172,0.8)"
              />
              <circle cx="40" cy="35" r="4" fill="rgba(22,163,74,0.9)" />
            </svg>
          </div>

          <p
            className={styles.heroEyebrow}
            data-aos="fade-down"
            data-aos-delay="60"
          >
            Đoàn - Hội Khoa Công nghệ Thông tin · HCMUTE
          </p>
          <h1
            className={styles.heroTitle}
            data-aos="fade-up"
            data-aos-delay="120"
          >
            ITER <span>Green Campus</span>
          </h1>
          <p className={styles.heroSub} data-aos="fade-up" data-aos-delay="180">
            Mô hình trường đại học xanh — nơi mỗi sinh viên là một đại sứ môi
            trường, cùng nhau kiến tạo khuôn viên bền vững cho thế hệ mai sau.
          </p>

          <div
            className={styles.heroCtas}
            data-aos="fade-up"
            data-aos-delay="260"
          >
            <a
              href="https://itute.tiny.us/SONGXANH"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaPrimary}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              Tham gia thử thách 7 Ngày
            </a>
            <a href="#gioi-thieu" className={styles.ctaOutline}>
              Tìm hiểu thêm
            </a>
          </div>

          <div
            className={styles.heroTags}
            data-aos="fade-up"
            data-aos-delay="320"
          >
            {["#GreenCampus", "#HCMUTE", "#ITERxanh", "#7DayChallenge"].map(
              (t) => (
                <span key={t} className={styles.heroTag}>
                  {t}
                </span>
              ),
            )}
          </div>
        </div>

        <div className={styles.heroWave}>
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
            <path
              d="M0,60 C240,90 480,30 720,60 C960,90 1200,30 1440,60 L1440,90 L0,90 Z"
              fill="#f0fdf4"
            />
          </svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className={styles.statsBar}>
        {STATS.map((s, i) => (
          <AnimatedCount key={i} {...s} delay={i * 100} />
        ))}
      </div>

      {/* ── GIỚI THIỆU ── */}
      <section className={styles.section} id="gioi-thieu">
        <div className={styles.sectionHead} data-aos="fade-up">
          <span className={styles.sectionTag}>Về mô hình</span>
          <h2 className={styles.sectionTitle}>ITER Green Campus là gì?</h2>
          <p className={styles.sectionDesc}>
            Sáng kiến xây dựng khuôn viên xanh bền vững, kết hợp công nghệ và ý
            thức cộng đồng để biến trường học thành một hệ sinh thái sống động
            và thân thiện với môi trường.
          </p>
        </div>

        <div className={styles.introGrid}>
          {INTRO_CARDS.map((card, i) => (
            <div
              key={i}
              className={styles.introCard}
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className={styles.introCardIcon}>{card.icon}</div>
              <h3 className={styles.introCardTitle}>{card.title}</h3>
              <p className={styles.introCardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── THỬ THÁCH 7 NGÀY ── */}
      <section
        className={`${styles.section} ${styles.sectionGreen}`}
        id="thu-thach"
      >
        <div className={styles.sectionHead} data-aos="fade-up">
          <span className={styles.sectionTag}>Hành động ngay</span>
          <h2 className={styles.sectionTitle}>Thử thách 7 Ngày Xanh</h2>
          <p className={styles.sectionDesc}>
            Mỗi ngày một thử thách nhỏ — 7 ngày tạo nên thói quen xanh bền vững.
            Hoàn thành và chia sẻ để nhận điểm và leo hạng Leaderboard!
          </p>
        </div>

        <div className={styles.daysGrid}>
          {DAYS.map((day, i) => (
            <div
              key={day.num}
              className={styles.dayCard}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              style={{ "--day-color": day.color }}
            >
              <div className={styles.dayNum}>Ngày {day.num}</div>
              <div className={styles.dayEmoji}>{day.emoji}</div>
              <h3 className={styles.dayTitle}>{day.title}</h3>
              <p className={styles.dayDesc}>{day.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.challengeCta} data-aos="fade-up">
          <p>Sẵn sàng bắt đầu hành trình xanh?</p>
          <a
            href="https://itute.tiny.us/SONGXANH"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaPrimary}
          >
            Đăng ký tham gia ngay
          </a>
        </div>
      </section>

      {/* ── LEADERBOARD ── */}
      <section className={styles.section} id="leaderboard">
        <div className={styles.sectionHead} data-aos="fade-up">
          <span className={styles.sectionTag}>Bảng xếp hạng</span>
          <h2 className={styles.sectionTitle}>Những đại sứ xanh dẫn đầu</h2>
          <p className={styles.sectionDesc}>
            Cập nhật hàng tuần · Điểm được tính dựa trên số thử thách hoàn thành
            và lượt chia sẻ
          </p>
        </div>

        <div
          className={styles.leaderboard}
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {LEADERBOARD.map((p, i) => (
            <div
              key={i}
              className={`${styles.lbRow} ${i < 3 ? styles.lbRowTop : ""}`}
            >
              <div className={styles.lbRank}>
                {p.badge ? (
                  <span className={styles.lbBadge}>{p.badge}</span>
                ) : (
                  <span className={styles.lbNum}>{p.rank}</span>
                )}
              </div>
              <div className={styles.lbAvatar}>
                {p.name.split(" ").pop()[0]}
              </div>
              <div className={styles.lbInfo}>
                <strong>{p.name}</strong>
                <span>{p.class}</span>
              </div>
              <div className={styles.lbPoints}>
                <strong>{p.points}</strong>
                <span>điểm</span>
              </div>
              <div className={styles.lbBar}>
                <div
                  className={styles.lbBarFill}
                  style={{ width: `${(p.points / 1000) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TÀI NGUYÊN ── */}
      <section
        className={`${styles.section} ${styles.sectionTeal}`}
        id="tai-nguyen"
      >
        <div className={styles.sectionHead} data-aos="fade-up">
          <span className={styles.sectionTag}>Kiến thức xanh</span>
          <h2 className={styles.sectionTitle}>Tài nguyên hữu ích</h2>
          <p className={styles.sectionDesc}>
            Bài viết, video và hướng dẫn giúp bạn hiểu sâu hơn về môi trường và
            hành động xanh
          </p>
        </div>

        <div className={styles.resourceGrid}>
          {RESOURCES.map((r, i) => (
            <div
              key={i}
              className={styles.resourceCard}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              style={{ "--res-color": r.color }}
            >
              <span className={styles.resourceTag}>{r.tag}</span>
              <h3 className={styles.resourceTitle}>{r.title}</h3>
              <p className={styles.resourceDesc}>{r.desc}</p>
              <button className={styles.resourceBtn}>
                Xem thêm
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── CÂU CHUYỆN XANH ── */}
      <section className={styles.section} id="cau-chuyen">
        <div className={styles.sectionHead} data-aos="fade-up">
          <span className={styles.sectionTag}>Cộng đồng xanh</span>
          <h2 className={styles.sectionTitle}>Câu chuyện Xanh</h2>
          <p className={styles.sectionDesc}>
            Những chia sẻ truyền cảm hứng từ các sinh viên đã trải qua hành
            trình xanh
          </p>
        </div>

        <div className={styles.storiesGrid}>
          {STORIES.map((s, i) => (
            <div
              key={i}
              className={styles.storyCard}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className={styles.storyQuoteIcon} aria-hidden="true">
                "
              </div>
              <p className={styles.storyQuote}>{s.quote}</p>
              <div className={styles.storyAuthor}>
                <div className={styles.storyAvatar}>{s.avatar}</div>
                <div>
                  <strong>{s.name}</strong>
                  <span>{s.class}</span>
                </div>
                <span className={styles.storyAction}>{s.action}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA CUỐI ── */}
      <section className={styles.ctaSection} data-aos="fade-up">
        <div className={styles.ctaSectionInner}>
          <div className={styles.ctaLeafLeft} aria-hidden="true">
            🌿
          </div>
          <h2>Hãy cùng nhau tạo nên sự thay đổi!</h2>
          <p>
            Mỗi hành động nhỏ của bạn hôm nay là nền tảng cho một tương lai xanh
            hơn.
          </p>
          <a
            href="https://itute.tiny.us/SONGXANH"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaPrimaryLg}
          >
            Bắt đầu thử thách ngay hôm nay 🌱
          </a>
          <div className={styles.ctaLeafRight} aria-hidden="true">
            🍃
          </div>
        </div>
      </section>
    </div>
  );
}
