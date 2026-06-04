/* =========================================================
   TeknoNabız - Ana Script
   Ortak başlık/altbilgiyi basar ve sayfaları render eder.
   ========================================================= */

/* ---- Yardımcılar ---- */
function formatDate(iso) {
  const months = ["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"];
  const d = new Date(iso);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
function formatViews(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(".0", "") + "B";
  return String(n);
}

/* ---- Tema (açık/koyu) ---- */
function applyTheme(theme, remember) {
  document.documentElement.setAttribute("data-theme", theme);
  if (remember) localStorage.setItem("tn-theme", theme);
  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.textContent = theme === "light" ? "🌙" : "☀️";
    btn.title = theme === "light" ? "Koyu temaya geç" : "Açık temaya geç";
  }
}
function systemTheme() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}
function initTheme() {
  const saved = localStorage.getItem("tn-theme");
  // Kayıtlı tercih yoksa işletim sisteminin temasını kullan
  applyTheme(saved || systemTheme(), false);

  // Kullanıcı elle seçmediyse, sistem teması değişince canlı takip et
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", e => {
      if (!localStorage.getItem("tn-theme")) applyTheme(e.matches ? "light" : "dark", false);
    });
  }

  const btn = document.getElementById("themeToggle");
  if (btn) btn.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    applyTheme(cur === "light" ? "dark" : "light", true); // elle seçim kaydedilir
  });
}

/* ---- Kaydırınca beliren animasyon ---- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); obs.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach(e => obs.observe(e));
}

/* Her sayfa render edildikten sonra çağrılacak ortak başlatıcı */
function afterRender() {
  initTheme();
  initSearch();
  initReveal();
}

/* ---- Ortak Başlık + Menü ---- */
function renderHeader(activeSlug) {
  const navLinks = CATEGORIES.map(c =>
    `<a class="nav-link ${c.slug === activeSlug ? "active" : ""}" href="category.html?cat=${c.slug}">${c.icon} ${c.name}</a>`
  ).join("");

  return `
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html">
        <svg class="logo-mark" viewBox="0 0 64 64" width="26" height="26" aria-hidden="true">
          <defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#3b82f6"/><stop offset="1" stop-color="#8b5cf6"/>
          </linearGradient></defs>
          <rect width="64" height="64" rx="14" fill="currentColor" opacity="0.08"/>
          <polyline points="8,34 20,34 26,18 34,48 40,28 46,28 50,24 56,34"
            fill="none" stroke="url(#lg)" stroke-width="5"
            stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Tekno<span>Nabız</span><span class="dot">.</span>
      </a>
      <div class="search-box">
        <input type="text" id="searchInput" placeholder="Haber ara..." autocomplete="off">
      </div>
      <button class="theme-toggle" id="themeToggle" title="Tema değiştir" aria-label="Tema değiştir"></button>
    </div>
  </header>
  <nav class="nav">
    <div class="container nav-inner">
      <a class="nav-link ${!activeSlug ? "active" : ""}" href="index.html">🏠 Anasayfa</a>
      ${navLinks}
    </div>
  </nav>`;
}

/* ---- Ortak Altbilgi ---- */
function renderFooter() {
  const half = Math.ceil(CATEGORIES.length / 2);
  const col1 = CATEGORIES.slice(0, half).map(c => `<a href="category.html?cat=${c.slug}">${c.name}</a>`).join("");
  const col2 = CATEGORIES.slice(half).map(c => `<a href="category.html?cat=${c.slug}">${c.name}</a>`).join("");
  return `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-col" style="max-width:260px">
        <h4 class="logo" style="font-size:1.2rem">Tekno<span>Nabız</span></h4>
        <p style="color:var(--text-soft);font-size:.88rem;margin-top:8px">
          Teknoloji dünyasından en güncel haberler, incelemeler ve karşılaştırmalar.
        </p>
      </div>
      <div class="footer-col"><h4>Kategoriler</h4>${col1}</div>
      <div class="footer-col"><h4>Daha Fazla</h4>${col2}</div>
      <div class="footer-col">
        <h4>Kurumsal</h4>
        <a href="hakkimizda.html">Hakkımızda</a>
        <a href="iletisim.html">İletişim</a>
        <a href="#">Gizlilik Politikası</a>
      </div>
      <div class="footer-col">
        <h4>Bizi Takip Edin</h4>
        <a href="#">Twitter / X</a><a href="#">Instagram</a><a href="#">YouTube</a>
      </div>
    </div>
    <div class="container footer-bottom">
      © ${new Date().getFullYear()} TeknoNabız — Tüm hakları saklıdır. Demo amaçlı hazırlanmıştır.
    </div>
  </footer>`;
}

/* ---- Kart bileşeni ---- */
function articleCard(a) {
  const cat = getCategory(a.category);
  return `
  <a class="card" href="article.html?id=${a.id}">
    <div class="card-img"><img src="${a.image}" alt="${a.title}" loading="lazy"></div>
    <div class="card-body">
      <span class="chip" style="background:${cat.color}22;color:${cat.color}">${cat.icon} ${cat.name}</span>
      <h3>${a.title}</h3>
      <p>${a.summary}</p>
      <div class="card-meta">
        <span>${formatDate(a.date)}</span><span>•</span><span>${a.readTime} dk okuma</span>
      </div>
    </div>
  </a>`;
}

/* ---- Sayfa: Anasayfa ---- */
function renderHome() {
  document.getElementById("header").innerHTML = renderHeader(null);
  document.getElementById("footer").innerHTML = renderFooter();

  const sorted = getAllArticlesSorted();
  const featured = sorted.filter(a => a.featured);
  const main = featured[0] || sorted[0];
  const sideArticles = featured.slice(1, 4);
  const catMain = getCategory(main.category);

  // Hero
  document.getElementById("hero").innerHTML = `
    <div class="container hero-grid">
      <a class="hero-main" href="article.html?id=${main.id}">
        <img src="${main.image}" alt="${main.title}">
        <div class="hero-overlay">
          <span class="chip" style="background:${catMain.color}33;color:#fff">${catMain.icon} ${catMain.name}</span>
          <h2>${main.title}</h2>
          <p>${main.summary}</p>
        </div>
      </a>
      <div class="hero-side">
        ${sideArticles.map(a => `
          <a class="mini-card" href="article.html?id=${a.id}">
            <img src="${a.image}" alt="${a.title}">
            <div><span class="chip" style="background:${getCategory(a.category).color}22;color:${getCategory(a.category).color};font-size:.65rem">${getCategory(a.category).name}</span>
            <h3 style="margin-top:6px">${a.title}</h3></div>
          </a>`).join("")}
      </div>
    </div>`;

  // Son haberler + yan sütun
  const popular = getPopularArticles(5);
  const popularHTML = popular.map((a, i) => `
    <a class="popular-item" href="article.html?id=${a.id}">
      <span class="popular-rank">${i + 1}</span>
      <div><h4>${a.title}</h4><div class="views">👁️ ${formatViews(a.views)} okunma</div></div>
    </a>`).join("");

  const catCloud = CATEGORIES.map(c =>
    `<a href="category.html?cat=${c.slug}">${c.icon} ${c.name}</a>`).join("");

  document.getElementById("latest").innerHTML = `
    <div class="container">
      <div class="home-layout">
        <div>
          <div class="section-head"><h2><span class="bar"></span>Son Haberler</h2></div>
          <div class="grid">${sorted.slice(0, 8).map((a, i) =>
            `<div class="reveal" style="animation-delay:${i * 0.05}s">${articleCard(a)}</div>`).join("")}</div>
        </div>
        <aside class="sidebar">
          <div class="widget">
            <h3>🔥 En Çok Okunanlar</h3>
            ${popularHTML}
          </div>
          <div class="widget">
            <h3>🗂️ Kategoriler</h3>
            <div class="cat-cloud">${catCloud}</div>
          </div>
        </aside>
      </div>
    </div>`;

  // Bülten
  document.getElementById("newsletter").innerHTML = `
    <div class="container">
      <div class="newsletter reveal">
        <h3>📨 Teknoloji gündemini kaçırma!</h3>
        <p>Haftalık özetimize abone ol, en önemli haberleri e-postana alalım.</p>
        <form id="newsletterForm">
          <input type="email" id="newsletterEmail" placeholder="E-posta adresin" required>
          <button type="submit">Abone Ol</button>
        </form>
        <div class="ok" id="newsletterOk" style="display:none">✅ Teşekkürler! Aboneliğin alındı.</div>
      </div>
    </div>`;
  initNewsletter();

  afterRender();
}

/* ---- Bülten formu ---- */
function initNewsletter() {
  const form = document.getElementById("newsletterForm");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    form.style.display = "none";
    document.getElementById("newsletterOk").style.display = "block";
  });
}

/* ---- Sayfa: Kategori ---- */
function renderCategory() {
  const slug = getParam("cat");
  const cat = getCategory(slug);
  document.getElementById("header").innerHTML = renderHeader(slug);
  document.getElementById("footer").innerHTML = renderFooter();

  if (!cat) {
    document.getElementById("content").innerHTML =
      `<div class="container empty-state"><h2>Kategori bulunamadı</h2><p><a class="back-link" href="index.html">← Anasayfaya dön</a></p></div>`;
    return;
  }

  document.title = `${cat.name} — TeknoNabız`;
  const list = getArticlesByCategory(slug);
  const body = list.length
    ? `<div class="grid">${list.map((a, i) =>
        `<div class="reveal" style="animation-delay:${i * 0.05}s">${articleCard(a)}</div>`).join("")}</div>`
    : `<div class="empty-state"><p>Bu kategoride henüz haber yok. Yakında eklenecek! 🚀</p></div>`;

  document.getElementById("content").innerHTML = `
    <div class="page-head container">
      <h1>${cat.icon} ${cat.name}</h1>
      <p>${cat.name} kategorisindeki en güncel haberler ve incelemeler. (${list.length} haber)</p>
    </div>
    <div class="section"><div class="container">${body}</div></div>`;

  afterRender();
}

/* ---- Sayfa: Haber Detayı ---- */
function renderArticle() {
  const a = getArticleById(getParam("id"));
  document.getElementById("footer").innerHTML = renderFooter();

  if (!a) {
    document.getElementById("header").innerHTML = renderHeader(null);
    document.getElementById("content").innerHTML =
      `<div class="container empty-state"><h2>Haber bulunamadı</h2><p><a class="back-link" href="index.html">← Anasayfaya dön</a></p></div>`;
    return;
  }

  const cat = getCategory(a.category);
  document.getElementById("header").innerHTML = renderHeader(a.category);
  document.title = `${a.title} — TeknoNabız`;

  const related = getArticlesByCategory(a.category).filter(x => x.id !== a.id).slice(0, 3);

  document.getElementById("content").innerHTML = `
    <article class="article-wrap">
      <a class="back-link" href="category.html?cat=${a.category}">← ${cat.name}</a>
      <span class="chip" style="background:${cat.color}22;color:${cat.color}">${cat.icon} ${cat.name}</span>
      <h1>${a.title}</h1>
      <div class="article-meta">
        <span>✍️ ${a.author}</span>
        <span>📅 ${formatDate(a.date)}</span>
        <span>⏱️ ${a.readTime} dk okuma</span>
      </div>
      <div class="article-hero"><img src="${a.image}" alt="${a.title}"></div>
      <div class="article-body">
        <p style="font-size:1.18rem;color:var(--text);font-weight:500">${a.summary}</p>
        ${a.body.map(p => `<p>${p}</p>`).join("")}
      </div>
      <div class="article-tags">${a.tags.map(t => `<span class="tag">#${t}</span>`).join("")}</div>
      <div class="action-bar">
        <span class="label">Bu haberi:</span>
        <span class="act-btn" id="likeBtn">🤍 Beğen <span id="likeCount"></span></span>
        <a class="act-btn x"  target="_blank" rel="noopener" id="shareX">𝕏 Paylaş</a>
        <a class="act-btn wa" target="_blank" rel="noopener" id="shareWa">💬 WhatsApp</a>
        <span class="act-btn cp" id="copyLink">🔗 Linki Kopyala</span>
      </div>
    </article>
    ${related.length ? `
    <div class="section"><div class="container">
      <div class="section-head"><h2><span class="bar"></span>İlgili Haberler</h2></div>
      <div class="grid">${related.map(articleCard).join("")}</div>
    </div></div>` : ""}
    <div class="comments-wrap">
      <h2 class="comments-title">💬 Yorumlar (<span id="commentCount">0</span>)</h2>
      <form class="comment-form" id="commentForm">
        <input type="text" id="commentName" placeholder="Adın" maxlength="40" required>
        <textarea id="commentText" placeholder="Yorumunu yaz..." rows="3" maxlength="500" required></textarea>
        <button type="submit">Yorum Gönder</button>
      </form>
      <div id="commentList"></div>
    </div>`;

  initArticleActions(a);
  initReadProgress();
  initComments(a);
  afterRender();
}

/* ---- Yorumlar (localStorage) ---- */
function initComments(a) {
  const key = "tn-comments-" + a.id;
  const form = document.getElementById("commentForm");
  const list = document.getElementById("commentList");
  const countEl = document.getElementById("commentCount");

  const load = () => { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } };
  const save = (arr) => localStorage.setItem(key, JSON.stringify(arr));

  const esc = (s) => s.replace(/[&<>"']/g, c =>
    ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));

  function render() {
    const arr = load();
    countEl.textContent = arr.length;
    if (!arr.length) {
      list.innerHTML = `<p class="no-comment">Henüz yorum yok. İlk yorumu sen yaz! ✍️</p>`;
      return;
    }
    list.innerHTML = arr.slice().reverse().map(c => `
      <div class="comment">
        <div class="comment-head">
          <span class="comment-avatar">${esc(c.name.charAt(0).toUpperCase())}</span>
          <strong>${esc(c.name)}</strong>
          <span class="comment-date">${formatDate(c.date)}</span>
        </div>
        <p>${esc(c.text)}</p>
      </div>`).join("");
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("commentName").value.trim();
    const text = document.getElementById("commentText").value.trim();
    if (!name || !text) return;
    const arr = load();
    arr.push({ name, text, date: new Date().toISOString().slice(0, 10) });
    save(arr);
    form.reset();
    render();
  });

  render();
}

/* ---- Beğeni + Paylaşım butonları ---- */
function initArticleActions(a) {
  const url = window.location.href;
  const text = a.title;
  const key = "tn-like-" + a.id;

  // Beğeni (localStorage'da saklanır)
  const likeBtn = document.getElementById("likeBtn");
  const likeCount = document.getElementById("likeCount");
  let base = 40 + (a.id * 7) % 60;            // her habere sabit bir "taban" beğeni
  let liked = localStorage.getItem(key) === "1";
  const paint = () => {
    likeBtn.classList.toggle("liked", liked);
    likeBtn.firstChild.textContent = (liked ? "❤️ Beğenildi " : "🤍 Beğen ");
    likeCount.textContent = "(" + (base + (liked ? 1 : 0)) + ")";
  };
  paint();
  likeBtn.addEventListener("click", () => {
    liked = !liked;
    localStorage.setItem(key, liked ? "1" : "0");
    paint();
  });

  // Paylaşım linkleri
  document.getElementById("shareX").href =
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
  document.getElementById("shareWa").href =
    `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`;

  // Linki kopyala
  const copyBtn = document.getElementById("copyLink");
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(url);
      const old = copyBtn.textContent;
      copyBtn.textContent = "✅ Kopyalandı!";
      setTimeout(() => copyBtn.textContent = old, 1500);
    } catch { /* pano erişimi yoksa sessiz geç */ }
  });
}

/* ---- Okuma ilerleme çubuğu ---- */
function initReadProgress() {
  let bar = document.querySelector(".read-progress");
  if (!bar) { bar = document.createElement("div"); bar.className = "read-progress"; document.body.appendChild(bar); }
  const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ---- Sayfa: Hakkımızda ---- */
function renderAbout() {
  document.getElementById("header").innerHTML = renderHeader(null);
  document.getElementById("footer").innerHTML = renderFooter();
  document.title = "Hakkımızda — TeknoNabız";
  document.getElementById("content").innerHTML = `
    <div class="page-head container"><h1>ℹ️ Hakkımızda</h1>
      <p>TeknoNabız'ın hikayesi ve neden buradayız.</p></div>
    <div class="page-content">
      <p><strong>TeknoNabız</strong>, teknolojiyi herkes için anlaşılır kılmak amacıyla kurulmuş bağımsız bir
      teknoloji haber ve inceleme platformudur. Cep telefonlarından otomobil teknolojilerine, yapay zekadan
      oyunlara kadar geniş bir yelpazede; abartısız, dürüst ve sade içerikler üretiyoruz.</p>
      <p>Amacımız bir ürünü satın almadan önce gerçekten ihtiyacınız olan bilgiyi vermek. Reklam diliyle değil,
      gerçek kullanım deneyimiyle konuşuruz.</p>

      <h2>Değerlerimiz</h2>
      <div class="value-grid">
        <div class="value-card"><div class="ic">🎯</div><h3>Tarafsızlık</h3><p>Hiçbir markadan etkilenmeden, bağımsız değerlendiririz.</p></div>
        <div class="value-card"><div class="ic">🔍</div><h3>Şeffaflık</h3><p>Test yöntemlerimizi ve kaynaklarımızı açıkça paylaşırız.</p></div>
        <div class="value-card"><div class="ic">🧭</div><h3>Sadelik</h3><p>Teknik jargonu herkesin anlayacağı bir dile çeviririz.</p></div>
        <div class="value-card"><div class="ic">🔒</div><h3>Gizlilik</h3><p>Okuyucularımızın gizliliğine saygı duyarız.</p></div>
      </div>

      <h2>Neler Yazıyoruz?</h2>
      <ul>
        <li>📱 Telefon, tablet ve bilgisayar incelemeleri</li>
        <li>⌚ Giyilebilir teknoloji ve sağlık cihazları</li>
        <li>🚗 Otomobil teknolojileri ve elektrikli araçlar</li>
        <li>🌐 Sosyal medya, uygulamalar ve oyun dünyası</li>
        <li>🤖 Yapay zekadaki son gelişmeler</li>
      </ul>
      <p style="color:var(--text-dim);font-size:.85rem">Not: Bu site demo amaçlı hazırlanmıştır; içerikler örnektir.</p>
    </div>`;
  afterRender();
}

/* ---- Sayfa: İletişim ---- */
function renderContact() {
  document.getElementById("header").innerHTML = renderHeader(null);
  document.getElementById("footer").innerHTML = renderFooter();
  document.title = "İletişim — TeknoNabız";
  document.getElementById("content").innerHTML = `
    <div class="page-head container"><h1>✉️ İletişim</h1>
      <p>Soruların, önerilerin veya iş birliği teklifin mi var? Bize yaz!</p></div>
    <div class="page-content">
      <div class="value-grid">
        <div class="value-card"><div class="ic">📧</div><h3>E-posta</h3><p>merhaba@teknonabiz.example</p></div>
        <div class="value-card"><div class="ic">📰</div><h3>Editöre Ulaş</h3><p>haber@teknonabiz.example</p></div>
        <div class="value-card"><div class="ic">📣</div><h3>Reklam & İş Birliği</h3><p>reklam@teknonabiz.example</p></div>
      </div>
      <h2>Mesaj Gönder</h2>
      <form class="comment-form" id="contactForm">
        <input type="text" id="cName" placeholder="Adın Soyadın" maxlength="60" required>
        <input type="email" id="cEmail" placeholder="E-posta adresin" required>
        <textarea id="cMsg" placeholder="Mesajın..." rows="5" maxlength="1000" required></textarea>
        <button type="submit">Gönder</button>
      </form>
      <div class="contact-ok" id="contactOk" style="display:none">✅ Mesajın alındı! En kısa sürede dönüş yapacağız.</div>
    </div>`;
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    form.style.display = "none";
    document.getElementById("contactOk").style.display = "block";
  });
  afterRender();
}

/* ---- Arama ---- */
function initSearch() {
  const input = document.getElementById("searchInput");
  if (!input) return;
  input.addEventListener("keydown", e => {
    if (e.key === "Enter" && input.value.trim()) {
      window.location.href = `search.html?q=${encodeURIComponent(input.value.trim())}`;
    }
  });
}

/* ---- Sayfa: Arama Sonuçları ---- */
function renderSearch() {
  document.getElementById("header").innerHTML = renderHeader(null);
  document.getElementById("footer").innerHTML = renderFooter();
  const q = (getParam("q") || "").toLowerCase();

  const results = getAllArticlesSorted().filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.summary.toLowerCase().includes(q) ||
    a.tags.some(t => t.toLowerCase().includes(q)) ||
    getCategory(a.category).name.toLowerCase().includes(q)
  );

  document.title = `"${q}" için arama — TeknoNabız`;
  const body = results.length
    ? `<div class="grid">${results.map(articleCard).join("")}</div>`
    : `<div class="empty-state"><p>"${q}" için sonuç bulunamadı.</p></div>`;

  document.getElementById("content").innerHTML = `
    <div class="page-head container">
      <h1>🔍 Arama Sonuçları</h1>
      <p>"<strong>${q}</strong>" için ${results.length} sonuç bulundu.</p>
    </div>
    <div class="section"><div class="container">${body}</div></div>`;

  afterRender();
  const input = document.getElementById("searchInput");
  if (input) input.value = q;
}
