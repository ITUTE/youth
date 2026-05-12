import React, { useState, useMemo, useEffect, useCallback } from "react";
import styles from "./index.module.scss";
import { CATEGORIES, RESOURCES } from "./data";

/* ── Tag colour map ── */
const TAG_COLORS = {
  "Tiếng Việt":  { bg: "#fef3c7", color: "#92400e" },
  "Tiếng Anh":   { bg: "#dbeafe", color: "#1e40af" },
  "Đa ngôn ngữ": { bg: "#f3e8ff", color: "#6b21a8" },
  "Miễn phí":    { bg: "#dcfce7", color: "#166534" },
  "Freemium":    { bg: "#fef9c3", color: "#854d0e" },
  "Có phí":      { bg: "#fee2e2", color: "#991b1b" },
  "Certificate": { bg: "#e0f2fe", color: "#0c4a6e" },
};

function Tag({ label, active, onClick }) {
  const s = TAG_COLORS[label] || { bg: "#f1f5f9", color: "#475569" };
  return (
    <span
      className={`${styles.tag} ${active ? styles.tagActive : ""}`}
      style={{ background: active ? s.color : s.bg, color: active ? "#fff" : s.color }}
      onClick={onClick}
    >
      {label}
    </span>
  );
}

const CODE_SYMBOLS = ["</>", "{}", "()", "=>", "[]", "&&", "||", "/**", "npm", "git", "API", "AI"];

/* ── Resource card ── */
function ResourceCard({ resource, color, bookmarked, onBookmark, onCopy, copied, index }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} ${resource.highlight ? styles.cardHighlight : ""}`}
      style={{ "--card-color": color, "--i": index }}
    >
      <div className={styles.card__accentBar} />

      {/* action buttons */}
      <div className={styles.card__actions}>
        <button
          className={`${styles.card__actionBtn} ${bookmarked ? styles.card__actionBtnActive : ""}`}
          title={bookmarked ? "Bỏ lưu" : "Lưu tài nguyên"}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onBookmark(resource); }}
        >
          {bookmarked ? "❤️" : "🤍"}
        </button>
        <button
          className={`${styles.card__actionBtn} ${copied ? styles.card__actionBtnCopied : ""}`}
          title="Sao chép link"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onCopy(resource.url, e); }}
        >
          {copied ? "✅" : "🔗"}
        </button>
      </div>

      <div className={styles.card__head}>
        <span className={styles.card__icon}>{resource.icon}</span>
        <div className={styles.card__meta}>
          <h3 className={styles.card__name}>{resource.name}</h3>
          <span className={styles.card__platform}>{resource.platform}</span>
        </div>
        {resource.stars && (
          <span className={styles.card__stars}>⭐ {resource.stars}</span>
        )}
      </div>

      <p className={styles.card__desc}>{resource.desc}</p>

      <div className={styles.card__footer}>
        <div className={styles.card__tags}>
          {resource.tags.map((t) => <Tag key={t} label={t} />)}
        </div>
        <span className={styles.card__cta} style={{ color }}>Truy cập →</span>
      </div>
    </a>
  );
}

/* ── helpers ── */
const ALL_RESOURCES_FLAT = CATEGORIES.flatMap((cat) =>
  (RESOURCES[cat.id] || []).map((r) => ({ ...r, _catId: cat.id, _catColor: cat.color, _catLabel: cat.label, _catIcon: cat.icon }))
);
const totalCount = ALL_RESOURCES_FLAT.length;

function loadBookmarks() {
  try { return JSON.parse(localStorage.getItem("yit_resources_bm") || "[]"); }
  catch { return []; }
}
function saveBookmarks(bm) {
  localStorage.setItem("yit_resources_bm", JSON.stringify(bm));
}

/* ═══════════════════════════════════════════ */
export default function Resources() {
  const [activeTab, setActiveTab]     = useState("tai-lieu");
  const [tabKey, setTabKey]           = useState(0);      // re-trigger grid animation
  const [search, setSearch]           = useState("");
  const [tagFilter, setTagFilter]     = useState(null);
  const [bookmarks, setBookmarks]     = useState(loadBookmarks);
  const [copiedUrl, setCopiedUrl]     = useState(null);
  const [toast, setToast]             = useState(null);
  const [randomCard, setRandomCard]   = useState(null);

  /* ── copy link ── */
  const handleCopy = useCallback((url) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedUrl(url);
      setToast({ msg: "Đã sao chép link!", type: "success" });
      setTimeout(() => { setCopiedUrl(null); setToast(null); }, 2000);
    });
  }, []);

  /* ── bookmark ── */
  const toggleBookmark = useCallback((resource) => {
    setBookmarks((prev) => {
      const exists = prev.some((b) => b.url === resource.url);
      const next = exists ? prev.filter((b) => b.url !== resource.url) : [...prev, resource];
      saveBookmarks(next);
      setToast({ msg: exists ? "Đã bỏ lưu tài nguyên" : "Đã lưu vào Yêu thích ❤️", type: exists ? "info" : "success" });
      setTimeout(() => setToast(null), 2000);
      return next;
    });
  }, []);

  const isBookmarked = useCallback((url) => bookmarks.some((b) => b.url === url), [bookmarks]);

  /* ── random ── */
  const pickRandom = () => {
    const r = ALL_RESOURCES_FLAT[Math.floor(Math.random() * ALL_RESOURCES_FLAT.length)];
    setRandomCard(r);
  };

  /* ── global search (cross-category, ≥ 2 chars) ── */
  const isGlobalSearch = search.trim().length >= 2;

  const globalResults = useMemo(() => {
    if (!isGlobalSearch) return null;
    const q = search.toLowerCase();
    const groups = [];
    CATEGORIES.forEach((cat) => {
      const hits = (RESOURCES[cat.id] || []).filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.desc.toLowerCase().includes(q) ||
          r.tags.some((t) => t.toLowerCase().includes(q))
      );
      if (hits.length) groups.push({ cat, hits });
    });
    return groups;
  }, [search, isGlobalSearch]);

  const globalTotal = globalResults?.reduce((s, g) => s + g.hits.length, 0) ?? 0;

  /* ── tag options for current tab ── */
  const availableTags = useMemo(() => {
    if (activeTab === "__bookmarks__") return [];
    const s = new Set();
    (RESOURCES[activeTab] || []).forEach((r) => r.tags.forEach((t) => s.add(t)));
    return [...s];
  }, [activeTab]);

  /* ── filtered list for current tab ── */
  const filteredList = useMemo(() => {
    if (activeTab === "__bookmarks__") return bookmarks;
    let list = RESOURCES[activeTab] || [];
    if (tagFilter) list = list.filter((r) => r.tags.includes(tagFilter));
    return list;
  }, [activeTab, tagFilter, bookmarks]);

  const activeCat = CATEGORIES.find((c) => c.id === activeTab) || { label: "Yêu thích", icon: "❤️", color: "#e11d48" };

  /* close random modal on Escape */
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setRandomCard(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* ────────────────── render ────────────────── */
  return (
    <div className={styles.page}>

      {/* ── Toast ── */}
      {toast && (
        <div className={`${styles.toast} ${styles[`toast__${toast.type}`]}`}>
          {toast.msg}
        </div>
      )}

      {/* ── Random modal ── */}
      {randomCard && (
        <div className={styles.modalBackdrop} onClick={() => setRandomCard(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modal__close} onClick={() => setRandomCard(null)}>✕</button>
            <div className={styles.modal__cat} style={{ color: randomCard._catColor }}>
              {randomCard._catIcon} {randomCard._catLabel}
            </div>
            <div className={styles.modal__icon}>{randomCard.icon}</div>
            <h2 className={styles.modal__name}>{randomCard.name}</h2>
            <p className={styles.modal__platform}>{randomCard.platform}</p>
            <p className={styles.modal__desc}>{randomCard.desc}</p>
            <div className={styles.modal__tags}>
              {randomCard.tags.map((t) => <Tag key={t} label={t} />)}
            </div>
            <div className={styles.modal__actions}>
              <a
                href={randomCard.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modal__visit}
                style={{ background: randomCard._catColor }}
              >
                Truy cập ngay →
              </a>
              <button className={styles.modal__reroll} onClick={pickRandom}>
                🎲 Khác
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroGlow} />
        <div className={styles.heroSymbols} aria-hidden>
          {CODE_SYMBOLS.map((sym, i) => (
            <span
              key={i}
              className={styles.heroSymbol}
              style={{
                left: `${6 + i * 8}%`,
                top: `${15 + (i % 4) * 20}%`,
                animationDuration: `${4 + (i % 3)}s`,
                animationDelay: `${i * 0.4}s`,
                fontSize: `${0.65 + (i % 3) * 0.2}rem`,
              }}
            >{sym}</span>
          ))}
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Khoa Công nghệ Thông tin · HCMUTE</span>
          <h1 className={styles.heroTitle}>
            Kho tài nguyên<br />
            <span className={styles.heroTitleAccent}>học tập mở</span>
          </h1>
          <p className={styles.heroSub}>
            Tổng hợp tài liệu, roadmap ngành, CV mẫu, câu hỏi phỏng vấn, GitHub hay,
            khóa học miễn phí và NCKH — dành riêng cho sinh viên CNTT.
          </p>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>{totalCount}+</span>
              <span className={styles.heroStatLabel}>Tài nguyên</span>
            </div>
            <div className={styles.heroStatDiv} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>{CATEGORIES.length}</span>
              <span className={styles.heroStatLabel}>Danh mục</span>
            </div>
            <div className={styles.heroStatDiv} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>{bookmarks.length}</span>
              <span className={styles.heroStatLabel}>Đã lưu</span>
            </div>
          </div>

          {/* search */}
          <div className={styles.heroSearch}>
            <span className={styles.heroSearchIcon}>🔍</span>
            <input
              type="text"
              placeholder="Tìm kiếm trên tất cả danh mục..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.heroSearchInput}
            />
            {search && (
              <button className={styles.heroSearchClear} onClick={() => setSearch("")}>✕</button>
            )}
          </div>

          {/* random */}
          <button className={styles.randomBtn} onClick={pickRandom}>
            🎲 Khám phá ngẫu nhiên
          </button>
        </div>
        <div className={styles.heroWave}>
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,70 L0,70 Z" fill="#f4f8fd" />
          </svg>
        </div>
      </section>

      {/* ── Tabs ── */}
      <div className={styles.tabs}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.tab} ${activeTab === cat.id && !isGlobalSearch ? styles.tabActive : ""}`}
            style={activeTab === cat.id && !isGlobalSearch ? { "--tab-color": cat.color } : {}}
            onClick={() => { setActiveTab(cat.id); setTagFilter(null); setSearch(""); setTabKey(k => k + 1); }}
          >
            <span className={styles.tab__icon}>{cat.icon}</span>
            <span className={styles.tab__label}>{cat.label}</span>
            <span className={styles.tab__count}>{RESOURCES[cat.id]?.length}</span>
          </button>
        ))}

        {/* Bookmarks tab (only when saved > 0) */}
        {bookmarks.length > 0 && (
          <button
            className={`${styles.tab} ${styles.tabBookmark} ${activeTab === "__bookmarks__" && !isGlobalSearch ? styles.tabActive : ""}`}
            style={activeTab === "__bookmarks__" && !isGlobalSearch ? { "--tab-color": "#e11d48" } : {}}
            onClick={() => { setActiveTab("__bookmarks__"); setTagFilter(null); setSearch(""); setTabKey(k => k + 1); }}
          >
            <span className={styles.tab__icon}>❤️</span>
            <span className={styles.tab__label}>Yêu thích</span>
            <span className={styles.tab__count}>{bookmarks.length}</span>
          </button>
        )}
      </div>

      {/* ── Content ── */}
      <div className={styles.content}>

        {/* ──── GLOBAL SEARCH RESULTS ──── */}
        {isGlobalSearch ? (
          <>
            <div className={styles.contentHeader}>
              <div>
                <h2 className={styles.contentTitle}>🔍 Kết quả tìm kiếm</h2>
                <p className={styles.contentSub}>
                  {globalTotal} tài nguyên phù hợp với &ldquo;{search}&rdquo;
                </p>
              </div>
              <button className={styles.clearSearch} onClick={() => setSearch("")}>Xoá tìm kiếm ✕</button>
            </div>

            {globalResults && globalResults.length > 0 ? (
              globalResults.map(({ cat, hits }) => (
                <div key={cat.id} className={styles.globalGroup}>
                  <div className={styles.globalGroup__header} style={{ "--g-color": cat.color }}>
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                    <span className={styles.globalGroup__count}>{hits.length}</span>
                  </div>
                  <div className={styles.grid}>
                    {hits.map((r, i) => (
                      <ResourceCard
                        key={i} index={i} resource={r} color={cat.color}
                        bookmarked={isBookmarked(r.url)}
                        onBookmark={toggleBookmark}
                        onCopy={handleCopy}
                        copied={copiedUrl === r.url}
                      />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.empty}>
                <span>🔍</span>
                <p>Không tìm thấy tài nguyên nào.<br />Thử từ khoá khác nhé!</p>
              </div>
            )}
          </>
        ) : (
          /* ──── NORMAL TAB VIEW ──── */
          <>
            <div className={styles.contentHeader}>
              <div>
                <h2 className={styles.contentTitle} style={{ color: activeCat.color }}>
                  {activeCat.icon} {activeCat.label}
                </h2>
                <p className={styles.contentSub}>
                  {filteredList.length} tài nguyên{tagFilter ? ` · lọc theo "${tagFilter}"` : ""}
                </p>
              </div>
              {tagFilter && (
                <button className={styles.clearSearch} onClick={() => setTagFilter(null)}>
                  Bỏ lọc ✕
                </button>
              )}
            </div>

            {/* tag filter chips */}
            {availableTags.length > 0 && (
              <div className={styles.tagFilters}>
                {availableTags.map((t) => (
                  <Tag
                    key={t} label={t}
                    active={tagFilter === t}
                    onClick={() => setTagFilter((prev) => (prev === t ? null : t))}
                  />
                ))}
              </div>
            )}

            {filteredList.length > 0 ? (
              <div className={styles.grid} key={tabKey}>
                {filteredList.map((r, i) => (
                  <ResourceCard
                    key={i} index={i} resource={r} color={activeCat.color}
                    bookmarked={isBookmarked(r.url)}
                    onBookmark={toggleBookmark}
                    onCopy={handleCopy}
                    copied={copiedUrl === r.url}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.empty}>
                <span>{activeTab === "__bookmarks__" ? "🤍" : "📭"}</span>
                <p>
                  {activeTab === "__bookmarks__"
                    ? "Chưa có tài nguyên nào được lưu.\nNhấn 🤍 trên mỗi card để lưu!"
                    : "Không có tài nguyên phù hợp với bộ lọc này."}
                </p>
              </div>
            )}
          </>
        )}

        {/* ── Contribute CTA ── */}
        <div className={styles.contribute} data-aos="fade-up">
          <div className={styles.contribute__icon}>🙌</div>
          <div>
            <h3 className={styles.contribute__title}>Bạn biết tài nguyên hay?</h3>
            <p className={styles.contribute__sub}>
              Góp ý hoặc đề xuất thêm tài nguyên hữu ích qua fanpage Đoàn – Hội khoa CNTT.
            </p>
          </div>
          <a
            href="https://www.facebook.com/DoanHoiITUTE"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contribute__btn}
          >
            Góp ý ngay →
          </a>
        </div>
      </div>
    </div>
  );
}
