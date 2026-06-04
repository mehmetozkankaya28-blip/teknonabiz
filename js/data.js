/* =========================================================
   TeknoNabız - İçerik Verisi
   Yeni haber eklemek için ARTICLES dizisine yeni bir nesne ekle.
   Her haberin benzersiz bir "id" değeri olmalı.
   ========================================================= */

const CATEGORIES = [
  { slug: "telefon",      name: "Cep Telefonları",       icon: "📱", color: "#3b82f6" },
  { slug: "tablet",       name: "Tabletler",             icon: "📲", color: "#8b5cf6" },
  { slug: "bilgisayar",   name: "Bilgisayarlar",         icon: "💻", color: "#06b6d4" },
  { slug: "giyilebilir",  name: "Giyilebilir Teknoloji", icon: "⌚", color: "#10b981" },
  { slug: "araba",        name: "Arabalar",              icon: "🚗", color: "#ef4444" },
  { slug: "sosyal-medya", name: "Sosyal Medya",          icon: "🌐", color: "#ec4899" },
  { slug: "uygulama",     name: "Uygulama İncelemeleri", icon: "📦", color: "#f59e0b" },
  { slug: "oyun",         name: "Oyun",                  icon: "🎮", color: "#a855f7" },
  { slug: "yapay-zeka",   name: "Yapay Zeka",            icon: "🤖", color: "#14b8a6" }
];

const ARTICLES = [
  {
    id: 1,
    category: "telefon",
    title: "2026'nın Amiral Gemisi Telefonları: Hangisi Paranızın Karşılığını Veriyor?",
    summary: "Yılın en güçlü telefonlarını kamera, pil ömrü ve performans açısından karşılaştırdık. Sonuçlar şaşırtıcı.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
    author: "Editör",
    date: "2026-06-02",
    readTime: 6,
    views: 4820,
    featured: true,
    tags: ["amiral gemisi", "karşılaştırma", "kamera"],
    body: [
      "Bu yıl amiral gemisi telefon pazarı her zamankinden daha rekabetçi. Üreticiler artık yalnızca ham güce değil; pil verimliliğine, yapay zeka destekli kamera işlemeye ve uzun yazılım desteğine odaklanıyor.",
      "Yaptığımız testlerde öne çıkan en büyük fark kamera tarafında ortaya çıktı. Gece çekimlerinde yapay zeka destekli görüntü işleme, donanımdan çok daha belirleyici hale geldi.",
      "Pil ömründe ise yeni nesil silikon-karbon bataryalar oyunu değiştiriyor. Aynı fiziksel boyutta %15'e varan kapasite artışı, günlük kullanımda gözle görülür bir rahatlık sağlıyor.",
      "Sonuç olarak: en pahalı model her zaman en iyi seçim değil. Orta-üst segment, fiyat/performans dengesinde bu yıl açık ara kazanan taraf."
    ]
  },
  {
    id: 2,
    category: "telefon",
    title: "Katlanabilir Telefonlar Nihayet Olgunlaştı mı?",
    summary: "Menteşe dayanıklılığı ve ekran kırışıklığı sorunları geçmişte mi kaldı? Uzun süreli kullanım izlenimlerimiz.",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=900&q=80",
    author: "Editör",
    date: "2026-05-28",
    readTime: 5,
    views: 3120,
    featured: false,
    tags: ["katlanabilir", "inceleme"],
    body: [
      "Katlanabilir telefonlar ilk çıktıklarında daha çok bir gösteriş ürünüydü. Bugün ise dayanıklılık ve fiyat açısından çok daha makul bir noktadalar.",
      "Ekran ortasındaki kırışıklık artık neredeyse hissedilmiyor. Menteşe mekanizmaları toz ve suya karşı belirgin biçimde dayanıklı hale geldi.",
      "Yine de katlanabilir cihazlar hâlâ standart telefonlardan daha ağır ve daha pahalı. Karar vermeden önce büyük ekrana gerçekten ihtiyacınız olup olmadığını düşünün."
    ]
  },
  {
    id: 11,
    category: "telefon",
    title: "Orta Segment Telefonlarda Şarj Yarışı: 5 Dakikada Günlük Enerji",
    summary: "Artık hızlı şarj sadece pahalı modellerin ayrıcalığı değil. Uygun fiyatlı telefonlarda şarj hızlarını test ettik.",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=900&q=80",
    author: "Editör",
    date: "2026-05-20",
    readTime: 4,
    views: 1980,
    featured: false,
    tags: ["hızlı şarj", "orta segment"],
    body: [
      "Hızlı şarj teknolojisi artık orta segment telefonlara da indi. 100W üzeri şarj desteği, bir zamanlar yalnızca amiral gemilerine özeldi.",
      "Testlerimizde bazı modeller yarım saatin altında tam dolarken, kısa bir kahve molası bile günü kurtarmaya yetiyor.",
      "Ancak dikkat: çok yüksek hızlı şarj uzun vadede pil sağlığını etkileyebiliyor. Üreticilerin sunduğu 'pil koruma' modlarını kullanmanızı öneririz."
    ]
  },
  {
    id: 3,
    category: "tablet",
    title: "Tabletle Dizüstü Yerine Çalışmak: Gerçekçi Bir Senaryo mu?",
    summary: "Klavye, kalem ve masaüstü modu eklentileriyle bir tablet, dizüstünüzün yerini ne kadar tutabilir?",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=900&q=80",
    author: "Editör",
    date: "2026-05-30",
    readTime: 7,
    views: 2640,
    featured: true,
    tags: ["üretkenlik", "tablet"],
    body: [
      "Modern tabletler artık dizüstü bilgisayarlara meydan okuyacak işlemci gücüne sahip. Ancak donanım kadar yazılım deneyimi de önemli.",
      "Masaüstü tarzı pencere yönetimi ve harici monitör desteği geldikten sonra, tabletler ofis işleri için ciddi bir alternatif haline geldi.",
      "Yine de yazılım geliştirme veya ağır video düzenleme gibi işlerde tam teşekküllü bir işletim sistemi hâlâ daha esnek. Karar tamamen iş akışınıza bağlı."
    ]
  },
  {
    id: 12,
    category: "tablet",
    title: "Çocuklar İçin Tablet Almadan Önce Bilmeniz Gereken 6 Şey",
    summary: "Ebeveyn kontrolleri, dayanıklılık ve ekran süresi yönetimi açısından doğru tableti seçme rehberi.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80",
    author: "Editör",
    date: "2026-05-18",
    readTime: 5,
    views: 1450,
    featured: false,
    tags: ["aile", "ebeveyn kontrolü"],
    body: [
      "Çocuğunuz için tablet alırken en pahalı model değil, en güvenli ve dayanıklı model önemli.",
      "Sağlam bir kılıf, güçlü ebeveyn kontrolleri ve ekran süresi sınırlama özellikleri olmazsa olmaz.",
      "Ayrıca cihazın uzun yazılım desteği alması, güvenlik güncellemeleri açısından kritik. Ucuz ama desteksiz cihazlardan kaçının."
    ]
  },
  {
    id: 4,
    category: "bilgisayar",
    title: "ARM mı x86 mı? Dizüstü İşlemcilerinde Yeni Dönem",
    summary: "Güç verimliliği ile ham performans arasındaki savaş kızışıyor. Hangi mimari sizin için doğru?",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&q=80",
    author: "Editör",
    date: "2026-06-01",
    readTime: 8,
    views: 5310,
    featured: true,
    tags: ["işlemci", "donanım", "ARM"],
    body: [
      "Dizüstü bilgisayar pazarında ARM tabanlı işlemciler, sundukları olağanüstü pil ömrüyle artık ana akım haline geldi.",
      "x86 tarafı ise ham performans ve geniş yazılım uyumluluğuyla hâlâ güçlü. Özellikle eski uygulamalar ve oyunlarda avantajını koruyor.",
      "Çoğu kullanıcı için ARM tabanlı bir dizüstü, sessiz çalışması ve uzun pil ömrüyle daha keyifli bir deneyim sunuyor. Profesyonel iş yükleri için ise durum değişebilir."
    ]
  },
  {
    id: 13,
    category: "bilgisayar",
    title: "SSD Fiyatları Düştü: Bilgisayarınızı Hızlandırmanın En Ucuz Yolu",
    summary: "Eski bilgisayarınıza can vermek için en etkili yükseltme hangisi? Rakamlarla anlattık.",
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=900&q=80",
    author: "Editör",
    date: "2026-05-22",
    readTime: 5,
    views: 2870,
    featured: false,
    tags: ["SSD", "yükseltme", "performans"],
    body: [
      "Yavaşlayan bir bilgisayarı canlandırmanın en uygun maliyetli yolu hâlâ SSD'ye geçmek.",
      "Fiyatların son dönemde düşmesiyle birlikte, yüksek kapasiteli NVMe diskler artık çok daha erişilebilir.",
      "Açılış süreleri, program yükleme ve genel akıcılıkta SSD; işlemci yükseltmesinden bile daha hissedilir bir fark yaratıyor."
    ]
  },
  {
    id: 5,
    category: "giyilebilir",
    title: "Akıllı Saatler Artık Doktorunuzun Yerini Alıyor mu?",
    summary: "Kan basıncından uyku apnesine kadar yeni sağlık sensörleri ne kadar güvenilir?",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80",
    author: "Editör",
    date: "2026-05-27",
    readTime: 5,
    views: 3640,
    featured: false,
    tags: ["akıllı saat", "sağlık"],
    body: [
      "Yeni nesil akıllı saatler, bir zamanlar yalnızca klinik cihazlarda bulunan sağlık ölçümlerini bileğinize taşıyor.",
      "Uyku apnesi tespiti ve düzensiz kalp ritmi uyarıları gibi özellikler, birçok kişinin erken teşhis için doktora başvurmasını sağladı.",
      "Ancak bu cihazlar tıbbi teşhis aracı değil. Verileri bir ipucu olarak görmek doğru; kesin tanı için mutlaka bir hekime danışılmalı."
    ]
  },
  {
    id: 14,
    category: "giyilebilir",
    title: "Akıllı Yüzükler: Bileğinizi Boşaltacak Yeni Trend",
    summary: "Akıllı saatlere göre daha küçük ve diskret. Akıllı yüzükler gerçekten işe yarıyor mu?",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=80",
    author: "Editör",
    date: "2026-05-15",
    readTime: 4,
    views: 2210,
    featured: false,
    tags: ["akıllı yüzük", "uyku takibi"],
    body: [
      "Akıllı yüzükler, sağlık takibini çok daha küçük ve göze batmayan bir forma taşıyor.",
      "Özellikle uyku ve toparlanma takibinde, parmaktan alınan ölçümler şaşırtıcı derecede tutarlı sonuçlar veriyor.",
      "Ekranı olmadığı için tüm verileri telefon uygulamasından takip ediyorsunuz. Pil ömrü ise akıllı saatlerin çok önünde."
    ]
  },
  {
    id: 6,
    category: "araba",
    title: "Elektrikli Araçlarda Menzil Kaygısı Bitiyor mu?",
    summary: "Yeni katı hal bataryalar ve genişleyen şarj ağı, elektrikli araç sahipliğini nasıl değiştiriyor?",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&q=80",
    author: "Editör",
    date: "2026-05-31",
    readTime: 6,
    views: 4150,
    featured: true,
    tags: ["elektrikli araç", "batarya"],
    body: [
      "Elektrikli araçların önündeki en büyük engel olan menzil kaygısı, hızla tarihe karışıyor.",
      "Katı hal batarya teknolojisi hem daha yüksek menzil hem de çok daha hızlı şarj süreleri vaat ediyor. 10 dakikada %80 şarj artık bir hayal değil.",
      "Şarj istasyonu ağının yaygınlaşmasıyla birlikte, uzun yol kaygısı çoğu sürücü için anlamını yitiriyor."
    ]
  },
  {
    id: 15,
    category: "araba",
    title: "Otonom Sürüş Hangi Seviyede? Reklamlar ile Gerçeğin Farkı",
    summary: "'Tam otonom' iddiaları ne kadar doğru? Sürüş destek sistemlerinin seviyelerini sade bir dille anlattık.",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900&q=80",
    author: "Editör",
    date: "2026-05-19",
    readTime: 7,
    views: 3380,
    featured: false,
    tags: ["otonom sürüş", "güvenlik"],
    body: [
      "Otonom sürüş 5 seviyeye ayrılıyor ve bugün satılan araçların çoğu hâlâ Seviye 2'de; yani sürücünün dikkatini gerektiriyor.",
      "Pazarlama dilinde 'tam otonom' gibi ifadeler kullanılsa da, yasal olarak direksiyonun başında uyanık olmanız gerekiyor.",
      "Teknoloji hızla ilerliyor; ancak güvenlik açısından sistemin sınırlarını bilmek hayati önem taşıyor."
    ]
  },
  {
    id: 7,
    category: "sosyal-medya",
    title: "Algoritmalar Ne İzlediğimizi Nasıl Belirliyor?",
    summary: "Sosyal medya akışınızın arkasındaki yapay zekayı ve dikkatinizi yöneten mekanizmaları inceledik.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&q=80",
    author: "Editör",
    date: "2026-05-25",
    readTime: 7,
    views: 2960,
    featured: false,
    tags: ["algoritma", "sosyal medya"],
    body: [
      "Sosyal medya platformları, ne göreceğinizi belirleyen karmaşık öneri algoritmaları kullanıyor.",
      "Bu sistemler, etkileşim süresini en üst düzeye çıkarmak için tasarlandı. Bu da bazen sansasyonel içeriğin öne çıkmasına neden oluyor.",
      "Akışınızı bilinçli yönetmek mümkün: takip ettiğiniz hesapları gözden geçirmek ve 'ilgilenmiyorum' geri bildirimini kullanmak fark yaratıyor."
    ]
  },
  {
    id: 16,
    category: "sosyal-medya",
    title: "Dijital Detoks: Sosyal Medyayı Bırakmadan Dengeyi Bulmak",
    summary: "Hesaplarını silmeden ekran süreni azaltmanın işe yarayan yolları ve uygulama içi araçlar.",
    image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=900&q=80",
    author: "Editör",
    date: "2026-05-12",
    readTime: 5,
    views: 1760,
    featured: false,
    tags: ["dijital detoks", "ekran süresi"],
    body: [
      "Dijital detoks, sosyal medyayı tamamen bırakmak zorunda olduğunuz anlamına gelmiyor.",
      "Bildirimleri kısmak, gri tonlama modunu denemek ve uygulama süre sınırları koymak ciddi fark yaratıyor.",
      "Amaç teknolojiyi düşmanlaştırmak değil; onu bilinçli kullanarak hayatınızın kontrolünü elinizde tutmak."
    ]
  },
  {
    id: 8,
    category: "uygulama",
    title: "Haftanın Uygulaması: Odaklanmanızı Geri Kazandıran 5 Araç",
    summary: "Dikkat dağınıklığıyla mücadele eden, gizliliğe saygılı ve gerçekten işe yarayan uygulamaları derledik.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80",
    author: "Editör",
    date: "2026-06-03",
    readTime: 4,
    views: 2080,
    featured: false,
    tags: ["uygulama", "üretkenlik"],
    body: [
      "Telefon ekranında geçirdiğimiz süre arttıkça, odaklanmayı kolaylaştıran uygulamalara olan ilgi de büyüyor.",
      "Bu hafta seçtiğimiz uygulamalar, abartılı vaatler yerine sade ve etkili çözümler sunmasıyla öne çıkıyor.",
      "En önemlisi: hepsi gizliliğe saygılı ve gereksiz veri toplamıyor. İndirmeden önce izin taleplerini kontrol etmeyi unutmayın."
    ]
  },
  {
    id: 17,
    category: "uygulama",
    title: "Ücretsiz Video Düzenleme Uygulamaları: Telefonla Profesyonel İşler",
    summary: "Filigran bırakmayan, reklam bombardımanı yapmayan en iyi mobil video düzenleyicileri test ettik.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&q=80",
    author: "Editör",
    date: "2026-05-10",
    readTime: 6,
    views: 2530,
    featured: false,
    tags: ["video düzenleme", "ücretsiz"],
    body: [
      "İçerik üreticiliği yükselişteyken, telefonla kaliteli video düzenleme her zamankinden kolay.",
      "Test ettiğimiz uygulamalar arasında filigran bırakmayan ve katman desteği sunan birkaç güçlü seçenek öne çıktı.",
      "Ücretsiz sürümlerin sınırlarını bilmek önemli; ancak çoğu kullanıcının ihtiyacı için fazlasıyla yeterliler."
    ]
  },
  {
    id: 9,
    category: "oyun",
    title: "Bulut Oyun Servisleri Konsolun Sonunu mu Getiriyor?",
    summary: "Pahalı donanım olmadan yüksek kaliteli oyun deneyimi mümkün mü? Gecikme testleri ve gerçek kullanım.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&q=80",
    author: "Editör",
    date: "2026-05-29",
    readTime: 6,
    views: 4470,
    featured: true,
    tags: ["bulut oyun", "konsol"],
    body: [
      "Bulut oyun servisleri, pahalı bir konsol veya bilgisayar olmadan en yeni oyunları oynama vaadiyle giderek popülerleşiyor.",
      "Yaptığımız gecikme testlerinde, iyi bir internet bağlantısıyla deneyim oldukça akıcıydı. Ancak rekabetçi oyunlarda her milisaniye önemli.",
      "Konsollar henüz tahtını bırakmıyor; ama günlük oyuncular için bulut, ciddi ve uygun maliyetli bir alternatif sunuyor."
    ]
  },
  {
    id: 18,
    category: "oyun",
    title: "Bağımsız Oyunlar Neden Büyük Yapımları Geride Bırakıyor?",
    summary: "Küçük ekiplerin yaratıcılığı, dev bütçeli oyunlara karşı nasıl kazanıyor? Bu yılın indie öne çıkanları.",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=900&q=80",
    author: "Editör",
    date: "2026-05-23",
    readTime: 5,
    views: 3050,
    featured: false,
    tags: ["indie", "bağımsız oyun"],
    body: [
      "Bağımsız (indie) oyunlar, taze fikirleri ve risk alabilen tasarımlarıyla son yıllarda parlıyor.",
      "Büyük bütçeli yapımlar görsellikte önde olsa da, oynanış yeniliği ve hikaye anlatımında çoğu zaman indie oyunlar kazanıyor.",
      "Üstelik çok daha uygun fiyatlı olmaları, oyuncuların yeni türleri keşfetmesini kolaylaştırıyor."
    ]
  },
  {
    id: 10,
    category: "yapay-zeka",
    title: "Cihaz Üstünde Çalışan Yapay Zeka: Verileriniz Telefonunuzdan Çıkmıyor",
    summary: "Bulut yerine doğrudan cihazda çalışan yapay zeka modelleri, gizlilik ve hız açısından neden önemli?",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
    author: "Editör",
    date: "2026-06-04",
    readTime: 5,
    views: 5680,
    featured: true,
    tags: ["yapay zeka", "gizlilik"],
    body: [
      "Yapay zeka özelliklerinin giderek daha fazlası, buluta veri göndermeden doğrudan cihazınızda çalışıyor.",
      "Bunun en büyük avantajı gizlilik: fotoğraflarınız ve mesajlarınız telefonunuzdan çıkmadan işleniyor.",
      "Ayrıca internet bağlantısı olmadan da çalışabilmesi ve anında yanıt vermesi, kullanıcı deneyimini belirgin biçimde iyileştiriyor."
    ]
  },
  {
    id: 19,
    category: "yapay-zeka",
    title: "Yapay Zeka Görselleri: Telif Hakkı ve Etik Tartışması Büyüyor",
    summary: "Üretken yapay zeka sanatı kime ait? Sanatçılar, platformlar ve kullanıcılar ne diyor?",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80",
    author: "Editör",
    date: "2026-05-26",
    readTime: 7,
    views: 3890,
    featured: false,
    tags: ["üretken yapay zeka", "etik", "telif"],
    body: [
      "Yapay zeka ile üretilen görseller hızla yaygınlaşırken, telif hakkı soruları da büyüyor.",
      "Modellerin hangi verilerle eğitildiği ve sanatçıların eserlerinin izinsiz kullanılıp kullanılmadığı tartışmanın merkezinde.",
      "Düzenleyiciler yeni kurallar üzerinde çalışıyor; bu alanda hem yaratıcılar hem de kullanıcılar için belirsizlik sürüyor."
    ]
  }
];

/* Yardımcı fonksiyonlar */
function getCategory(slug) {
  return CATEGORIES.find(c => c.slug === slug);
}
function getArticleById(id) {
  return ARTICLES.find(a => a.id === Number(id));
}
function getArticlesByCategory(slug) {
  return ARTICLES.filter(a => a.category === slug)
                 .sort((a, b) => new Date(b.date) - new Date(a.date));
}
function getAllArticlesSorted() {
  return [...ARTICLES].sort((a, b) => new Date(b.date) - new Date(a.date));
}
function getPopularArticles(limit = 5) {
  return [...ARTICLES].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, limit);
}
