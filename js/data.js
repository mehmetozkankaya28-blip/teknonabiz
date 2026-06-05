/* =========================================================
   Teknomecra - İçerik Verisi
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
  },
  {
    id: 20,
    category: "telefon",
    title: "Haziran Android Güncellemesi Geldi: Dolandırıcı Arama Uyarısı ve Dijital Gardırop",
    summary: "Google'ın Haziran Android paketi; sahte arama tespiti, Google Photos'ta dijital gardırop ve Android–iPhone arası kolay dosya paylaşımı getiriyor.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
    author: "Editör",
    date: "2026-06-03",
    readTime: 5,
    views: 3270,
    featured: true,
    tags: ["android", "güncelleme", "güvenlik"],
    body: [
      "Google, her ay yayınladığı 'Android Drop' güncellemelerinin Haziran sürümünü kullanıma sundu. Bu ay güvenlik, kişiselleştirme ve üretkenlik tarafında dikkat çekici yenilikler var.",
      "En önemli yenilik, Telefon uygulamasına gelen dolandırıcı arama tespiti. Sistem şüpheli aramaları otomatik olarak işaretleyerek kullanıcıları uyarıyor.",
      "Google Photos ise 'dijital gardırop' özelliği kazandı: fotoğraflarınızdaki kıyafetleri otomatik kataloglayıp sanal olarak kombinler oluşturmanıza imkân tanıyor. Ayrıca Android telefonlar ile iPhone'lar arasında dosya paylaşımı belirgin biçimde kolaylaştı.",
      "Circle to Search özelliği de genişledi; artık Android 14 ve üzeri destekleyen tüm cihazlarda çoklu nesne tanıma ile kullanılabiliyor."
    ]
  },
  {
    id: 21,
    category: "telefon",
    title: "Motorola Edge 70 Pro+ Tanıtıldı: 50x Yapay Zeka Süper Zoom",
    summary: "Periskop lens, MediaTek Dimensity 8500 Extreme ve 6.8 inç AMOLED ekranla gelen yeni amiral gemisi adayını inceledik.",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=900&q=80",
    author: "Editör",
    date: "2026-06-04",
    readTime: 4,
    views: 2640,
    featured: true,
    tags: ["motorola", "kamera", "lansman"],
    body: [
      "Motorola, 4 Haziran'da tanıttığı Edge 70 Pro+ ile üst segmentte iddiasını sürdürüyor. Cihazın en çok konuşulan özelliği kamera tarafında.",
      "50 MP periskop lens 3.5x optik yakınlaştırma sunarken, yapay zeka destekli 'süper zoom' 50x'e kadar çıkıyor. Uzak nesnelerde detayın korunması, yazılım işlemenin gücünü gösteriyor.",
      "6.8 inç AMOLED ekran ve MediaTek Dimensity 8500 Extreme yonga seti, akıcı bir günlük deneyim vaat ediyor.",
      "İlk izlenimler olumlu; ancak yapay zeka zoom'un gerçek hayattaki performansını uzun süreli testlerde değerlendireceğiz."
    ]
  },
  {
    id: 22,
    category: "yapay-zeka",
    title: "Yapay Zeka Yarışı Kızıştı: Yeni Modeller Performans Rekorları Kırıyor",
    summary: "GPT-5.5 Instant, Gemini 3.5 Flash ve Claude Opus 4.8 ile birlikte modeller hem daha hızlı hem daha yetenekli hale geliyor.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
    author: "Editör",
    date: "2026-06-04",
    readTime: 6,
    views: 4920,
    featured: true,
    tags: ["yapay zeka", "model", "karşılaştırma"],
    body: [
      "Yapay zeka modelleri arasındaki rekabet 2026'da yeni bir seviyeye ulaştı. OpenAI'ın GPT-5.5 Instant, Google'ın Gemini 3.5 Flash ve Anthropic'in Claude Opus 4.8 modelleri yeni performans ölçütleri belirliyor.",
      "Bu yılın öne çıkan eğilimi yalnızca 'daha akıllı' değil, aynı zamanda 'daha hızlı' modeller. Anlık yanıt veren hafif sürümler, günlük kullanımda büyük fark yaratıyor.",
      "Modeller artık metnin ötesine geçiyor; görsel, ses ve hatta video girdilerini birlikte işleyebiliyor. Bu çok kipli (multimodal) yetenekler, kullanım alanlarını hızla genişletiyor.",
      "Kullanıcılar için sonuç olumlu: artan rekabet, daha düşük maliyet ve daha geniş erişim anlamına geliyor."
    ]
  },
  {
    id: 23,
    category: "yapay-zeka",
    title: "Videodan Görsel Üreten Yapay Zeka: Google Imagen 3 Yaygınlaştı",
    summary: "Imagen 3 Nano ve Pro modelleri, video dosyalarını komut olarak kullanıp bağlama duyarlı görseller üretebiliyor.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80",
    author: "Editör",
    date: "2026-06-02",
    readTime: 5,
    views: 3110,
    featured: false,
    tags: ["üretken yapay zeka", "görsel", "google"],
    body: [
      "Google'ın Imagen 3 Nano ve Pro modelleri Haziran 2026'da geniş kullanıma açıldı. En dikkat çekici özelliği, görsel üretmek için video dosyalarını girdi olarak kullanabilmesi.",
      "Bu sayede bir videonun içeriğine duyarlı küçük resimler (thumbnail) ve bilgi grafikleri (infografik) otomatik olarak oluşturulabiliyor.",
      "İçerik üreticileri için bu, üretim sürecini ciddi biçimde hızlandıran bir araç. Bir videodan tutarlı görseller türetmek artık dakikalar sürüyor.",
      "Yine de telif ve özgünlük tartışmaları sürüyor; üretilen içeriğin kaynağının şeffaf olması giderek daha önemli hale geliyor."
    ]
  },
  {
    id: 24,
    category: "oyun",
    title: "El Konsolu Çağı: Legion Go 2, MSI ve Acer Sahneye Çıkıyor",
    summary: "Lenovo Legion Go 2, yeni MSI el konsolu ve Acer Predator Atlas 8 ile taşınabilir oyun pazarı her zamankinden hareketli.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&q=80",
    author: "Editör",
    date: "2026-06-01",
    readTime: 6,
    views: 3580,
    featured: true,
    tags: ["el konsolu", "oyun", "donanım"],
    body: [
      "Taşınabilir oyun konsolu pazarı 2026'da rekabetin en yoğun olduğu alanlardan biri. Bu ay birkaç önemli cihaz aynı anda sahneye çıkıyor.",
      "Lenovo, SteamOS tabanlı ikinci el konsolu Legion Go 2'yi 8.8 inç ekran ve Ryzen Z2 Extreme işlemciyle Haziran'da piyasaya sürüyor. MSI'ın yeni el konsolu da bu ay tanıtılıyor.",
      "Acer ise Predator Atlas 8 ile pazara giriyor; Intel'in yeni özel taşınabilir oyun platformuna dayanan ilk cihazlardan biri olması dikkat çekiyor.",
      "Bu cihazların fiyatları hatırı sayılır seviyede; yine de PC oyunlarını cebinizde taşıma fikri, oyuncular için giderek daha cazip hale geliyor."
    ]
  },
  {
    id: 25,
    category: "araba",
    title: "Rivian R2 İlk Teslimatlarına Başlıyor: 530 km Menzil, 3.6 Saniyede 100 km/s",
    summary: "Daha uygun fiyatlı elektrikli SUV R2'nin ilk müşteri teslimatları başlıyor. Performans ve menzil rakamları iddialı.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&q=80",
    author: "Editör",
    date: "2026-06-04",
    readTime: 5,
    views: 2870,
    featured: false,
    tags: ["elektrikli araç", "rivian", "suv"],
    body: [
      "Rivian, merakla beklenen daha uygun fiyatlı elektrikli SUV'u R2'nin ilk müşteri teslimatları için tarihi belirledi. Şirket için kritik bir dönüm noktası.",
      "R2, tek şarjla yaklaşık 530 km'ye varan menzil sunarken, 0'dan 100 km/s hıza 3.6 saniyede ulaşabiliyor. Bu, segmentinde güçlü bir performans.",
      "Markanın daha erişilebilir bir fiyatla daha geniş bir kitleye ulaşma stratejisinin merkezinde bu model yer alıyor.",
      "Elektrikli SUV pazarındaki rekabet kızışırken, R2'nin menzil ve performans dengesi onu öne çıkaran en önemli unsurlardan biri."
    ]
  },
  {
    id: 26,
    category: "araba",
    title: "Kia'nın Siber Tasarımlı Elektrikli Spor Otomobili '%90 Üretime Hazır'",
    summary: "Konsept aşamasından çıkıp seri üretime yaklaşan iddialı tasarımıyla Kia'nın elektrikli spor otomobili gündemde.",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900&q=80",
    author: "Editör",
    date: "2026-05-11",
    readTime: 4,
    views: 2230,
    featured: false,
    tags: ["kia", "elektrikli araç", "tasarım"],
    body: [
      "Kia'nın siber esintili tasarımıyla dikkat çeken elektrikli spor otomobilinin üretime '%90 hazır' olduğu belirtiliyor. Bu, konseptin gerçeğe dönüşmeye çok yaklaştığı anlamına geliyor.",
      "Geleneksel marka algısını değiştirmeyi hedefleyen bu model, keskin hatları ve gelecekçi tasarımıyla öne çıkıyor.",
      "Elektrikli spor otomobil segmenti, performansı çevre dostu teknolojiyle buluşturmak isteyen sürücüler için hızla büyüyor.",
      "Seri üretim detayları netleştikçe, fiyat ve teknik özelliklerin de açıklanması bekleniyor."
    ]
  },
  {
    id: 27,
    category: "tablet",
    title: "Asus 10 Yıl Sonra Tablet Pazarına Döndü: Asus Pad Tanıtıldı",
    summary: "12.2 inç 2.8K OLED ekran, Dimensity 8300 işlemci ve 9000 mAh batarya ile Asus, Samsung'a meydan okuyor.",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=900&q=80",
    author: "Editör",
    date: "2026-05-29",
    readTime: 4,
    views: 1920,
    featured: false,
    tags: ["asus", "tablet", "oled"],
    body: [
      "Asus, yaklaşık on yıl aradan sonra tablet pazarına geri döndü. Computex 2026'da tanıtılan Asus Pad, premium segmente göz kırpıyor.",
      "12.2 inç 2.8K OLED ekran, içerik tüketimi ve çizim için canlı renkler sunuyor. MediaTek Dimensity 8300 işlemci ise dengeli bir performans vaat ediyor.",
      "9000 mAh kapasiteli batarya, uzun kullanım süreleri için iddialı bir rakam. Asus bu cihazla doğrudan Samsung'un orta-üst segment tabletlerini hedefliyor.",
      "Fiyatlandırma rekabetçi olursa, tablet pazarındaki seçenekler kullanıcılar lehine artacak gibi görünüyor."
    ]
  },
  {
    id: 28,
    category: "bilgisayar",
    title: "Microsoft Surface Pro 12 ve Surface Laptop 8 Geliyor",
    summary: "Yeni nesil Surface cihazları Mayıs sonu–Haziran arasında raflarda. Snapdragon X2 gecikme söylentileri ne anlama geliyor?",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&q=80",
    author: "Editör",
    date: "2026-05-30",
    readTime: 5,
    views: 2410,
    featured: false,
    tags: ["microsoft", "surface", "windows"],
    body: [
      "Microsoft'un yeni nesil Surface cihazları yola çıkıyor. Surface Laptop 8 ve Surface Pro 12'nin ilk partisinin Mayıs sonu ile Haziran sonu arasında satışa çıkması bekleniyor.",
      "Bu cihazlar, ARM tabanlı işlemcilerin sunduğu uzun pil ömrü ve sessiz çalışma avantajlarını Windows ekosistemine taşımayı sürdürüyor.",
      "Ancak yeni nesil Snapdragon X2 yonga setiyle ilgili gecikme söylentileri, bazı modellerin lansman takvimini etkileyebilir.",
      "2'si 1 arada form faktörünü sevenler için Surface Pro 12, hâlâ Windows tabletlerin referans noktası olmaya aday."
    ]
  },
  {
    id: 29,
    category: "bilgisayar",
    title: "Lenovo MWC 2026'da Yapay Zeka Dizüstülerini Tanıttı",
    summary: "Yoga Pro 7a ve Legion 7a dahil yeni yapay zeka odaklı dizüstüler Haziran'da satışa çıkıyor.",
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=900&q=80",
    author: "Editör",
    date: "2026-05-24",
    readTime: 5,
    views: 2050,
    featured: false,
    tags: ["lenovo", "yapay zeka", "dizüstü"],
    body: [
      "Lenovo, MWC 2026'da üretkenlik ve yaratıcılığa odaklanan yeni nesil yapay zeka dizüstülerini ve konsept cihazlarını sergiledi.",
      "Yoga Pro 7a ve Legion 7a gibi modeller Haziran 2026'da satışa çıkıyor. Legion serisi oyun performansına, Yoga serisi ise taşınabilir üretkenliğe odaklanıyor.",
      "Cihazlardaki yapay zeka hızlandırıcıları, görüntü düzenlemeden gerçek zamanlı çeviriye kadar pek çok işi yerel olarak hızlandırıyor.",
      "Fiyatların üst segmentte konumlanması, bu cihazları daha çok profesyonel kullanıcılara yönlendiriyor."
    ]
  },
  {
    id: 30,
    category: "giyilebilir",
    title: "Asus VivoWatch 6 Plus: Safir Cam, Titanyum Kasa ve EKG",
    summary: "Uyku solunum hareketi, yürüyüş analizi ve uzun vadeli sağlık eğilimleri sunan yeni akıllı saat tanıtıldı.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80",
    author: "Editör",
    date: "2026-05-28",
    readTime: 4,
    views: 1780,
    featured: false,
    tags: ["asus", "akıllı saat", "sağlık"],
    body: [
      "Asus, Computex 2026'da sağlık takibine odaklanan VivoWatch 6 Plus akıllı saatini tanıttı. Cihaz, premium malzemeleri ileri sensörlerle birleştiriyor.",
      "1.43 inç AMOLED ekran, safir-kristal cam ile korunuyor; kasa ise titanyum alaşımdan üretilmiş. EKG ölçümü de cihazın öne çıkan özellikleri arasında.",
      "Saat; uyku sırasında solunum hareketi, yürüyüş (gait) analizi ve uzun vadeli sağlık eğilimleri gibi yeni metrikleri destekliyor.",
      "Bu tür gelişmiş sensörler giderek yaygınlaşıyor; ancak unutmayın: bu ölçümler bir hekimin teşhisinin yerini tutmaz."
    ]
  },
  {
    id: 31,
    category: "sosyal-medya",
    title: "Meta Ücretli Abonelik Dönemine Geçiyor: Instagram, Facebook ve WhatsApp Plus",
    summary: "Instagram Plus ve Facebook Plus aylık ~3.99 dolar, WhatsApp Plus 2.99 dolardan sunuluyor. Bu ne anlama geliyor?",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&q=80",
    author: "Editör",
    date: "2026-06-02",
    readTime: 5,
    views: 3340,
    featured: true,
    tags: ["meta", "abonelik", "sosyal medya"],
    body: [
      "Meta, Instagram, Facebook ve WhatsApp genelinde ücretli abonelik katmanlarını devreye aldı. Bu, platformların gelir modelinde önemli bir değişime işaret ediyor.",
      "Instagram Plus ve Facebook Plus aylık yaklaşık 3.99 dolar, WhatsApp Plus ise 2.99 dolar olarak fiyatlandırıldı.",
      "Abonelikler genellikle ek özellikler ve daha az reklam vaat ediyor. Ancak temel deneyimin ne kadarının ücretsiz kalacağı kullanıcıların merak ettiği asıl soru.",
      "Sosyal medyanın 'ücretsiz' modelinden kademeli olarak uzaklaşması, sektör için dikkatle izlenmesi gereken bir eğilim."
    ]
  },
  {
    id: 32,
    category: "sosyal-medya",
    title: "WhatsApp'ta Telefon Numarası Devri Bitiyor: Kullanıcı Adları Geliyor",
    summary: "WhatsApp, profillerde telefon numarasını tamamen gizleyen kullanıcı adı sistemine geçiyor. Gizlilik için büyük adım.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=900&q=80",
    author: "Editör",
    date: "2026-05-31",
    readTime: 4,
    views: 2890,
    featured: false,
    tags: ["whatsapp", "gizlilik", "kullanıcı adı"],
    body: [
      "WhatsApp, profillerde telefon numarasını tamamen gizleyen kullanıcı adı (username) sistemini kullanıma sunmaya başladı.",
      "Bu değişiklik, platformu daha çok sosyal medya tarzı bir kimlik sistemine yaklaştırıyor. Artık numaranızı paylaşmadan iletişim kurmak mümkün olacak.",
      "Gizlilik açısından önemli bir adım: telefon numaranızın tanımadığınız kişilere ifşa olma riski azalıyor.",
      "Ayrıca AB'deki kullanıcılar için Meta AI ile durum güncellemelerinde ve sohbetlerde görsel üretme özelliği de devrede."
    ]
  },
  {
    id: 33,
    category: "uygulama",
    title: "TikTok'tan İki Yeni Özellik: AI Alive ile Fotoğraflar Hareketleniyor",
    summary: "Statik görselleri videoya çeviren AI Alive ve keşfettiğin şarkıları müzik servisine kaydeden 'Add to Music' geldi.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&q=80",
    author: "Editör",
    date: "2026-06-01",
    readTime: 4,
    views: 2560,
    featured: false,
    tags: ["tiktok", "yapay zeka", "uygulama"],
    body: [
      "TikTok, kullanıcı deneyimini zenginleştiren iki yeni özellik duyurdu. İlki, yapay zeka destekli 'AI Alive'.",
      "AI Alive, TikTok Stories içinde statik fotoğrafları kısa videolara dönüştürüyor. Böylece tek bir kareden hareketli içerik üretmek mümkün hale geliyor.",
      "İkinci yenilik 'Add to Music App'; uygulamada keşfettiğiniz şarkıları, tercih ettiğiniz müzik akış servisine doğrudan kaydetmenizi sağlıyor.",
      "Reklam verenler de artık TikTok kullanıcılarına WhatsApp ve Messenger gibi diğer mesajlaşma uygulamaları üzerinden ulaşabilecek."
    ]
  },
  {
    id: 34,
    category: "bilgisayar",
    title: "Nvidia 'PC'yi Yeniden İcat Ediyor': RTX Spark ile Dizüstü Pazarına Giriş",
    summary: "Jensen Huang, Computex 2026'da yapay zeka entegre RTX Spark dizüstü yongasını tanıttı. Microsoft ile birlikte PC'yi dönüştürme iddiası büyük.",
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=900&q=80",
    author: "Editör",
    date: "2026-06-03",
    readTime: 6,
    views: 4380,
    featured: true,
    tags: ["nvidia", "işlemci", "yapay zeka"],
    body: [
      "Nvidia CEO'su Jensen Huang, 1 Haziran'da Computex 2026'da yeni nesil tüketici PC yongası RTX Spark'ı tanıttı. Bu, şirketin Windows dizüstü işlemci pazarına güçlü bir girişi anlamına geliyor.",
      "Huang, Microsoft ile birlikte 'PC'yi yeniden icat edeceklerini' söyledi. RTX Spark'ın en büyük iddiası, yapay zekayı doğrudan donanım katmanına entegre etmesi.",
      "Bu hamle, Nvidia'yı yapay zeka yığınının her katmanında — veri merkezinden cep bilgisayarına kadar — söz sahibi yapma stratejisinin bir parçası.",
      "Yeni yonganın gerçek dünya performansı ve pil verimliliği, piyasaya çıkan ilk cihazlarla netleşecek; ancak rekabetin daha da kızışacağı kesin."
    ]
  },
  {
    id: 35,
    category: "giyilebilir",
    title: "Yapay Zeka Gözlük Savaşları Başladı: Google, Warby Parker ve Meta Sahada",
    summary: "Google I/O 2026'da Gemini destekli akıllı gözlükler tanıtıldı; Meta ise dört yeni model hazırlıyor. Ekransız, sesle çalışan asistan dönemi geliyor.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80",
    author: "Editör",
    date: "2026-06-02",
    readTime: 6,
    views: 3960,
    featured: false,
    tags: ["akıllı gözlük", "yapay zeka", "giyilebilir"],
    body: [
      "Akıllı gözlük pazarı 2026'da rekabetin en kızgın olduğu alanlardan biri haline geldi. Google, I/O 2026'da Warby Parker ile birlikte Gemini ve Android XR üzerinde çalışan 'Akıllı Gözlük' serisini tanıttı.",
      "Gözlükler iki versiyonda geliyor: sesli yardım sunan ses odaklı modeller ve bilgileri görüş alanınızda gösteren ekranlı modeller. Önünüzdeki bir tabelayı Gemini'ye sorup sesli yanıt alabiliyor, hatta sesle fotoğraf çekebiliyorsunuz.",
      "Meta cephesinde ise en az dört yeni akıllı gözlük modeli yolda; 'Modelo' Haziran'da, diğerleri sonbaharda bekleniyor. Meta ayrıca konuşmaları kaydedip özetleyen yapay zeka destekli bir kolye üzerinde çalışıyor.",
      "Ekransız, sesle çalışan yapay zeka asistanları, telefonun yerini kısmen alabilecek yeni bir giyilebilir kategori yaratıyor. Gizlilik tartışmaları ise yeni başlıyor."
    ]
  },
  {
    id: 36,
    category: "yapay-zeka",
    title: "Humanoid Robotlar Henüz Hazır Değil: CES 2026'nın Dürüst Tablosu",
    summary: "Ev işlerini yapan robot hayali güzel; ama gerçek şu an çok yavaş. CES 2026'da robotlar etkileyiciden çok 'umut vadeden' kategorisindeydi.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
    author: "Editör",
    date: "2026-06-01",
    readTime: 5,
    views: 3210,
    featured: false,
    tags: ["robot", "yapay zeka", "ces"],
    body: [
      "CES 2026, humanoid (insansı) robotların henüz günlük hayata hazır olmadığını açıkça gösterdi. En büyük sorun: robotlar can sıkıcı derecede yavaş.",
      "Bulaşık yıkayan veya çamaşır katlayan bir ev robotu beklentiniz varsa, bunun hâlâ yıllar uzakta olduğunu söylemek gerek. Fuardaki gösterimlerin çoğu kontrollü ortamlarda yapıldı.",
      "Yine de umut vadeden örnekler vardı: CLOiD adlı robot, yapay zeka ve görüş tabanlı teknolojiyle yemek pişirme ve çamaşır gibi işleri deniyor; iki kollu gövdesi ve tekerlekli tabanıyla otonom hareket edebiliyor.",
      "Kısa vadede robotlar evimize girmese de, sanayi ve depo gibi kontrollü alanlarda hızla yaygınlaşıyorlar. Asıl devrim, yapay zekanın bu robotları gerçek zamanlı 'düşündürmesiyle' gelecek."
    ]
  },
  {
    id: 37,
    category: "telefon",
    title: "2026 Telefon Alma Rehberi: Bütçenize Göre Doğru Seçim",
    summary: "Yeni telefon almak kafa karıştırıcı olabilir. Bu kapsamlı rehberde her bütçe için doğru seçimi, dikkat edilmesi gereken özellikleri ve sık yapılan hataları anlattık.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
    author: "Editör",
    date: "2026-06-05",
    readTime: 9,
    views: 5240,
    featured: true,
    tags: ["telefon", "satın alma rehberi", "karşılaştırma"],
    body: [
      "Telefon pazarı her geçen yıl daha kalabalık hale geliyor. Onlarca marka, yüzlerce model ve birbirinden iddialı reklamlar arasında doğru kararı vermek giderek zorlaşıyor. Bu rehberde, bütçenize göre nelere odaklanmanız gerektiğini sade bir dille anlatıyoruz.",
      { h: "Önce İhtiyacınızı Belirleyin" },
      "En pahalı telefon herkes için en doğru telefon değildir. Telefonu ağırlıklı olarak ne için kullandığınız, hangi özelliklere para vermeniz gerektiğini belirler. Sosyal medya ve mesajlaşma mı, yoksa profesyonel fotoğrafçılık ve oyun mu? Bu soru, bütçenizi en doğru yere yönlendirir.",
      { img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=900&q=80", caption: "Hızlı şarj artık her segmentte; ama pil sağlığı için aşırıya kaçmamak gerekiyor." },
      { h: "Giriş Segmenti: Akıllı Harcama" },
      "Bu segmentte amaç, gereksiz özelliklere para vermeden günlük işleri sorunsuz yapan bir cihaz bulmak. Yeterli RAM, akıcı bir ekran ve uzun pil ömrü önceliğiniz olmalı. Kameradan çok pil ve güncelleme desteğine bakın.",
      { h: "Orta Segment: Fiyat/Performans Tatlı Noktası" },
      "Çoğu kullanıcı için en mantıklı segment burası. Bu fiyat aralığında artık amiral gemilerine yakın ekranlar, güçlü işlemciler ve tatmin edici kameralar bulabiliyorsunuz. 2026'da orta segment, fiyat/performans dengesinde açık ara kazanan taraf.",
      { h: "Amiral Gemisi: En İyisini İsteyenlere" },
      "Eğer en iyi kamerayı, en hızlı performansı ve en uzun yazılım desteğini istiyorsanız üst segment sizin için. Ancak unutmayın: bu segmentte ödediğiniz paranın bir kısmı marka ve prestij için. Gerçekten kullanacağınız özelliklere odaklanın.",
      { h: "Satın Almadan Önce Kontrol Listesi" },
      { list: [
        "Yazılım güncelleme süresi: En az 3-4 yıl güvenlik güncellemesi alıyor mu?",
        "Pil kapasitesi ve şarj hızı: Gün boyu dayanıyor mu?",
        "Ekran kalitesi: AMOLED ve yüksek yenileme hızı (120Hz) var mı?",
        "Depolama: 128 GB minimum; mümkünse 256 GB tercih edin.",
        "Su/toz dayanıklılığı (IP sertifikası) ve garanti şartları."
      ] },
      { quote: "Doğru telefon, en pahalı olan değil; ihtiyaçlarınızı en uzun süre karşılayacak olandır." },
      "Son olarak, acele etmeyin. Yeni modeller çıktıkça bir önceki neslin fiyatı düşer ve çoğu zaman en akıllı alışveriş, bir önceki yılın amiral gemisini almaktır. İhtiyacınızı netleştirip bu kontrol listesini kullanırsanız, pişman olmayacağınız bir seçim yaparsınız."
    ]
  },
  {
    id: 38,
    category: "bilgisayar",
    title: "Sıfırdan Oyun Bilgisayarı Toplama Rehberi (2026)",
    summary: "Kendi oyun bilgisayarınızı toplamak göründüğü kadar zor değil ve hazır sistemlere göre çok daha fazla performans sunar. Parça parça, bütçe dostu bir yol haritası hazırladık.",
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=900&q=80",
    author: "Editör",
    date: "2026-06-04",
    readTime: 11,
    views: 4610,
    featured: true,
    tags: ["oyun bilgisayarı", "donanım", "toplama pc"],
    body: [
      "Hazır bir oyun bilgisayarı almak kolaydır; ama kendi sisteminizi toplamak hem daha ucuza daha fazla performans verir hem de tam istediğiniz cihaza sahip olmanızı sağlar. Endişelenmeyin: bu iş, dev bir lego setini birleştirmek kadar mantıklı ilerliyor.",
      { h: "1. İşlemci (CPU): Sistemin Beyni" },
      "İşlemci, bilgisayarınızın genel hızını belirler. Oyun için orta-üst seviye bir işlemci çoğu senaryoda fazlasıyla yeterli. Aşırı pahalı modeller daha çok video düzenleme ve yayıncılık gibi işler için anlamlı.",
      { img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=900&q=80", caption: "Ekran kartı, bir oyun bilgisayarının bütçesinin en büyük kısmını oluşturur." },
      { h: "2. Ekran Kartı (GPU): Oyunun Kalbi" },
      "Oyun performansında en belirleyici parça ekran kartıdır. Hangi çözünürlükte (1080p, 1440p, 4K) ve kaç FPS hedeflediğinize göre seçim yapın. Bütçenizin en büyük dilimini buraya ayırmanız mantıklı.",
      { h: "3. RAM ve Depolama" },
      "2026'da 16 GB RAM rahat bir başlangıç; daha ağır işler için 32 GB ideal. Depolama tarafında ise mutlaka NVMe SSD kullanın — oyunların yükleme süreleri ve sistemin genel akıcılığı buna bağlı.",
      { h: "4. Anakart, Güç Kaynağı ve Kasa" },
      "Anakart tüm parçaları birbirine bağlar; işlemcinizle uyumlu olmasına dikkat edin. Güç kaynağında (PSU) ucuza kaçmayın — kaliteli ve yeterli watt'a sahip bir PSU, tüm sistemin güvenliğidir. Kasa ise hava akışı (soğutma) ve estetik için önemli.",
      { h: "Toplarken Dikkat Edilecekler" },
      { list: [
        "Parça uyumluluğunu önceden kontrol edin (işlemci-anakart soketi, RAM tipi).",
        "Güç kaynağının watt'ı tüm sisteme yetmeli; hesaplama araçlarını kullanın.",
        "Statik elektriğe karşı topraklanın; parçalara metal kenarlardan tutun.",
        "İlk açılışta tek ekran kartı, tek RAM ile test edin.",
        "Termal macunu unutmayın (çoğu soğutucuda hazır gelir)."
      ] },
      { quote: "İyi bir güç kaynağı ve yeterli soğutma, en az ekran kartı kadar önemlidir — çünkü performansı sürdürülebilir kılan onlardır." },
      "İlk kez topluyorsanız acele etmeyin, her adımı bir videoyla eşleştirin. Birkaç saatlik bir uğraşın sonunda, kendi ellerinizle kurduğunuz ve istediğiniz an yükseltebileceğiniz bir oyun makinesine sahip olacaksınız."
    ]
  },
  {
    id: 39,
    category: "oyun",
    title: "2026'nın En Çok Beklenen Oyunları",
    summary: "Bu yıl oyuncuları heyecanlandıran büyük yapımlardan sürpriz bağımsız oyunlara kadar, takvimine eklemen gereken en dikkat çekici çıkışları derledik.",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=900&q=80",
    author: "Editör",
    date: "2026-06-03",
    readTime: 7,
    views: 3920,
    featured: false,
    tags: ["oyun", "çıkış takvimi", "2026"],
    body: [
      "2026, oyun dünyası için yoğun bir yıl olacağa benziyor. Hem dev stüdyoların uzun süredir beklenen devam oyunları hem de yaratıcılığıyla öne çıkan bağımsız yapımlar bu yıl raflarda yerini alıyor. İşte radarında olması gerekenler.",
      { h: "Büyük Bütçeli Yapımlar" },
      "Büyük stüdyolar bu yıl görsel sınırları zorlayan açık dünya oyunları ve sinematik hikaye odaklı yapımlarla geliyor. Yeni nesil donanımların gücünü tam kullanan bu oyunlar, grafik kalitesinde çıtayı yükseltiyor.",
      { img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&q=80", caption: "Bulut oyun servisleri sayesinde büyük yapımlar artık güçlü donanım olmadan da oynanabiliyor." },
      { h: "Bağımsız (Indie) İnciler" },
      "Asıl sürprizler çoğu zaman küçük ekiplerden geliyor. Özgün oynanış mekanikleri ve cesur sanat yönetimiyle öne çıkan bağımsız oyunlar, bu yıl da büyük yapımlara güçlü bir alternatif sunuyor. Üstelik çok daha uygun fiyatlılar.",
      { h: "Mobil ve Bulut Tarafı" },
      "Konsol kalitesindeki oyunlar artık telefonlarda ve bulut üzerinden de oynanabiliyor. Bu yıl pek çok büyük yapım, aynı anda birden fazla platformda çıkış yaparak 'nerede istersen orada oyna' anlayışını güçlendiriyor.",
      { quote: "Bu yılın en büyük kazananı, hangi cihazda olursa olsun oyununa kaldığı yerden devam edebilen oyuncular olacak." },
      "Hangi türü seviyor olursanız olun, 2026'nın çıkış takvimi oldukça dolu. Cüzdanınızı korumak için indirimleri beklemek ve oyunları çıkıştan sonra birkaç güncelleme geçene kadar izlemek her zaman akıllıca bir strateji."
    ]
  },
  {
    id: 40,
    category: "yapay-zeka",
    title: "Günlük Hayatta Yapay Zeka: İşinizi Kolaylaştıracak 8 Pratik Kullanım",
    summary: "Yapay zeka artık sadece teknoloji devlerinin oyuncağı değil. Doğru kullanıldığında zamandan tasarruf ettiren, gündelik hayatı kolaylaştıran 8 somut örneği inceledik.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
    author: "Editör",
    date: "2026-06-02",
    readTime: 8,
    views: 4480,
    featured: true,
    tags: ["yapay zeka", "üretkenlik", "günlük hayat"],
    body: [
      "Yapay zeka son birkaç yılda laboratuvarlardan çıkıp cebimize girdi. Artık fotoğraf düzenlemeden e-posta yazmaya, dil öğrenmeden sağlık takibine kadar pek çok alanda sessizce hayatımızı kolaylaştırıyor. İşte günlük hayatta gerçekten işe yarayan kullanımlar.",
      { h: "1. Yazışma ve Metin Üretimi" },
      "E-posta taslakları, özetler ve metin düzeltme gibi işlerde yapay zeka ciddi zaman kazandırıyor. Uzun bir belgeyi saniyeler içinde özetletmek, artık herkesin erişebildiği bir kolaylık.",
      { img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80", caption: "Üretken yapay zeka, metinden görsele kadar geniş bir alanda yaratıcı işleri hızlandırıyor." },
      { h: "2. Fotoğraf ve Video Düzenleme" },
      "Telefonunuzdaki yapay zeka; gereksiz nesneleri silmenizi, fotoğrafları iyileştirmenizi ve videoları otomatik kurgulamanızı sağlıyor. Eskiden profesyonel yazılım gerektiren işler artık birkaç dokunuş.",
      { h: "3. Kişisel Asistan ve Planlama" },
      "Takviminizi düzenlemek, hatırlatıcılar kurmak ve karmaşık soruları yanıtlamak için yapay zeka asistanları giderek daha yetenekli. Sesli komutlarla pek çok işi eller serbest halledebiliyorsunuz.",
      { h: "4. Öğrenme ve Çeviri" },
      "Yeni bir dil öğrenmek veya yabancı bir metni anında çevirmek hiç bu kadar kolay olmamıştı. Yapay zeka, kişisel bir öğretmen gibi size özel açıklamalar sunabiliyor.",
      { h: "Peki Nelere Dikkat Etmeli?" },
      { list: [
        "Hassas kişisel verilerinizi gelişigüzel paylaşmayın.",
        "Yapay zekanın verdiği bilgileri, özellikle sağlık ve hukuk gibi konularda mutlaka doğrulayın.",
        "Cihaz üstünde çalışan (verinizi buluta göndermeyen) seçenekleri tercih edin.",
        "Üretilen içeriği olduğu gibi değil, bir taslak olarak kullanın."
      ] },
      { quote: "Yapay zeka bir sihir değil, güçlü bir araçtır. Değeri, onu ne kadar bilinçli kullandığınızla ortaya çıkar." },
      "Özetle, yapay zekayı hayatınıza katmak için teknoloji uzmanı olmanıza gerek yok. Küçük günlük işlerden başlayıp güvendiğiniz araçlarla ilerlerseniz, kısa sürede ne kadar çok zaman kazandığınızı fark edeceksiniz."
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
