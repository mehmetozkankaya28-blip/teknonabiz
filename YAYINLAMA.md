# 🚀 Siteyi Yayına Alma Rehberi

TeknoNabız tamamen statik bir site (HTML/CSS/JS). Sunucu veya derleme gerektirmez,
bu yüzden ücretsiz olarak çok kolay yayınlanır. İki yöntem öneriyoruz.

---

## Yöntem 1 — Netlify Drop (EN KOLAY, hesap bile gerektirmez) ⭐

1. Tarayıcıda şu adrese git: **https://app.netlify.com/drop**
2. Bu klasörün (`Teknoloji sitesi`) tamamını fareyle sürükleyip sayfaya bırak.
3. Birkaç saniye içinde sana `https://rastgele-isim.netlify.app` gibi canlı bir adres verilir. Bitti! 🎉
4. (İsteğe bağlı) Ücretsiz bir Netlify hesabı açarsan siteyi kalıcı tutabilir,
   adını değiştirebilir ve kendi alan adını bağlayabilirsin.

---

## Yöntem 2 — GitHub Pages (güncellemeleri kolay yönetmek için)

Önce GitHub'da ücretsiz bir hesap aç: https://github.com

Bu klasör zaten bir git deposu olarak hazırlandı. Sadece kendi depona gönder:

```bash
# 1) GitHub'da "teknonabiz" adında BOŞ bir repo oluştur (README ekleme).
# 2) Bu klasörde şu komutları çalıştır (KULLANICIADI'nı kendi adınla değiştir):

git remote add origin https://github.com/KULLANICIADI/teknonabiz.git
git branch -M main
git push -u origin main
```

Ardından GitHub'da:
1. Repo sayfasında **Settings → Pages** bölümüne git.
2. "Build and deployment" altında **Source: Deploy from a branch** seç.
3. **Branch: main**, klasör: **/ (root)** seç ve **Save**'e bas.
4. 1-2 dakika sonra siten `https://KULLANICIADI.github.io/teknonabiz/` adresinde yayında olur.

> İçeriği her güncellediğinde `git add .` → `git commit -m "guncelleme"` → `git push`
> yapman yeterli; site otomatik güncellenir.

---

## Kendi Alan Adın (örnek: teknonabiz.com)

Her iki platform da ücretsiz planda özel alan adı bağlamaya izin verir.
Bir alan adı satın aldıktan sonra platformun "Domain / Custom domain" ayarından ekleyebilirsin.
