// Dipakai untuk membangun ulang assets/css/tailwind.css (hanya perlu kalau kamu menambah kelas Tailwind baru)
// Perintah: npx tailwindcss@3.4.17 -c tailwind.config.js -i tailwind.input.css -o assets/css/tailwind.css --minify
module.exports = {
  content: ['./index.html', './pages/*.html', './components/*.html', './assets/js/app.js'],
  theme: {
    extend: {
      colors: {
        cream: { 50: '#FDFBF7', 100: '#F9F5EC', 200: '#F1E9DA', 300: '#E5D8C1' },
        oak: { 100: '#F4E8D6', 200: '#E6CFAF', 300: '#D8B892', 400: '#C49A6C', 500: '#A97B4B', 600: '#8C6239', 700: '#6E4B2A', 800: '#52371F', 900: '#382515' },
        charcoal: { 800: '#26211D', 900: '#171412' },
        sage: { 50: '#F2F6F3', 100: '#E1ECE4', 600: '#3D6B4E', 700: '#2E523B' }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    }
  }
}
