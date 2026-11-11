# Livora Furniture Marketplace — Vite Multi-Page

## Menjalankan project
Pastikan Node.js sudah terpasang. Buka terminal di folder project, lalu jalankan:

```bash
npm install
npm run dev
```

Vite akan menampilkan alamat lokal (umumnya `http://localhost:5173`). Buka alamat tersebut di browser.

Untuk membuat build produksi:

```bash
npm run build
npm run preview
```

## Struktur halaman
- `index.html` — Beranda
- `pages/katalog.html` — Katalog produk
- `pages/ongkir.html` — Kalkulator estimasi ongkir
- `pages/inspirasi.html` — Inspirasi/testimoni
- `pages/checkout.html` — Checkout
- `pages/riwayat.html` — Riwayat pesanan dan invoice
- `assets/css/main.css` — CSS desain utama yang dipisahkan dari HTML
- `assets/css/project.css` — Penyesuaian Bootstrap dan print invoice
- `assets/js/app.js` — Data produk, keranjang, member, checkout, invoice, dan riwayat
- `vite.config.js` — Konfigurasi multi-page Vite

## Catatan implementasi
Setiap halaman merupakan file HTML mandiri dan berbagi stylesheet serta JavaScript. Keranjang, member, dan riwayat disimpan di `localStorage`, sehingga data hanya tersedia pada browser/perangkat yang sama. Checkout adalah simulasi: invoice bisa dilihat/dicetak, tetapi email/SMS tidak terkirim otomatis, VA/QRIS bukan pembayaran aktif, dan pembayaran belum diverifikasi. Ongkir merupakan estimasi zona hardcoded, bukan tarif kurir live.

Bootstrap 5.3 tetap digunakan melalui CDN untuk komponen form, grid, dan tombol; styling awal dipertahankan agar tampilan Livora tidak berubah drastis. Internet diperlukan untuk CDN, font, dan gambar Unsplash.
