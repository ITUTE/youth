import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";

/* ── Replace these with real links when ready ── */
const LINKS = {
  nuSinhSurvey:  "https://forms.gle/placeholder-nu-sinh",
  nuSinhDocs:    "https://drive.google.com/drive/folders/placeholder-nu-sinh",
  mindcareDocs:  "https://drive.google.com/drive/folders/placeholder-mindcare",
  mindcareForm:  "https://forms.gle/placeholder-mindcare",
};

const STORIES = [
  {
    emoji: "🌟",
    color: "#db2777",
    bg: "#fdf2f8",
    name: "Lan Anh",
    role: "Nữ sinh CNTT năm 3",
    teaser: "Từ \"cô gái sợ code\" đến Top sinh viên nghiên cứu khoa học cấp trường.",
    quote: `Lúc mới vào Khoa CNTT, mình sợ code kinh khủng. Mình nghĩ con gái không hợp với lập trình, lại còn bị bạn nam trong nhóm chê "code như gái". Nhưng mình kiên trì học mỗi ngày 3-4 tiếng, tham gia câu lạc bộ lập trình nữ sinh. Đến năm nay, mình đã có bài nghiên cứu về AI ứng dụng trong nông nghiệp được giải thưởng cấp trường. Giờ mình muốn nói với các bạn nữ: Đừng sợ, chỉ cần bắt đầu và kiên trì, chúng ta hoàn toàn có thể làm được!`,
  },
  {
    emoji: "🌿",
    color: "#059669",
    bg: "#ecfdf5",
    name: "H'Mai",
    role: "Sinh viên dân tộc Ê Đê, năm 2 — Chuyên ngành Phần mềm",
    teaser: "Từ buôn làng Đắk Lắk không internet đến dự án web hỗ trợ bà con bán nông sản.",
    quote: `Mình lớn lên ở buôn làng Đắk Lắk, gia đình làm nông, điện chập chờn, internet yếu lắm. Lúc thi đại học, nhiều người bảo con gái dân tộc học CNTT chi cho khổ. Nhưng mình vẫn chọn vì muốn sau này về làng làm app hỗ trợ bà con bán nông sản. Những ngày đầu học online, mình phải ngồi ngoài hiên nhà mới có sóng. Có hôm code đến 2-3 giờ sáng mới xong bài. Giờ mình đã làm được dự án web bán hàng cho bà con buôn làng. Mình tin rằng nếu mình làm được, các bạn dân tộc khác cũng làm được!`,
  },
  {
    emoji: "💫",
    color: "#2563eb",
    bg: "#eff6ff",
    name: "Ngọc Trâm",
    role: "Nữ sinh dân tộc Tày, từ Quảng Ninh lên Sài Gòn",
    teaser: "Vừa học vừa làm thêm, ít ngủ, tự ti — rồi đoạt giải Hackathon trường.",
    quote: `Nhà mình nghèo, ba mẹ làm ruộng và khai thác than. Lên thành phố học, mình vừa học vừa làm thêm gia sư, có tháng chỉ ngủ 4-5 tiếng. Ban đầu mình rất tự ti vì tiếng Việt chưa chuẩn, code hay bị lỗi. Nhưng nhờ các anh chị trong Đoàn - Hội hỗ trợ, mình dần vượt qua. Hiện tại mình đang là thành viên nhóm dự án thắng giải cuộc thi Hackathon trường. Mình muốn nhắn nhủ: Dù xuất phát điểm khó khăn đến đâu, chỉ cần không bỏ cuộc, công nghệ sẽ mở ra rất nhiều cánh cửa.`,
  },
  {
    emoji: "💝",
    color: "#e11d48",
    bg: "#fff1f2",
    name: "Thu Hà",
    role: "Nữ sinh CNTT, mẹ đơn thân",
    teaser: "Vừa ôm con vừa code, vừa ru con vừa debug — 90% tín chỉ và đang thực tập.",
    quote: `Mình mang thai năm nhất đại học. Nhiều người khuyên nghỉ học vì "con gái CNTT vất vả lắm". Nhưng mình không muốn bỏ lỡ đam mê. Mình vừa ôm con vừa code, vừa học vừa đi làm thêm. Có những đêm con khóc, mình vừa ru con vừa debug code. Đến nay mình đã hoàn thành 90% tín chỉ và đang thực tập tại một công ty phần mềm. Mình muốn các bạn nữ thấy rằng: Làm mẹ và làm lập trình viên hoàn toàn có thể song hành nếu ta đủ quyết tâm.`,
  },
  {
    emoji: "🏔️",
    color: "#d97706",
    bg: "#fffbeb",
    name: "A Pha",
    role: "Sinh viên dân tộc H'Mông, năm cuối",
    teaser: "Leo đỉnh đồi bắt wifi, trượt ngã trong mưa — rồi nhận học bổng toàn phần.",
    quote: `Mình là người dân tộc H'Mông ở Hà Giang. Nhà mình cách trung tâm huyện hơn 20km đường rừng. Để có wifi học online, mình phải leo lên đỉnh đồi mới bắt được sóng. Có lần mưa lớn, mình trượt ngã, laptop ướt hết nhưng vẫn cố cứu bài tập nộp kịp deadline. Nhờ nỗ lực, mình đã nhận học bổng toàn phần và đang làm đồ án tốt nghiệp về ứng dụng nhận diện ngôn ngữ dân tộc. Mình muốn khẳng định: Dù ở vùng cao xa xôi, sinh viên dân tộc chúng ta vẫn có thể chinh phục công nghệ nếu không ngừng cố gắng.`,
  },
];

const NU_SINH_ITEMS = [
  {
    icon: "💬",
    title: "05 câu chuyện truyền cảm hứng",
    desc: "Những chia sẻ chân thật từ nữ sinh CNTT và sinh viên dân tộc thiểu số — hành trình vượt khó, chinh phục công nghệ và khẳng định bản thân.",
  },
  {
    icon: "📖",
    title: 'Bộ tài liệu "Kỹ năng học tập & Phát triển bản thân"',
    desc: "Tài liệu chuyên biệt dành cho nữ sinh CNTT: kỹ năng tự học, quản lý thời gian, xây dựng portfolio và định hướng nghề nghiệp trong ngành IT.",
  },
  {
    icon: "📋",
    title: "Khảo sát nhu cầu hỗ trợ",
    desc: "Google Form khảo sát nhu cầu thực tế của nữ sinh và sinh viên dân tộc thiểu số — kết quả giúp Đoàn–Hội thiết kế các hỗ trợ phù hợp hơn.",
  },
];

const MINDCARE_ITEMS = [
  {
    icon: "😮‍💨",
    title: '"10 cách giảm stress khi học CNTT"',
    desc: "Bộ tài liệu thực tiễn giúp sinh viên nhận diện stress, xây dựng thói quen lành mạnh và duy trì hiệu suất học tập bền vững.",
  },
  {
    icon: "📊",
    title: "Infographic: Dấu hiệu trầm cảm & Cách hỗ trợ",
    desc: "Nhận biết sớm các dấu hiệu trầm cảm, lo âu và biết cách tự hỗ trợ bản thân hoặc giúp đỡ bạn bè xung quanh.",
  },
  {
    icon: "🌿",
    title: "Kiến thức sức khỏe sinh sản tuổi trẻ",
    desc: "Thông tin khoa học, chính xác về sức khỏe sinh sản dành cho sinh viên — được trình bày rõ ràng, dễ tiếp cận và không phán xét.",
  },
  {
    icon: "🔒",
    title: "Form tư vấn ẩn danh",
    desc: "Gửi câu hỏi riêng tư, nhận phản hồi từ đội ngũ hỗ trợ của Đoàn–Hội. Hoàn toàn ẩn danh, không lưu thông tin cá nhân.",
  },
];

const STATS_NU_SINH = [
  { num: "05",   label: "Câu chuyện" },
  { num: "03",   label: "Bộ tài liệu" },
  { num: "100%", label: "Online" },
];

const STATS_MINDCARE = [
  { num: "10+",  label: "Tài liệu" },
  { num: "4",    label: "Chủ đề" },
  { num: "∞",    label: "Ẩn danh" },
];

function StatBar({ items, color }) {
  return (
    <div className={styles.statBar}>
      {items.map((s, i) => (
        <React.Fragment key={i}>
          <div className={styles.statBar__item}>
            <span className={styles.statBar__num} style={{ color }}>{s.num}</span>
            <span className={styles.statBar__label}>{s.label}</span>
          </div>
          {i < items.length - 1 && <div className={styles.statBar__div} />}
        </React.Fragment>
      ))}
    </div>
  );
}

function ContentItem({ item, color, index }) {
  return (
    <div
      className={styles.item}
      style={{ "--item-color": color, "--i": index }}
    >
      <div className={styles.item__icon} style={{ background: `color-mix(in srgb, ${color} 12%, #fff)` }}>
        {item.icon}
      </div>
      <div className={styles.item__body}>
        <h4 className={styles.item__title}>{item.title}</h4>
        <p className={styles.item__desc}>{item.desc}</p>
      </div>
    </div>
  );
}

function StoryModal({ story, onClose }) {
  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.storyModalOverlay} onClick={onClose}>
      <div
        className={styles.storyModalBox}
        onClick={e => e.stopPropagation()}
        style={{ "--story-color": story.color, "--story-bg": story.bg }}
      >
        <button className={styles.storyModalClose} onClick={onClose} aria-label="Đóng">✕</button>
        <div className={styles.storyModalEmoji}>{story.emoji}</div>
        <div className={styles.storyModalMeta}>
          <h3 className={styles.storyModalName}>{story.name}</h3>
          <p className={styles.storyModalRole}>{story.role}</p>
        </div>
        <blockquote className={styles.storyModalQuote}>
          <span className={styles.storyModalQMark}>"</span>
          {story.quote}
          <span className={styles.storyModalQMark}>"</span>
        </blockquote>
      </div>
    </div>
  );
}

export default function StudentActivities() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStory, setActiveStory] = useState(null);

  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroBlobs}>
          <div className={styles.heroBlob1} />
          <div className={styles.heroBlob2} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Đoàn – Hội Khoa Công nghệ Thông tin · HCMUTE</span>
          <h1 className={styles.heroTitle}>Hoạt động dành cho<br /><span className={styles.heroTitleAccent}>Sinh viên</span></h1>
          <p className={styles.heroSub}>
            Các chương trình hỗ trợ, đồng hành và phát triển toàn diện dành cho sinh viên CNTT —
            đặc biệt chú trọng nữ sinh, sinh viên dân tộc thiểu số và sức khỏe tinh thần.
          </p>
          <div className={styles.heroCards}>
            <a href="#cau-chuyen" className={`${styles.heroCard} ${styles.heroCardGold}`}>
              <span className={styles.heroCard__icon}>✨</span>
              <span className={styles.heroCard__label}>Câu chuyện</span>
            </a>
            <a href="#nu-sinh" className={`${styles.heroCard} ${styles.heroCardPink}`}>
              <span className={styles.heroCard__icon}>🌸</span>
              <span className={styles.heroCard__label}>Nữ Sinh & Dân Tộc</span>
            </a>
            <a href="#mindcare" className={`${styles.heroCard} ${styles.heroCardBlue}`}>
              <span className={styles.heroCard__icon}>🧠</span>
              <span className={styles.heroCard__label}>MindCare IT</span>
            </a>
          </div>
        </div>
        <div className={styles.heroWave}>
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
            <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#f8f4ff" />
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STORIES
      ════════════════════════════════════════════ */}
      <section id="cau-chuyen" className={styles.stories}>
        <div className={styles.stories__inner}>
          <div className={styles.stories__header}>
            <span className={styles.stories__tag}>✨ Truyền cảm hứng</span>
            <h2 className={styles.stories__title}>Câu chuyện sinh viên</h2>
            <p className={styles.stories__sub}>
              Những hành trình có thật từ nữ sinh và sinh viên dân tộc thiểu số của Khoa CNTT —
              bấm vào thẻ để đọc câu chuyện đầy đủ.
            </p>
          </div>
          <div className={styles.storiesGrid}>
            {STORIES.map((story, i) => (
              <button
                key={i}
                className={styles.storyCard}
                style={{ "--story-color": story.color, "--story-bg": story.bg, "--i": i }}
                onClick={() => setActiveStory(story)}
              >
                <div className={styles.storyCard__top}>
                  <span className={styles.storyCard__emoji}>{story.emoji}</span>
                  <span className={styles.storyCard__readTag}>Đọc câu chuyện →</span>
                </div>
                <h3 className={styles.storyCard__name}>{story.name}</h3>
                <p className={styles.storyCard__role}>{story.role}</p>
                <p className={styles.storyCard__teaser}>"{story.teaser}"</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          ACTIVITY 1: Nữ Sinh & Dân Tộc
      ════════════════════════════════════════════ */}
      <section id="nu-sinh" className={`${styles.activity} ${styles.activityPink}`}>
        <div className={styles.activity__inner}>
          <div className={styles.activity__header} data-aos="fade-up">
            <div className={styles.activity__badges}>
              <span className={`${styles.badge} ${styles.badgePink}`}>🌸 Hoạt động online</span>
              <span className={`${styles.badge} ${styles.badgeGray}`}>📅 Tháng 03/2026</span>
              <span className={`${styles.badge} ${styles.badgeGray}`}>🏫 Cấp cơ sở</span>
            </div>
            <h2 className={styles.activity__title}>
              Nữ Sinh CNTT & Sinh Viên Dân Tộc
            </h2>
            <p className={styles.activity__subtitle}>"Cùng Bước Đi"</p>
            <p className={styles.activity__desc}>
              Đoàn – Hội Khoa Công nghệ Thông tin tổ chức hoạt động cấp cơ sở dành cho{" "}
              <strong>nữ sinh</strong> và <strong>sinh viên dân tộc thiểu số</strong> với
              hình thức trực tuyến 100% — để mọi sinh viên đều có thể tham gia dù ở đâu.
            </p>
            <StatBar items={STATS_NU_SINH} color="#db2777" />
          </div>

          <div className={styles.activity__items}>
            <p className={styles.activity__itemsLabel}>Nội dung hoạt động</p>
            {NU_SINH_ITEMS.map((item, i) => (
              <ContentItem key={i} item={item} color="#db2777" index={i} />
            ))}
          </div>

          <div className={styles.activity__cta}>
            <div className={styles.ctaBox} style={{ "--cta-color": "#db2777", "--cta-bg": "#fdf2f8" }}>
              <div className={styles.ctaBox__icon}>👩‍💻</div>
              <div>
                <h3 className={styles.ctaBox__title}>Tháng Vì Phụ Nữ — Tháng 03/2026</h3>
                <p className={styles.ctaBox__sub}>
                  Xem chi tiết hoạt động, tải tài liệu và tham gia khảo sát để Đoàn–Hội
                  hiểu rõ hơn nhu cầu của bạn.
                </p>
              </div>
              <div className={styles.ctaBox__btns}>
                <a href={LINKS.nuSinhSurvey} target="_blank" rel="noopener noreferrer"
                  className={`${styles.ctaBtn} ${styles.ctaBtnPrimary}`} style={{ background: "#db2777" }}>
                  📋 Tham gia khảo sát
                </a>
                <a href={LINKS.nuSinhDocs} target="_blank" rel="noopener noreferrer"
                  className={`${styles.ctaBtn} ${styles.ctaBtnOutline}`} style={{ color: "#db2777", borderColor: "#db2777" }}>
                  📥 Tải tài liệu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          ACTIVITY 2: MindCare IT
      ════════════════════════════════════════════ */}
      <section id="mindcare" className={`${styles.activity} ${styles.activityBlue}`}>
        <div className={styles.activity__inner}>
          <div className={styles.activity__header} data-aos="fade-up">
            <div className={styles.activity__badges}>
              <span className={`${styles.badge} ${styles.badgeBlue}`}>🧠 Online</span>
              <span className={`${styles.badge} ${styles.badgeGray}`}>📅 Năm học 2025–2026</span>
              <span className={`${styles.badge} ${styles.badgeGray}`}>🔒 Hoàn toàn ẩn danh</span>
            </div>
            <h2 className={styles.activity__title}>MindCare IT</h2>
            <p className={styles.activity__subtitle}>"Chăm Sóc Tâm Hồn Sinh Viên CNTT"</p>
            <p className={styles.activity__desc}>
              Đoàn – Hội Khoa CNTT triển khai hoạt động tư vấn và trang bị kiến thức
              chăm sóc <strong>sức khỏe tâm thần</strong> và{" "}
              <strong>sức khỏe sinh sản</strong> cho sinh viên theo hình thức trực tuyến —
              liên tục trong suốt năm học.
            </p>
            <StatBar items={STATS_MINDCARE} color="#0891b2" />
          </div>

          <div className={styles.activity__items}>
            <p className={styles.activity__itemsLabel}>Nội dung đã thực hiện</p>
            {MINDCARE_ITEMS.map((item, i) => (
              <ContentItem key={i} item={item} color="#0891b2" index={i} />
            ))}
          </div>

          <div className={styles.anonNote} data-aos="fade-up">
            <span className={styles.anonNote__icon}>🔒</span>
            <p>
              <strong>Cam kết bảo mật tuyệt đối:</strong> Form tư vấn ẩn danh không yêu cầu
              đăng nhập, không thu thập tên hay email. Mọi câu hỏi đều được đội ngũ hỗ trợ
              của Đoàn–Hội xử lý riêng tư và cẩn thận.
            </p>
          </div>

          <div className={styles.activity__cta}>
            <div className={styles.ctaBox} style={{ "--cta-color": "#0891b2", "--cta-bg": "#f0f9ff" }}>
              <div className={styles.ctaBox__icon}>💙</div>
              <div>
                <h3 className={styles.ctaBox__title}>Sức khỏe tinh thần — không phải chủ đề xa xỉ</h3>
                <p className={styles.ctaBox__sub}>
                  Đọc tài liệu, xem infographic và gửi câu hỏi tư vấn ẩn danh nếu bạn
                  cần hỗ trợ. Chúng mình luôn ở đây.
                </p>
              </div>
              <div className={styles.ctaBox__btns}>
                <a href={LINKS.mindcareDocs} target="_blank" rel="noopener noreferrer"
                  className={`${styles.ctaBtn} ${styles.ctaBtnPrimary}`} style={{ background: "#0891b2" }}>
                  📚 Đọc tài liệu & Infographic
                </a>
                <a href={LINKS.mindcareForm} target="_blank" rel="noopener noreferrer"
                  className={`${styles.ctaBtn} ${styles.ctaBtnOutline}`} style={{ color: "#0891b2", borderColor: "#0891b2" }}>
                  💬 Gửi câu hỏi ẩn danh
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faq}>
        <div className={styles.faq__inner}>
          <h2 className={styles.faq__title}>Câu hỏi thường gặp</h2>
          {[
            {
              q: "Ai có thể tham gia các hoạt động này?",
              a: "Tất cả sinh viên Khoa Công nghệ Thông tin đều có thể tham gia. Hoạt động 'Cùng Bước Đi' đặc biệt khuyến khích nữ sinh và sinh viên dân tộc thiểu số; MindCare IT dành cho tất cả sinh viên không phân biệt giới tính hay năm học.",
            },
            {
              q: "Tài liệu có miễn phí không?",
              a: "Có, toàn bộ tài liệu PDF được chia sẻ miễn phí qua Google Drive công khai. Bạn không cần đăng nhập hay cung cấp thông tin để tải về.",
            },
            {
              q: "Form tư vấn ẩn danh có thực sự ẩn danh không?",
              a: "Hoàn toàn ẩn danh. Form không yêu cầu đăng nhập Google, không ghi lại địa chỉ email hay tên của bạn. Chỉ nội dung câu hỏi được gửi đến đội hỗ trợ.",
            },
            {
              q: "Nếu cần hỗ trợ khẩn cấp về sức khỏe tâm thần thì liên hệ đâu?",
              a: "Bạn có thể nhắn tin trực tiếp cho Fanpage Đoàn–Hội hoặc liên hệ Phòng Công tác Sinh viên của nhà trường. Trong trường hợp khẩn cấp, hãy gọi đường dây hỗ trợ tâm lý 1800 599 920 (miễn phí, 24/7).",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className={`${styles.faqItem} ${openFaq === i ? styles.faqItemOpen : ""}`}
            >
              <button className={styles.faqItem__q} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <span className={styles.faqItem__arrow}>{openFaq === i ? "▲" : "▼"}</span>
              </button>
              {openFaq === i && (
                <div className={styles.faqItem__a}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className={styles.bottomCta}>
        <div className={styles.bottomCta__inner}>
          <div className={styles.bottomCta__icons}>🌸&nbsp;&nbsp;🧠</div>
          <h2 className={styles.bottomCta__title}>Cùng nhau xây dựng môi trường IT lành mạnh</h2>
          <p className={styles.bottomCta__sub}>
            Theo dõi fanpage để không bỏ lỡ các hoạt động mới từ Đoàn – Hội Khoa CNTT.
          </p>
          <a href="https://www.facebook.com/DoanHoiITUTE" target="_blank" rel="noopener noreferrer"
            className={styles.bottomCta__btn}>
            Theo dõi fanpage →
          </a>
        </div>
      </section>

      {/* ── Story modal ── */}
      {activeStory && <StoryModal story={activeStory} onClose={() => setActiveStory(null)} />}
    </div>
  );
}
