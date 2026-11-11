import { defineConfig } from 'vite';

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        katalog: 'pages/katalog.html',
        ongkir: 'pages/ongkir.html',
        inspirasi: 'pages/inspirasi.html',
        checkout: 'pages/checkout.html',
        riwayat: 'pages/riwayat.html'
      }
    }
  }
});
