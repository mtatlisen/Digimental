# Digimental Website

[www.digimental.com.tr](https://www.digimental.com.tr) - Dijital Çözümler ve Yazılım Hizmetleri

Bu proje, Digimental'ın kurumsal web sitesidir. [Astro](https://astro.build) ve [Starlight](https://starlight.astro.build) kullanılarak geliştirilmiştir.

## 🚀 Proje Yapısı

```
.
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── content/
│   │   └── docs/
│   │       ├── index.mdx (Ana sayfa)
│   │       ├── guides/
│   │       │   ├── yazilim-gelistirme.md
│   │       │   ├── dijital-donusum.md
│   │       │   └── danismanlik.md
│   │       └── reference/
│   │           ├── hakkimizda.md
│   │           └── iletisim.md
│   └── styles/
│       └── custom.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Komutlar

Tüm komutlar proje kök dizininden çalıştırılır:

| Komut                   | Açıklama                                              |
| :---------------------- | :---------------------------------------------------- |
| `npm install`           | Bağımlılıkları yükler                                 |
| `npm run dev`           | Geliştirme sunucusunu `localhost:4321` adresinde başlatır |
| `npm run build`         | Prodüksiyon sitesini `./dist/` klasörüne derler       |
| `npm run preview`       | Derlenen siteyi yerel olarak önizler                  |

## 📝 İçerik Düzenleme

Site içeriği `src/content/docs/` klasöründeki Markdown ve MDX dosyalarından oluşur.

- **Ana Sayfa:** `src/content/docs/index.mdx`
- **Hizmetler:** `src/content/docs/guides/` klasörü
- **Hakkımızda:** `src/content/docs/reference/` klasörü

## 🎨 Özelleştirme

- **Renkler ve Stiller:** `src/styles/custom.css`
- **Site Yapılandırması:** `astro.config.mjs`
- **Logo:** `src/assets/logo.svg`
- **Favicon:** `public/favicon.svg`

## 📄 Lisans

© 2024 Digimental. Tüm hakları saklıdır.
