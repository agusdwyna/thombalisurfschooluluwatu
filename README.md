# 🏄 Thom Bali Surf School — React + Vite + Tailwind

Website surf school Nusa Dua yang dibangun dengan **React 18**, **Vite 4**, dan **Tailwind CSS 3**.

---

## 📦 Struktur Project

```
thom-bali-surf-school/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Packages.jsx
│   │   ├── Gallery.jsx
│   │   ├── CTA.jsx
│   │   ├── LocationFooter.jsx
│   │   └── WhatsAppFAB.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js       ← semua color tokens di sini
├── postcss.config.js
└── package.json
```

---

## 🚀 Cara Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Build untuk production
npm run build

# 4. Preview build
npm run preview
```

---

## 🎨 Konfigurasi Warna (Tailwind)

Semua warna menggunakan sistem **Material You** berbasis palet Forest Green.
File konfigurasi: `tailwind.config.js`

### Token Utama

| Token                      | Hex       | Kegunaan                             |
|----------------------------|-----------|--------------------------------------|
| `primary`                  | `#00261a` | Warna utama brand (hijau tua)        |
| `on-primary`               | `#ffffff` | Teks di atas primary                 |
| `primary-container`        | `#0f3d2e` | Hover state tombol primary           |
| `primary-fixed`            | `#beedd7` | Background highlight / selection     |
| `primary-fixed-dim`        | `#a2d1bb` | Inverse primary / aksen              |
| `secondary`                | `#47645a` | Warna sekunder / label               |
| `secondary-container`      | `#c9eadd` | Badge / chip background              |
| `background`               | `#fcf9f8` | Background halaman                   |
| `surface`                  | `#fcf9f8` | Background section                   |
| `surface-container-low`    | `#f6f3f2` | Section background bergantian        |
| `on-surface`               | `#1c1b1b` | Teks utama                           |
| `on-surface-variant`       | `#414944` | Teks sekunder / deskripsi            |
| `outline-variant`          | `#c0c8c3` | Border halus                         |

### Cara Pakai di JSX

```jsx
// Menggunakan color token langsung via class Tailwind
<div className="bg-primary text-on-primary">...</div>
<p className="text-on-surface-variant">...</p>
<span className="bg-secondary-container text-on-secondary-container">...</span>
```

### Cara Mengubah Warna Brand

Edit `tailwind.config.js`, bagian `theme.extend.colors`:

```js
// Contoh: ganti ke tema biru laut
"primary": "#0a2540",        // navy blue
"primary-container": "#1a3a5c",
"primary-fixed": "#b8d4f0",
"secondary-container": "#d0e8ff",
```

---

## 🔤 Typography Tokens

| Token          | Size  | Weight | Font              |
|----------------|-------|--------|-------------------|
| `headline-xl`  | 64px  | 800    | Plus Jakarta Sans |
| `headline-lg`  | 48px  | 700    | Plus Jakarta Sans |
| `headline-md`  | 32px  | 700    | Plus Jakarta Sans |
| `body-lg`      | 18px  | 400    | Inter             |
| `body-md`      | 16px  | 400    | Inter             |
| `label-caps`   | 14px  | 600    | Inter (uppercase) |

```jsx
// Penggunaan
<h1 className="font-headline-xl text-headline-xl">...</h1>
<p className="font-body-lg text-body-lg">...</p>
```

---

## 📐 Spacing Tokens

| Token           | Value  |
|-----------------|--------|
| `unit`          | 8px    |
| `stack-sm`      | 16px   |
| `gutter`        | 24px   |
| `stack-md`      | 32px   |
| `section-gap`   | 120px  |

---

## 🌐 Google Fonts

Font dimuat dari Google Fonts di `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
```

### Cara Pakai Material Symbols Icon

```jsx
<span className="material-symbols-outlined text-primary">
  location_on
</span>
```

---

## 💡 Tips Pengembangan

- **Tambah section baru**: Buat komponen di `src/components/`, import di `App.jsx`
- **Ganti gambar**: Ganti URL di masing-masing komponen (saat ini pakai Google-hosted images)
- **WhatsApp link**: Edit nomor di `WhatsAppFAB.jsx` → `href="https://wa.me/6281234567890"`
- **Nomor telepon**: Cari & ganti `+62 812 3456 7890` di `LocationFooter.jsx`
