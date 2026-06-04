# TeknoNabız 📡

Teknoloji haber ve inceleme sitesi. Kurulum/derleme gerektirmez — `index.html` dosyasına çift tıklayarak tarayıcıda açabilirsin.

## Dosya Yapısı

```
Teknoloji sitesi/
├── index.html        → Anasayfa
├── category.html     → Kategori sayfası (?cat=telefon gibi)
├── article.html      → Haber detay sayfası (?id=1 gibi)
├── search.html       → Arama sonuçları
├── css/style.css     → Tüm tasarım
└── js/
    ├── data.js       → TÜM içerik burada (kategoriler + haberler)
    └── main.js       → Sayfaları çizen kod
```

## Yeni Haber Nasıl Eklenir?

`js/data.js` dosyasını aç, `ARTICLES` dizisine yeni bir nesne ekle:

```js
{
  id: 11,                          // benzersiz olmalı (bir önceki + 1)
  category: "telefon",             // data.js'deki kategori "slug"larından biri
  title: "Haber Başlığı",
  summary: "Kısa özet (kart ve detayda görünür).",
  image: "https://...resim-linki.jpg",
  author: "Editör",
  date: "2026-06-04",              // YIL-AY-GÜN
  readTime: 5,                     // tahmini okuma süresi (dakika)
  featured: false,                 // true yaparsan anasayfa manşetine aday olur
  tags: ["etiket1", "etiket2"],
  body: [
    "Birinci paragraf.",
    "İkinci paragraf.",
    "Üçüncü paragraf."
  ]
}
```

Kaydet, sayfayı yenile — haber otomatik olarak anasayfada, kategorisinde ve aramada görünür.

## Yeni Kategori Eklemek

`js/data.js` içindeki `CATEGORIES` dizisine ekle:

```js
{ slug: "kulaklik", name: "Kulaklıklar", icon: "🎧", color: "#22c55e" }
```

## Kategoriler
📱 Cep Telefonları · 📲 Tabletler · 💻 Bilgisayarlar · ⌚ Giyilebilir Teknoloji ·
🚗 Arabalar · 🌐 Sosyal Medya · 📦 Uygulama İncelemeleri · 🎮 Oyun · 🤖 Yapay Zeka
