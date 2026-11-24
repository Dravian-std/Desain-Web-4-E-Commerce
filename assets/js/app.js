// Lokasi root situs, dihitung dari lokasi app.js (assets/js/app.js -> naik 2 folder).
        const SITE_ROOT = new URL('../../', (document.currentScript && document.currentScript.src) || window.location.href).href;

        // Helper jalur gambar lokal (otomatis jalan di GitHub Pages maupun Vite lokal)
        function imgAsset(filename) {
            const folder = window.location.hostname.includes('github.io')
                ? `${SITE_ROOT}public/images/`
                : `${SITE_ROOT}images/`;
            return `${folder}${filename}`;
        }

        const PRODUCTS = [
            // 1. ANAK-ANAK (4 Produk)
            {
                id: 'kiko-montessori-bed',
                name: 'Kiko Montessori Low Bed',
                ageGroup: 'Anak-anak',
                category: 'Kamar Tidur', style: 'Scandinavian', color: 'Krem Birch',
                styleBadge: 'Kids Safe Rounded Birch',
                dimP: 100, dimL: 200, dimT: 35,
                material: 'Solid Birch Sudut Tumpul Aman',
                price: 2950000, oldPrice: 3400000,
                weightKg: 26, featuredOnHome: true,
                file3D: 'kiko_montessori_low_bed_3d_studio.html',
                image: imgAsset('kiko-montessori-low-bed.webp')
            },
            {
                id: 'mori-kids-desk',
                name: 'Mori Kids Study Desk',
                ageGroup: 'Anak-anak',
                category: 'Ruang Kerja', style: 'Minimalis', color: 'Maple Terang',
                styleBadge: 'Ergonomic Kids Wood',
                dimP: 90, dimL: 55, dimT: 65,
                material: 'Light Maple & White Oak',
                price: 1450000, oldPrice: 1750000,
                weightKg: 16, featuredOnHome: false,
                file3D: 'mori_kids_study_desk_3d_studio.html',
                image: imgAsset('mori-kids.webp')
            },
            {
                id: 'pino-toy-organizer',
                name: 'Pino Montessori Toy Shelf',
                ageGroup: 'Anak-anak',
                category: 'Penyimpanan', style: 'Scandinavian', color: 'Krem Birch',
                styleBadge: 'Scandinavian Kids Storage',
                dimP: 85, dimL: 35, dimT: 70,
                material: 'Solid Birch + 6 Kotak Linen',
                price: 1190000, oldPrice: 1400000,
                weightKg: 14, featuredOnHome: false,
                file3D: 'pino_montessori_toy_shelf_3d_studio.html',
                image: imgAsset('pino-montessori-toy-shelf.webp')
            },
            {
                id: 'sora-bunk-bed',
                name: 'Sora Twin Bunk Bed',
                ageGroup: 'Anak-anak',
                category: 'Kamar Tidur', style: 'Minimalis', color: 'Pine',
                styleBadge: 'Space-Saving Kids',
                dimP: 100, dimL: 208, dimT: 165,
                material: 'Solid Pine & Oak Anti-Slip',
                price: 5450000, oldPrice: 6200000,
                weightKg: 58, featuredOnHome: false,
                file3D: 'sora_twin_bunk_bed_3d_studio.html',
                image: imgAsset('sora-twin-bunk-bed.webp')
            },

            // 2. REMAJA & MAHASISWA / KOS (4 Produk)
            {
                id: 'lumina-desk',
                name: 'Lumina Minimalist Desk',
                ageGroup: 'Remaja & Kos',
                category: 'Ruang Kerja', style: 'Scandinavian', color: 'Oak Natural',
                styleBadge: 'Scandinavian Compact',
                dimP: 120, dimL: 60, dimT: 75,
                material: 'Solid White Oak + 2 Laci',
                price: 1850000, oldPrice: 2250000,
                weightKg: 28, featuredOnHome: true,
                file3D: 'lumina_minimalist_desk_3d_studio.html',
                image: imgAsset('lumina-minimalist-desk.webp')
            },
            {
                id: 'vela-study-chair',
                name: 'Vela Timber Study Chair',
                ageGroup: 'Remaja & Kos',
                category: 'Ruang Kerja', style: 'Japandi', color: 'Oak Natural',
                styleBadge: 'Japandi Task Seating',
                dimP: 62, dimL: 60, dimT: 98,
                material: 'Bentwood Oak + Linen Cushion',
                price: 1350000, oldPrice: 1600000,
                weightKg: 12, featuredOnHome: false,
                file3D: 'vela_timber_study_chair_3d_studio.html',
                image: imgAsset('vela-timber-study-chair.webp')
            },
            {
                id: 'nara-slim-wardrobe',
                name: 'Nara Slim Kos Wardrobe',
                ageGroup: 'Remaja & Kos',
                category: 'Kamar Tidur', style: 'Minimalis', color: 'Ash Pucat',
                styleBadge: 'Minimalist Natural Ash',
                dimP: 90, dimL: 55, dimT: 190,
                material: 'Kayu Ash Oven-Dried 2 Pintu',
                price: 3450000, oldPrice: 3950000,
                weightKg: 48, featuredOnHome: false,
                file3D: 'nara_slim_kos_wardrobe_3d_studio.html',
                image: imgAsset('nara-slim-kos-wardrobe.webp')
            },
            {
                id: 'kanso-bookshelf',
                name: 'Kanso Modular Bookshelf',
                ageGroup: 'Remaja & Kos',
                category: 'Penyimpanan', style: 'Scandinavian', color: 'Oak Natural',
                styleBadge: 'Scandinavian Light Wood',
                dimP: 80, dimL: 32, dimT: 145,
                material: 'Solid White Oak 4 Tingkat',
                price: 1250000, oldPrice: 1490000,
                weightKg: 22, featuredOnHome: false,
                file3D: 'kanso_modular_bookshelf_3d_studio.html',
                image: imgAsset('kanso-modular-bookshelf.webp')
            },

            // 3. DEWASA & KELUARGA (4 Produk)
            {
                id: 'aoki-credenza',
                name: 'Aoki Birch Credenza',
                ageGroup: 'Dewasa & Keluarga',
                category: 'Ruang Keluarga', style: 'Japandi', color: 'Krem Birch',
                styleBadge: 'Flagship Japandi Miter 45°',
                dimP: 180, dimL: 45, dimT: 75,
                material: 'Solid Scandinavian Birch 22mm',
                price: 18450000, oldPrice: 21200000,
                weightKg: 46, featuredOnHome: false,
                file3D: 'aoki_birch_credenza_3d_configurator.html',
                image: imgAsset('aoki-birch-credenza.webp')
            },
            {
                id: 'hana-japandi-sofa',
                name: 'Hana Japandi 3-Seater Sofa',
                ageGroup: 'Dewasa & Keluarga',
                category: 'Ruang Keluarga', style: 'Japandi', color: 'Oak Natural',
                styleBadge: 'Japandi Living Room',
                dimP: 210, dimL: 85, dimT: 78,
                material: 'Solid Oak + Cream Boucle Fabric',
                price: 6850000, oldPrice: 7900000,
                weightKg: 54, featuredOnHome: true,
                file3D: 'hana_japandi_3_seater_sofa_3d_studio.html',
                image: imgAsset('hana-japandi-sofa.webp')
            },
            {
                id: 'tori-dining-table',
                name: 'Tori Solid Oak Dining Table',
                ageGroup: 'Dewasa & Keluarga',
                category: 'Ruang Keluarga', style: 'Scandinavian', color: 'Oak Natural',
                styleBadge: 'Scandinavian 6-Seater',
                dimP: 180, dimL: 90, dimT: 75,
                material: '100% Solid White Oak 3.2 cm',
                price: 5250000, oldPrice: 6100000,
                weightKg: 49, featuredOnHome: false,
                file3D: 'tori_solid_oak_dining_table_3d_studio.html',
                image: imgAsset('tori-solid-oak-dining-table-livora.webp')
            },
            {
                id: 'kaia-queen-bed',
                name: 'Kaia Queen Floating Bed',
                ageGroup: 'Dewasa & Keluarga',
                category: 'Kamar Tidur', style: 'Japandi', color: 'Krem Birch',
                styleBadge: 'Japandi Master Bedroom',
                dimP: 160, dimL: 200, dimT: 85,
                material: 'Solid Birch Frame + Linen Headboard',
                price: 6400000, oldPrice: 7350000,
                weightKg: 62, featuredOnHome: false,
                file3D: 'kaia_queen_floating_bed_3d_studio.html',
                image: imgAsset('kaia-queen-floating-bed.webp')
            },

            // 4. LANSIA / ORANG TUA (4 Produk)
            {
                id: 'senja-senior-armchair',
                name: 'Senja Easy-Rise Armchair',
                ageGroup: 'Lansia / Senior',
                category: 'Ruang Keluarga', style: 'Minimalis', color: 'Krem Birch',
                styleBadge: 'Senior Ergonomic Support',
                dimP: 78, dimL: 82, dimT: 96,
                material: 'Birch Armrest Kokoh + Lumbar Support',
                price: 3250000, oldPrice: 3750000,
                weightKg: 21, featuredOnHome: true,
                file3D: 'senja_easy_rise_armchair_3d_studio.html',
                image: imgAsset('senja-easy-rise-armchair.webp')
            },
            {
                id: 'raku-senior-recliner',
                name: 'Raku Senior Wood Recliner',
                ageGroup: 'Lansia / Senior',
                category: 'Ruang Keluarga', style: 'Minimalis', color: 'Krem Birch',
                styleBadge: 'Senior Relaxation',
                dimP: 80, dimL: 88, dimT: 102,
                material: 'Bentwood Birch + Sandaran Leher',
                price: 4150000, oldPrice: 4800000,
                weightKg: 25, featuredOnHome: false,
                file3D: 'raku_senior_wood_recliner_3d_studio.html',
                image: imgAsset('raku-senior-wood-recliner.webp')
            },
            {
                id: 'yumi-bedside-nightstand',
                name: 'Yumi Sensor-LED Nightstand',
                ageGroup: 'Lansia / Senior',
                category: 'Kamar Tidur', style: 'Minimalis', color: 'Krem Birch',
                styleBadge: 'Safe Night Mobility',
                dimP: 50, dimL: 42, dimT: 60,
                material: 'Solid Birch + Sensor Gerak LED',
                price: 1290000, oldPrice: 1550000,
                weightKg: 13, featuredOnHome: false,
                file3D: 'yumi_sensor_led_nightstand_3d_studio.html',
                image: imgAsset('yumi-sensor-led-nightstand.webp')
            },
            {
                id: 'oka-mobility-bench',
                name: 'Oka Grab-Handle Bench',
                ageGroup: 'Lansia / Senior',
                category: 'Ruang Keluarga', style: 'Minimalis', color: 'Oak Natural',
                styleBadge: 'Easy Sit & Stand Bench',
                dimP: 110, dimL: 40, dimT: 48,
                material: 'Solid White Oak + Pegangan Samping',
                price: 1650000, oldPrice: 1950000,
                weightKg: 17, featuredOnHome: false,
                file3D: 'oka_grab_handle_bench_3d_studio.html',
                image: imgAsset('oka-grab-handle-bench.webp')
            }
        ];

        const BUYER_REVIEWS = [
            {
                buyer: 'Keluarga Hendrawan',
                city: 'Jakarta Selatan',
                roomTag: 'Ruang Tamu 4 × 5 m',
                productName: 'Aoki Birch Credenza (180×45×75 cm)',
                rating: '5.0',
                photo: imgAsset('aoki-birch-credenza.webp')
            },
            {
                buyer: 'Dimas Aditya',
                city: 'Semarang',
                roomTag: 'Kamar Kos 3 × 3 m',
                productName: 'Lumina Minimalist Desk (120×60×75 cm)',
                rating: '4.9',
                photo: imgAsset('lumina-minimalist-desk.webp')
            },
            {
                buyer: 'Ibu Ratna (64 Thn)',
                city: 'Bandung',
                roomTag: 'Ruang Baca Keluarga',
                productName: 'Senja Easy-Rise Armchair (78×82×96 cm)',
                rating: '5.0',
                photo: imgAsset('senja-easy-rise-armchair.webp')
            }
        ];

        let currentPage = 'home';
        let catalogViewMode = 'grid';
        let selectedAgeFilter = 'all';
        let catalogSearchText = '';
        let cart = JSON.parse(localStorage.getItem('livora_cart') || '[]');

        const savedLoc = JSON.parse(localStorage.getItem('livora_location') || 'null');
        let currentPostal = savedLoc?.postal || '50275';
        let currentCity = savedLoc?.city || 'Semarang';
        let currentZone = savedLoc?.zone || 'jateng';
        let selectedBentoWeight = 46;

        // State Akun Member: Awalnya Kosong (null) sesuai permintaan
        let currentMember = JSON.parse(localStorage.getItem('livora_member') || 'null');
        let revealObserver = null;

        function formatIDR(num) {
            return 'Rp ' + num.toLocaleString('id-ID');
        }

        function saveLocationState() {
            localStorage.setItem('livora_location', JSON.stringify({
                postal: currentPostal,
                city: currentCity,
                zone: currentZone
            }));
            const hd = document.getElementById('header-postal-display');
            if (hd) hd.textContent = `${currentPostal} • ${currentCity}`;
            const hm = document.getElementById('header-postal-mobile');
            if (hm) hm.textContent = currentPostal;
        }

        /* ----------------------------------------------------------------------
         * 0. ACTIVE NAV TAB SYNC + STICKY GUARD + FLUID SCROLL OBSERVER
         * ---------------------------------------------------------------------- */
        function detectCurrentPageKey() {
            const path = window.location.pathname.toLowerCase();
            if (path.includes('/pages/katalog')) return 'katalog';
            if (path.includes('/pages/inspirasi')) return 'inspirasi';
            if (path.includes('/pages/riwayat')) return 'riwayat';
            if (path.includes('/pages/ongkir')) return 'ongkir';
            if (path.includes('/pages/checkout')) return 'checkout';
            return 'home';
        }

        function syncActiveNavTab() {
            const activeKey = detectCurrentPageKey();
            currentPage = activeKey;

            // Pastikan wrapper navbar selalu sticky di semua halaman (termasuk Beranda)
            const navWrapper = document.querySelector('[data-component="navbar"]');
            if (navWrapper) {
                navWrapper.classList.add('sticky', 'top-0', 'z-40');
            }
            // Ganti overflow-x: hidden pada body menjadi clip agar position: sticky tidak mati
            document.body.style.overflowX = 'clip';

            ['home', 'katalog', 'inspirasi', 'riwayat', 'ongkir'].forEach(p => {
                const isActive = p === activeKey;
                const navBtn = document.getElementById('nav-' + p);
                if (navBtn) {
                    navBtn.className = isActive
                        ? 'nav-tab-btn px-3 lg:px-3.5 py-1.5 rounded-full bg-charcoal-900 text-cream-50 text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap'
                        : 'nav-tab-btn px-3 lg:px-3.5 py-1.5 rounded-full text-charcoal-800 hover:text-charcoal-900 hover:bg-white/60 text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap';

                    const badge = navBtn.querySelector('.nav-count-badge');
                    if (badge) {
                        badge.className = isActive
                            ? 'nav-count-badge text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-white/20 text-cream-50'
                            : 'nav-count-badge text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-oak-200/70 text-oak-900';
                    }
                }

                const mobBtn = document.getElementById('mob-nav-' + p);
                if (mobBtn) {
                    mobBtn.className = isActive
                        ? 'px-3.5 py-1 rounded-full bg-charcoal-900 text-cream-50 font-semibold whitespace-nowrap transition-all'
                        : 'px-3.5 py-1 rounded-full glass-pill text-charcoal-800 whitespace-nowrap transition-all';
                }
            });
        }

        function observeFluidElements() {
            if (!revealObserver) {
                revealObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            revealObserver.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.02, rootMargin: '0px 0px 40px 0px' });
            }

            document.querySelectorAll('.fluid-reveal:not(.is-visible)').forEach((el, idx) => {
                el.style.transitionDelay = `${Math.min((idx % 4) * 35, 120)}ms`;
                revealObserver.observe(el);
            });
        }

        /* ----------------------------------------------------------------------
         * 1. PAGE SWITCHER
         * ---------------------------------------------------------------------- */
        // Teks pencarian per produk: nama, kategori, gaya, warna, + padanan kata Indonesia
        const SEARCH_SYNONYMS = {
            bed: 'kasur ranjang tempat tidur dipan', bunk: 'tingkat susun', desk: 'meja belajar meja kerja',
            chair: 'kursi', armchair: 'kursi sofa single', recliner: 'kursi santai sandaran', wardrobe: 'lemari pakaian baju',
            bookshelf: 'rak buku lemari buku', shelf: 'rak lemari', credenza: 'buffet sideboard lemari rak tv', sofa: 'sofa sofa',
            table: 'meja', dining: 'makan', nightstand: 'nakas meja samping tempat tidur', bench: 'bangku', toy: 'mainan',
            organizer: 'penyimpanan', kids: 'anak', study: 'belajar'
        };
        function searchHaystack(p) {
            const extra = p.name.toLowerCase().split(/\s+/).map(w => SEARCH_SYNONYMS[w] || '').join(' ');
            return [p.name, p.ageGroup, p.category, p.style, p.color, extra].join(' ').toLowerCase();
        }

        // Tandai menu yang aktif sesuai halaman yang sedang dibuka
        // (HTML tiap halaman selalu menandai "Beranda", jadi harus diatur ulang saat dimuat)
        function detectCurrentPage() {
            const m = window.location.pathname.toLowerCase().match(/\/pages\/([a-z0-9-]+)\.html$/);
            return m ? m[1] : 'home';
        }
        function highlightActiveNav() {
            const page = detectCurrentPage();
            currentPage = page;
            ['home', 'katalog', 'ongkir', 'inspirasi', 'checkout', 'riwayat'].forEach(p => {
                const navBtn = document.getElementById('nav-' + p);
                if (navBtn) {
                    navBtn.className = p === page
                        ? 'nav-tab-btn px-4 py-1.5 rounded-full bg-charcoal-900 text-cream-50 text-xs font-semibold transition-all flex items-center gap-1.5'
                        : 'nav-tab-btn px-4 py-1.5 rounded-full text-charcoal-800 hover:text-charcoal-900 text-xs font-medium transition-all flex items-center gap-1.5';
                }
                const mobBtn = document.getElementById('mob-nav-' + p);
                if (mobBtn) {
                    mobBtn.className = p === page
                        ? 'px-3.5 py-1 rounded-full bg-charcoal-900 text-cream-50 font-semibold whitespace-nowrap transition-all'
                        : 'px-3.5 py-1 rounded-full glass-pill text-charcoal-800 whitespace-nowrap transition-all';
                }
            });
        }

        function switchPage(pageKey) {
            const pageFiles = {
                home: SITE_ROOT + 'index.html',
                katalog: SITE_ROOT + 'pages/katalog.html',
                ongkir: SITE_ROOT + 'pages/ongkir.html',
                inspirasi: SITE_ROOT + 'pages/inspirasi.html',
                checkout: SITE_ROOT + 'pages/checkout.html',
                riwayat: SITE_ROOT + 'pages/riwayat.html'
            };
            const target = pageFiles[pageKey];
            if (target) {
                window.location.href = target;
                return;
            }
        }

        /* ----------------------------------------------------------------------
         * 2. APPLE-STYLE MINIMALIST PROMO GRID ON LANDING PAGE
         * ---------------------------------------------------------------------- */
        function renderHomeMinimalShowcase() {
            const container = document.getElementById('home-minimal-showcase');
            if (!container) return;
            const featured = PRODUCTS.filter(p => p.featuredOnHome);

            container.innerHTML = featured.map((p, index) => `
                <article 
                    onclick="switchPage('katalog')"
                    style="transition-delay: ${Math.min(index * 45, 140)}ms"
                    class="fluid-reveal apple-tile glass-card rounded-[32px] pt-8 px-6 pb-6 flex flex-col justify-between items-center text-center cursor-pointer group overflow-hidden"
                >
                    <div class="max-w-md mx-auto">
                        <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-oak-600 block mb-1.5">
                            ${p.ageGroup}
                        </span>
                        <h3 class="text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight">
                            ${p.name}
                        </h3>
                        <p class="mt-1 font-mono text-xs text-oak-700">
                            ${p.dimP} × ${p.dimL} × ${p.dimT} cm &bull; ${formatIDR(p.price)}
                        </p>

                        <div class="mt-4 flex items-center justify-center gap-4 text-xs font-bold">
                            <span class="btn-fluid px-4 py-1.5 rounded-full bg-charcoal-900 text-cream-50 group-hover:bg-oak-700">
                                Buka di Katalog
                            </span>
                            <button 
                                type="button" 
                                onclick="event.stopPropagation(); openProductModal('${p.id}')" 
                                class="text-oak-800 hover:text-charcoal-900 flex items-center gap-1 transition-transform group-hover:translate-x-0.5"
                            >
                                <span>3D & Detail</span>
                                <i class="fa-solid fa-chevron-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                    <div class="w-full h-56 sm:h-64 mt-6 rounded-2xl overflow-hidden bg-cream-200 relative">
                        <img 
                            src="${p.image}" 
                            alt="${p.name}" 
                            loading="lazy"
                            class="apple-tile-img w-full h-full object-cover"
                        >
                        <span class="absolute bottom-3 right-3 glass-pill px-3 py-1 rounded-full font-mono text-[10px] font-bold text-charcoal-900">
                            <i class="fa-solid fa-cube text-oak-600 mr-1"></i>3D Ready
                        </span>
                    </div>
                </article>
            `).join('');
            observeFluidElements();
        }

        /* ----------------------------------------------------------------------
         * 3. FULL CATALOG TAB (16 PRODUCTS WITH CLICK-TO-3D MODAL)
         * ---------------------------------------------------------------------- */
        function createCatalogGridCardHTML(p, idx) {
            return `
                <article 
                    onclick="openProductModal('${p.id}')"
                    style="transition-delay: ${Math.min((idx % 4) * 35, 120)}ms"
                    class="fluid-reveal apple-tile glass-card rounded-[28px] p-4 flex flex-col justify-between cursor-pointer group"
                >
                    <div>
                        <div class="relative h-48 w-full rounded-2xl overflow-hidden bg-cream-200 mb-4">
                            <img src="${p.image}" alt="${p.name}" loading="lazy" decoding="async" class="apple-tile-img w-full h-full object-cover">
                            <span class="absolute top-2.5 left-2.5 glass-pill px-2.5 py-0.5 rounded-full text-[10px] font-bold text-charcoal-900">
                                ${p.ageGroup}
                            </span>
                            <span class="absolute bottom-2.5 right-2.5 glass-dark text-cream-50 px-2.5 py-1 rounded-full text-[10px] font-semibold flex items-center gap-1">
                                <i class="fa-solid fa-cube text-oak-300"></i> 3D View
                            </span>
                        </div>

                        <div class="px-1 text-center">
                            <h3 class="text-base font-extrabold text-charcoal-900 group-hover:text-oak-700 transition-colors line-clamp-1">
                                ${p.name}
                            </h3>
                            <p class="font-mono text-[11px] font-semibold text-oak-700 mt-1">
                                ${p.dimP} × ${p.dimL} × ${p.dimT} cm
                            </p>
                        </div>
                    </div>

                    <div class="mt-4 pt-3 border-t border-oak-200/60 flex items-center justify-between px-1" onclick="event.stopPropagation();">
                        <span class="font-mono text-sm font-extrabold text-charcoal-900">${formatIDR(p.price)}</span>
                        <div class="flex items-center gap-1.5">
                            <button 
                                type="button" 
                                onclick="openProductModal('${p.id}')" 
                                class="px-3 py-1.5 rounded-full glass-pill hover:bg-white text-charcoal-900 text-[11px] font-bold"
                            >
                                3D
                            </button>
                            <button 
                                type="button" 
                                onclick="addToCart('${p.id}')" 
                                class="btn-fluid px-3 py-1.5 rounded-full bg-charcoal-900 hover:bg-oak-700 text-cream-50 text-[11px] font-bold"
                            >
                                + Beli
                            </button>
                        </div>
                    </div>
                </article>
            `;
        }

        function createCatalogRowCardHTML(p, idx) {
            return `
                <article 
                    onclick="openProductModal('${p.id}')"
                    style="transition-delay: ${Math.min((idx % 4) * 35, 120)}ms"
                    class="fluid-reveal glass-card rounded-[26px] p-4 sm:p-5 cursor-pointer group"
                >
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                        <div class="lg:col-span-3 h-36 rounded-2xl overflow-hidden bg-cream-200 relative">
                            <img src="${p.image}" alt="${p.name}" loading="lazy" decoding="async" class="apple-tile-img w-full h-full object-cover">
                            <span class="absolute bottom-2 right-2 glass-dark text-cream-50 px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
                                <i class="fa-solid fa-cube text-oak-300 mr-1"></i>3D Interaktif
                            </span>
                        </div>
                        <div class="lg:col-span-6 space-y-1.5">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-oak-700">${p.ageGroup} &bull; ${p.styleBadge}</span>
                            <h3 class="text-lg font-extrabold text-charcoal-900">${p.name}</h3>
                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill font-mono text-xs font-extrabold text-charcoal-900">
                                P×L×T: ${p.dimP} × ${p.dimL} × ${p.dimT} cm
                            </div>
                        </div>
                        <div class="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between gap-2" onclick="event.stopPropagation();">
                            <span class="font-mono text-lg font-extrabold text-charcoal-900">${formatIDR(p.price)}</span>
                            <div class="flex gap-2">
                                <button type="button" onclick="openProductModal('${p.id}')" class="px-3.5 py-2 rounded-full glass-pill text-xs font-bold text-charcoal-900">Buka 3D</button>
                                <button type="button" onclick="addToCart('${p.id}')" class="btn-fluid px-4 py-2 rounded-full bg-charcoal-900 text-cream-50 text-xs font-bold">+ Keranjang</button>
                            </div>
                        </div>
                    </div>
                </article>
            `;
        }

        function renderFullCatalogPage() {
            const container = document.getElementById('full-catalog-container');
            if (!container) return;
            const q = catalogSearchText.toLowerCase().trim();
            const filtered = PRODUCTS.filter(p => {
                const matchAge = selectedAgeFilter === 'all' || p.ageGroup === selectedAgeFilter;
                const matchCat = catFilter === 'all' || p.category === catFilter;
                const matchStyle = styleFilter === 'all' || p.style === styleFilter;
                const matchColor = colorFilter === 'all' || p.color === colorFilter;
                const matchPrice = !maxPriceFilter || p.price <= maxPriceFilter;
                const matchLength = !maxLengthFilter || p.dimP <= maxLengthFilter;
                const matchSearch = !q ||
                    searchHaystack(p).includes(q) ||
                    `${p.dimP}x${p.dimL}x${p.dimT}`.includes(q.replace(/\s+/g, ''));
                return matchAge && matchCat && matchStyle && matchColor && matchPrice && matchLength && matchSearch;
            });

            const countEl = document.getElementById('catalog-result-count');
            if (countEl) countEl.textContent = `Menampilkan ${filtered.length} dari ${PRODUCTS.length} produk`;

            if (!filtered.length) {
                container.className = 'grid grid-cols-1 gap-6';
                container.innerHTML = '<div class="glass-card rounded-2xl p-8 text-center text-sm text-oak-700">Tidak ada produk yang cocok dengan filter. Coba longgarkan ukuran atau harga, atau tekan Reset filter.</div>';
                return;
            }
            if (catalogViewMode === 'grid') {
                container.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6';
                container.innerHTML = filtered.map((p, i) => createCatalogGridCardHTML(p, i)).join('');
            } else {
                container.className = 'space-y-3.5';
                container.innerHTML = filtered.map((p, i) => createCatalogRowCardHTML(p, i)).join('');
            }
            setTimeout(observeFluidElements, 20);
        }

        function initCatalogFilters() {
            if (!document.getElementById('catalog-adv-filters')) return;
            const fill = (id, key, label) => {
                const el = document.getElementById(id); if (!el) return;
                const vals = [...new Set(PRODUCTS.map(p => p[key]))].sort();
                el.innerHTML = `<option value="all">${label}</option>` + vals.map(v => `<option value="${v}">${v} (${PRODUCTS.filter(p => p[key] === v).length})</option>`).join('');
            };
            fill('flt-cat', 'category', 'Semua kategori');
            fill('flt-style', 'style', 'Semua gaya');
            fill('flt-color', 'color', 'Semua warna');
        }

        function onCatalogAdvFilter() {
            const v = id => { const el = document.getElementById(id); return el ? el.value : 'all'; };
            catFilter = v('flt-cat');
            styleFilter = v('flt-style');
            colorFilter = v('flt-color');
            maxPriceFilter = Number(v('flt-price')) || 0;
            maxLengthFilter = Number(v('flt-length')) || 0;
            renderFullCatalogPage();
        }

        function resetCatalogFilters() {
            ['flt-cat', 'flt-style', 'flt-color'].forEach(id => { const el = document.getElementById(id); if (el) el.value = 'all'; });
            ['flt-price', 'flt-length'].forEach(id => { const el = document.getElementById(id); if (el) el.value = '0'; });
            const s = document.querySelector('#page-katalog input[type="text"], input[oninput^="onCatalogSearchInput"]');
            if (s) s.value = '';
            catalogSearchText = '';
            onCatalogAdvFilter();
            filterCatalogByAge('all');
        }

        function filterCatalogByAge(ageKey) {
            selectedAgeFilter = ageKey;
            document.querySelectorAll('.age-filter-btn').forEach(btn => {
                const active = btn.getAttribute('data-age') === ageKey;
                btn.className = active
                    ? 'age-filter-btn px-4 py-2 rounded-full bg-charcoal-900 text-cream-50 text-xs font-bold whitespace-nowrap transition-all'
                    : 'age-filter-btn px-4 py-2 rounded-full hover:bg-white/70 text-charcoal-800 text-xs font-semibold whitespace-nowrap transition-all';
            });
            renderFullCatalogPage();
        }

        function setCatalogViewMode(mode) {
            catalogViewMode = mode;
            const gridBtn = document.getElementById('view-grid-btn');
            const rowBtn = document.getElementById('view-row-btn');
            if (gridBtn) {
                gridBtn.className = mode === 'grid'
                    ? 'px-3 py-1.5 rounded-full bg-charcoal-900 text-cream-50 text-xs font-bold'
                    : 'px-3 py-1.5 rounded-full glass-pill text-charcoal-800 text-xs font-semibold';
            }
            if (rowBtn) {
                rowBtn.className = mode === 'row'
                    ? 'px-3 py-1.5 rounded-full bg-charcoal-900 text-cream-50 text-xs font-bold'
                    : 'px-3 py-1.5 rounded-full glass-pill text-charcoal-800 text-xs font-semibold';
            }
            renderFullCatalogPage();
        }

        function onCatalogSearchInput(val) {
            catalogSearchText = val;
            renderFullCatalogPage();
        }

        /* ----------------------------------------------------------------------
         * 4. MINIMALIST REAL BUYER REVIEWS WITH FROSTED GLASS OVERLAY
         * ---------------------------------------------------------------------- */
        function renderTestimonials() {
            const html = BUYER_REVIEWS.map((r, idx) => `
                <div style="transition-delay: ${Math.min(idx * 55, 140)}ms" class="fluid-reveal apple-tile relative h-80 rounded-[28px] overflow-hidden glass-card p-2 group">
                    <div class="relative w-full h-full rounded-[22px] overflow-hidden">
                        <img src="${r.photo}" alt="${r.productName}" loading="lazy" decoding="async" class="apple-tile-img w-full h-full object-cover">
                        <span class="absolute top-3 left-3 glass-pill px-3 py-1 rounded-full font-mono text-[10px] font-bold text-charcoal-900">
                            ${r.roomTag}
                        </span>
                        <div class="absolute bottom-3 left-3 right-3 glass-card rounded-2xl p-3.5 flex items-center justify-between">
                            <div>
                                <span class="text-xs font-extrabold text-charcoal-900 block">${r.buyer} &bull; ${r.city}</span>
                                <span class="text-[11px] text-oak-800 font-medium">${r.productName}</span>
                            </div>
                            <span class="px-2.5 py-1 rounded-full bg-charcoal-900 text-amber-400 font-mono text-xs font-bold shrink-0">
                                ★ ${r.rating}
                            </span>
                        </div>
                    </div>
                </div>
            `).join('');

            const homeGrid = document.getElementById('home-testimonials-grid');
            const inspirationGrid = document.getElementById('inspirasi-page-grid');
            if (homeGrid) homeGrid.innerHTML = html;
            if (inspirationGrid) inspirationGrid.innerHTML = html;
            observeFluidElements();
        }

        /* ----------------------------------------------------------------------
         * 5. SEPARATE 3D FILE LAUNCHER MODAL, MEMBER REGISTRATION & CART LOGIC
         * ---------------------------------------------------------------------- */
        function syncBodyScrollLock() {
            const anyOpen = document.querySelector('.modal-backdrop-anim.is-open');
            document.body.style.overflowY = anyOpen ? 'hidden' : '';
        }

        function openAnimatedModal(modalId) {
            const modal = document.getElementById(modalId);
            if (!modal) return;
            modal.classList.remove('hidden');
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal.classList.add('is-open');
                    syncBodyScrollLock();
                });
            });
        }

        function closeAnimatedModal(modalId) {
            const modal = document.getElementById(modalId);
            if (!modal) return;
            modal.classList.remove('is-open');
            syncBodyScrollLock();
            setTimeout(() => {
                if (!modal.classList.contains('is-open')) {
                    modal.classList.add('hidden');
                }
            }, 380);
        }

        let activeModalProduct = null;

        function renderDimDiagram(p) {
            const el = document.getElementById('modal-dim-diagram');
            if (!el) return;
            const fs = Math.min(150 / p.dimP, 80 / p.dimT);
            const ts = Math.min(150 / p.dimP, 80 / p.dimL);
            const fw = p.dimP * fs, fh = p.dimT * fs, tw = p.dimP * ts, th = p.dimL * ts;
            const ox = 28, oy = 14, ox2 = 214;
            const stroke = '#6E4B2A', fill = '#E6CFAF', txt = '#52371F';
            el.innerHTML = `
                <svg viewBox="0 0 380 130" class="w-full max-w-[380px]" role="img" aria-label="Diagram dimensi ${p.dimP} x ${p.dimL} x ${p.dimT} cm">
                    <text x="${ox}" y="10" font-size="9" fill="${txt}" font-family="sans-serif" font-weight="700">TAMPAK DEPAN</text>
                    <rect x="${ox}" y="${oy}" width="${fw}" height="${fh}" fill="${fill}" stroke="${stroke}" stroke-width="1.5" rx="3"/>
                    <text x="${ox + fw / 2}" y="${oy + fh + 13}" font-size="10" fill="${txt}" text-anchor="middle" font-family="monospace" font-weight="700">P ${p.dimP} cm</text>
                    <text x="${ox + fw + 6}" y="${oy + fh / 2 + 3}" font-size="10" fill="${txt}" font-family="monospace" font-weight="700">T ${p.dimT}</text>
                    <text x="${ox2}" y="10" font-size="9" fill="${txt}" font-family="sans-serif" font-weight="700">TAMPAK ATAS</text>
                    <rect x="${ox2}" y="${oy}" width="${tw}" height="${th}" fill="${fill}" stroke="${stroke}" stroke-width="1.5" rx="3" stroke-dasharray="4 2"/>
                    <text x="${ox2 + tw / 2}" y="${oy + th + 13}" font-size="10" fill="${txt}" text-anchor="middle" font-family="monospace" font-weight="700">P ${p.dimP} cm</text>
                    <text x="${ox2 + tw + 6}" y="${oy + th / 2 + 3}" font-size="10" fill="${txt}" font-family="monospace" font-weight="700">L ${p.dimL}</text>
                </svg>`;
            const hint = document.getElementById('modal-dim-hint');
            if (hint) hint.textContent = `Ilustrasi (tidak skala antar-tampak). Ukur ruangan dulu: butuh area minimal ${p.dimP} × ${p.dimL} cm.`;
        }

        function updateModalPrice() {
            const p = activeModalProduct; if (!p) return;
            const a = document.getElementById('modal-addon-assembly');
            const w = document.getElementById('modal-addon-woodpack');
            const extra = (a && a.checked ? ASSEMBLY_FEE : 0) + (w && w.checked ? WOODPACK_FEE : 0);
            document.getElementById('modal-prod-price').textContent = formatIDR(p.price + extra);
            const note = document.getElementById('modal-price-note');
            if (note) note.textContent = extra ? `Termasuk add-on ${formatIDR(extra)}` : 'Belum termasuk ongkir';
        }

        function updateModalShipping() {
            const p = activeModalProduct; if (!p) return;
            const inp = document.getElementById('modal-postal-input');
            const val = (inp && inp.value.trim()) || `${currentPostal} ${currentCity}`;
            const rate = ZONE_RATES[detectZoneFromInput(val)] || ZONE_RATES.jateng;
            const cost = Math.ceil((p.weightKg * rate.basePerKg) / 5000) * 5000;
            document.getElementById('modal-ship-dest').textContent = `Tujuan: ${val} · ${p.weightKg} kg`;
            document.getElementById('modal-ship-price').textContent = formatIDR(cost);
            document.getElementById('modal-ship-eta').textContent = `Estimasi tiba ${rate.eta}`;
        }

        function starsText(n) { return '★'.repeat(Math.round(Number(n) || 0)); }

        function renderModalReviews(p) {
            const box = document.getElementById('modal-reviews');
            if (!box) return;
            const badge = '<span class="inline-block px-2 py-0.5 rounded-full bg-sage-100 text-sage-700 text-[9px] font-bold">✓ Verified Purchase</span>';
            const seed = BUYER_REVIEWS.filter(r => r.productName.startsWith(p.name)).map(r => ({
                buyer: r.buyer + ' • ' + r.city, rating: r.rating, photo: r.photo, text: r.roomTag
            }));
            const mine = getUserReviews().filter(r => r.productId === p.id).map(r => ({
                buyer: r.buyer, rating: r.rating, photo: '', text: r.text
            }));
            const all = [...mine, ...seed];
            box.innerHTML = all.length ? all.map(r => `
                <div class="flex gap-2.5 items-start py-2 border-b border-oak-200/60 last:border-0">
                    ${r.photo ? `<img src="${r.photo}" alt="Foto ulasan ${escapeHTML(p.name)}" loading="lazy" class="w-14 h-14 rounded-xl object-cover shrink-0">` : ''}
                    <div class="min-w-0">
                        <div class="text-xs font-bold text-charcoal-900">${escapeHTML(r.buyer)} <span class="text-amber-500">${starsText(r.rating)}</span></div>
                        <div class="text-[11px] text-oak-800 break-words">${escapeHTML(r.text)}</div>
                        <div class="mt-1">${badge}</div>
                    </div>
                </div>`).join('') : '<p class="text-[11px] text-oak-700">Belum ada ulasan untuk produk ini.</p>';

            const formBox = document.getElementById('modal-review-form');
            if (!formBox) return;
            const bought = getOrderStore().some(o => o.items.some(i => i.productId === p.id));
            formBox.innerHTML = bought ? `
                <div class="mt-3 pt-3 border-t border-oak-200/70 space-y-2">
                    <span class="block text-[11px] font-bold text-charcoal-900">Tulis ulasan (kamu pernah membeli produk ini)</span>
                    <select id="review-rating" class="w-full px-3 py-2 rounded-full bg-white/80 border border-oak-200 text-xs">
                        <option value="5">★★★★★ — Sangat puas</option><option value="4">★★★★ — Puas</option>
                        <option value="3">★★★ — Cukup</option><option value="2">★★ — Kurang</option><option value="1">★ — Kecewa</option>
                    </select>
                    <textarea id="review-text" rows="2" maxlength="200" placeholder="Ceritakan kondisi barang saat tiba, warna, dan ukurannya" class="w-full px-3 py-2 rounded-2xl bg-white/80 border border-oak-200 text-xs"></textarea>
                    <button type="button" onclick="submitProductReview()" class="px-4 py-2 rounded-full bg-charcoal-900 text-cream-50 text-xs font-bold">Kirim ulasan</button>
                </div>` : '<p class="mt-2 text-[10px] text-oak-700">Ulasan hanya bisa ditulis pembeli produk ini (pesanan tercatat di Riwayat).</p>';
        }

        const REVIEW_KEY = 'livora_reviews';
        function getUserReviews() { try { return JSON.parse(localStorage.getItem(REVIEW_KEY) || '[]'); } catch (e) { return []; } }
        function submitProductReview() {
            const p = activeModalProduct; if (!p) return;
            const text = (document.getElementById('review-text').value || '').trim();
            if (!text) { showToast('Tulis dulu isi ulasannya'); return; }
            const order = getOrderStore().slice().reverse().find(o => o.items.some(i => i.productId === p.id));
            if (!order) return;
            const list = getUserReviews();
            list.push({ productId: p.id, buyer: order.customer.name, rating: document.getElementById('review-rating').value, text, createdAt: new Date().toISOString() });
            localStorage.setItem(REVIEW_KEY, JSON.stringify(list));
            renderModalReviews(p);
            showToast('Ulasan terkirim. Terima kasih!');
        }

        function openProductModal(productId) {
            const p = PRODUCTS.find(item => item.id === productId) || PRODUCTS[0];
            activeModalProduct = p;
            document.getElementById('modal-prod-age').textContent = p.ageGroup;
            document.getElementById('modal-prod-cat').textContent = `${p.category} · ${p.style}`;
            document.getElementById('modal-prod-title').textContent = p.name;
            document.getElementById('modal-prod-img').src = p.image;
            document.getElementById('modal-dim-p').textContent = `${p.dimP} cm`;
            document.getElementById('modal-dim-l').textContent = `${p.dimL} cm`;
            document.getElementById('modal-dim-t').textContent = `${p.dimT} cm`;
            document.getElementById('modal-weight').textContent = `${p.weightKg} kg`;
            document.getElementById('modal-material').textContent = p.material;
            document.getElementById('modal-3d-filename').textContent = 'segera hadir';

            document.getElementById('modal-launch-3d-btn').onclick = () => {
                sessionStorage.setItem('livora_return_product', p.id);
                const folder3D = window.location.hostname.includes('github.io')
                    ? `${SITE_ROOT}public/3d-studio/`
                    : `${SITE_ROOT}3d-studio/`;
                window.location.href = `${folder3D}${p.file3D}`;
            };

            const a = document.getElementById('modal-addon-assembly');
            const w = document.getElementById('modal-addon-woodpack');
            if (a) a.checked = false;
            if (w) w.checked = false;
            const af = document.getElementById('modal-addon-assembly-fee'); if (af) af.textContent = `+${formatIDR(ASSEMBLY_FEE)}`;
            const wf = document.getElementById('modal-addon-woodpack-fee'); if (wf) wf.textContent = `+${formatIDR(WOODPACK_FEE)}`;
            const inp = document.getElementById('modal-postal-input'); if (inp) inp.value = `${currentPostal} - ${currentCity}`;

            renderDimDiagram(p);
            updateModalPrice();
            updateModalShipping();
            renderModalReviews(p);

            document.getElementById('modal-add-cart-btn').onclick = () => {
                addToCart(p.id, { assembly: a && a.checked, woodPack: w && w.checked });
                closeProductModal();
            };

            openAnimatedModal('product-detail-modal');
        }

        function closeProductModal() {
            closeAnimatedModal('product-detail-modal');
        }

        /* ----------------------------------------------------------------------
         * MEMBER / ACCOUNT MODAL LOGIC (INITIALLY EMPTY)
         * ---------------------------------------------------------------------- */
        function getInitials(fullName) {
            const parts = fullName.trim().split(/\s+/);
            if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
            return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        }

        function syncMemberUI() {
            const avatarIcon = document.getElementById('profile-avatar-icon');
            const labelText = document.getElementById('profile-label-text');
            const onlineDot = document.getElementById('profile-online-dot');
            const subtitle = document.getElementById('member-modal-subtitle');
            const regForm = document.getElementById('member-register-form');
            const activeCard = document.getElementById('member-active-card');
            if (!avatarIcon || !labelText || !onlineDot || !subtitle || !regForm || !activeCard) return;

            if (!currentMember) {
                avatarIcon.innerHTML = `<i class="fa-regular fa-user text-xs text-oak-700"></i>`;
                labelText.textContent = 'Daftar';
                onlineDot.classList.add('hidden');
                subtitle.textContent = 'Belum terdaftar • Masukkan nama & email';
                regForm.classList.remove('hidden');
                activeCard.classList.add('hidden');
            } else {
                const initials = getInitials(currentMember.name);
                avatarIcon.innerHTML = `<span class="w-5 h-5 rounded-full bg-charcoal-900 text-cream-50 text-[10px] font-extrabold flex items-center justify-center">${initials}</span>`;
                labelText.textContent = currentMember.name.split(' ')[0];
                onlineDot.classList.remove('hidden');
                subtitle.textContent = 'Member Terverifikasi Livora';
                regForm.classList.add('hidden');
                activeCard.classList.remove('hidden');

                document.getElementById('member-card-initials').textContent = initials;
                document.getElementById('member-card-name').textContent = currentMember.name;
                document.getElementById('member-card-email').textContent = currentMember.email;
                document.getElementById('member-card-id').textContent = currentMember.memberId;
            }
        }

        function openMemberModal() {
            syncMemberUI();
            openAnimatedModal('member-modal');
        }

        function closeMemberModal() {
            closeAnimatedModal('member-modal');
        }

        function editMemberProfile() {
            if (currentMember) {
                document.getElementById('member-name-input').value = currentMember.name;
                document.getElementById('member-email-input').value = currentMember.email;
            }
            document.getElementById('member-register-form').classList.remove('hidden');
            document.getElementById('member-active-card').classList.add('hidden');
            document.getElementById('member-modal-subtitle').textContent = 'Perbarui nama & email member';
        }

        function logoutMemberProfile() {
            currentMember = null;
            localStorage.removeItem('livora_member');
            document.getElementById('member-name-input').value = '';
            document.getElementById('member-email-input').value = '';
            syncMemberUI();
            showToast('Akun member dikosongkan');
        }

        function openCartDrawer() {
            renderCartDrawer();
            openAnimatedModal('cart-drawer-backdrop');
        }

        function closeCartDrawer() {
            closeAnimatedModal('cart-drawer-backdrop');
        }

        const ZONE_RATES = {
            jateng: { basePerKg: 2300, eta: '1 - 2 Hari', jtrAdd: 15000, gokilAdd: 10000 },
            jogja: { basePerKg: 2500, eta: '1 - 2 Hari', jtrAdd: 16000, gokilAdd: 12000 },
            jabar: { basePerKg: 3400, eta: '2 - 3 Hari', jtrAdd: 22000, gokilAdd: 18000 },
            jabodetabek: { basePerKg: 3600, eta: '2 - 3 Hari', jtrAdd: 25000, gokilAdd: 19000 },
            jatim: { basePerKg: 3100, eta: '2 - 3 Hari', jtrAdd: 20000, gokilAdd: 15000 },
            bali: { basePerKg: 4800, eta: '3 - 5 Hari', jtrAdd: 35000, gokilAdd: 28000 }
        };

        function populateOngkirProductSelect() {
            const sel = document.getElementById('ongkir-product-select');
            if (!sel) return;
            sel.innerHTML = PRODUCTS.map(p => `
                <option value="${p.id}" ${p.id === 'aoki-credenza' ? 'selected' : ''}>
                    ${p.name} (${p.dimP}×${p.dimL}×${p.dimT} cm • ${p.weightKg} kg)
                </option>
            `).join('');
        }

        function onSelectOngkirProduct(prodId) {
            const p = PRODUCTS.find(x => x.id === prodId);
            if (p) {
                selectedBentoWeight = p.weightKg;
                updateBentoShippingCalculator();
            }
        }

        function detectZoneFromInput(text) {
            const val = text.toLowerCase();
            if (val.startsWith('55') || val.includes('jogja') || val.includes('yogyakarta')) return 'jogja';
            if (/^5[0-9]/.test(val) || ['semarang', 'solo', 'surakarta', 'klaten', 'sukoharjo', 'karanganyar', 'magelang', 'salatiga'].some(k => val.includes(k))) return 'jateng';
            if (val.startsWith('40') || val.includes('bandung')) return 'jabar';
            if (val.startsWith('1') || val.includes('jakarta')) return 'jabodetabek';
            if (val.startsWith('6') || val.includes('surabaya')) return 'jatim';
            if (val.startsWith('8') || val.includes('bali')) return 'bali';
            return 'jabodetabek';
        }

        function updateBentoShippingCalculator() {
            const postalInput = document.getElementById('bento-postal-input');
            if (!postalInput) return;
            const destInput = postalInput.value || `${currentPostal} - ${currentCity}`;
            currentZone = detectZoneFromInput(destInput);
            saveLocationState();

            const rateInfo = ZONE_RATES[currentZone] || ZONE_RATES.jateng;
            const withAssembly = document.getElementById('bento-assembly-toggle').checked;

            const rawEcoCost = Math.ceil((selectedBentoWeight * rateInfo.basePerKg) / 5000) * 5000;
            const assemblyFee = withAssembly ? 85000 : 0;
            const totalBest = rawEcoCost + assemblyFee;

            document.getElementById('bento-dest-summary').textContent = `Tujuan: ${destInput} • Beban: ${selectedBentoWeight} kg`;
            document.getElementById('bento-eta-badge').textContent = rateInfo.eta;
            document.getElementById('bento-best-price').textContent = formatIDR(totalBest);
            document.getElementById('bento-assembly-note').textContent = withAssembly ? '✓ Termasuk Jasa Rakit (+Rp 85.000)' : 'Tanpa jasa rakit';

            document.getElementById('jtr-price').textContent = formatIDR(rawEcoCost + rateInfo.jtrAdd + assemblyFee);
            document.getElementById('gokil-price').textContent = formatIDR(rawEcoCost + rateInfo.gokilAdd + assemblyFee);
            renderCartDrawer();
        }

        function showToast(msg) {
            const toast = document.getElementById('toast-notification');
            if (!toast) return;
            document.getElementById('toast-message').textContent = msg;
            toast.classList.remove('hidden');
            clearTimeout(window._toastTimer);
            window._toastTimer = setTimeout(() => toast.classList.add('hidden'), 2600);
        }

        function addToCart(productId, opts) {
            opts = opts || {};
            const item = { productId, qty: 1, assembly: !!opts.assembly, woodPack: !!opts.woodPack };
            const existing = cart.find(i => lineKey(i) === lineKey(item));
            if (existing) existing.qty += 1; else cart.push(item);
            const prod = PRODUCTS.find(p => p.id === productId);
            saveCart();
            renderCartDrawer();
            const extra = [item.assembly ? 'rakit' : '', item.woodPack ? 'packing kayu' : ''].filter(Boolean).join(' + ');
            showToast(`${prod.name}${extra ? ' (' + extra + ')' : ''} ditambahkan ke keranjang`);
        }

        function updateCartQty(key, delta) {
            const idx = cart.findIndex(i => lineKey(i) === key);
            if (idx > -1) {
                cart[idx].qty += delta;
                if (cart[idx].qty <= 0) cart.splice(idx, 1);
                saveCart();
                renderCartDrawer();
            }
        }

        function toggleCartAddon(key, which) {
            const it = cart.find(i => lineKey(i) === key);
            if (!it) return;
            it[which] = !it[which];
            cart = normalizeCart(cart);
            saveCart();
            renderCartDrawer();
        }

        function renderCartDrawer() {
            // Bersihkan item invalid jika ada data lama
            cart = cart.filter(item => PRODUCTS.some(prod => prod.id === item.productId));
            const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

            const badge = document.getElementById('cart-count-badge');
            if (badge) badge.textContent = totalItems;

            const postalEl = document.getElementById('cart-drawer-postal');
            if (postalEl) postalEl.innerHTML = `Tujuan: <strong>${currentPostal} (${currentCity})</strong>`;

            const container = document.getElementById('cart-items-container');
            if (!container) return;

            if (cart.length === 0) {
                container.innerHTML = `<div class="text-center py-10 text-oak-700 text-xs">Keranjang masih kosong.</div>`;
                const subEl = document.getElementById('cart-subtotal');
                const shipEl = document.getElementById('cart-shipping');
                const totalEl = document.getElementById('cart-grand-total');
                if (subEl) subEl.textContent = 'Rp 0';
                if (shipEl) shipEl.textContent = 'Rp 0';
                if (totalEl) totalEl.textContent = 'Rp 0';
                return;
            }

            container.innerHTML = cart.map(item => {
                const p = PRODUCTS.find(prod => prod.id === item.productId);
                const k = lineKey(item);
                return `
                    <div class="p-3 rounded-2xl glass-pill">
                        <div class="flex items-center justify-between gap-3">
                            <img src="${p.image}" alt="${p.name}" loading="lazy" decoding="async" class="w-12 h-12 rounded-xl object-cover shrink-0">
                            <div class="flex-1 min-w-0">
                                <h4 class="text-xs font-extrabold text-charcoal-900 truncate">${p.name}</h4>
                                <span class="block font-mono text-[10px] text-oak-700">${p.dimP}×${p.dimL}×${p.dimT} cm</span>
                                <span class="block font-mono text-xs font-bold text-charcoal-900">${formatIDR(p.price)}</span>
                            </div>
                            <div class="flex items-center gap-1.5">
                                <button onclick="updateCartQty('${k}', -1)" class="w-6 h-6 rounded-full bg-cream-200 font-bold text-xs" aria-label="Kurangi jumlah">-</button>
                                <span class="font-mono text-xs font-bold w-4 text-center">${item.qty}</span>
                                <button onclick="updateCartQty('${k}', 1)" class="w-6 h-6 rounded-full bg-cream-200 font-bold text-xs" aria-label="Tambah jumlah">+</button>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[10px] text-oak-800">
                            <label class="inline-flex items-center gap-1.5 cursor-pointer">
                                <input type="checkbox" ${item.assembly ? 'checked' : ''} onchange="toggleCartAddon('${k}', 'assembly')">
                                Rakit di lokasi (+${formatIDR(ASSEMBLY_FEE)}/unit)
                            </label>
                            <label class="inline-flex items-center gap-1.5 cursor-pointer">
                                <input type="checkbox" ${item.woodPack ? 'checked' : ''} onchange="toggleCartAddon('${k}', 'woodPack')">
                                Packing kayu (+${formatIDR(WOODPACK_FEE)}/unit)
                            </label>
                        </div>
                    </div>
                `;
            }).join('');

            const t = getCartTotals();
            document.getElementById('cart-subtotal').textContent = formatIDR(t.subtotal);
            if (addonsRow) {
                addonsRow.classList.toggle('hidden', !t.addons);
                const ad = document.getElementById('cart-addons'); if (ad) ad.textContent = formatIDR(t.addons);
            }
            document.getElementById('cart-shipping').textContent = formatIDR(t.shipping);
            document.getElementById('cart-grand-total').textContent = formatIDR(t.total);
        }

        /* CHECKOUT + ORDER HISTORY (prototype tanpa backend/API) */
        let activeInvoice = null;
        const getOrderStore = () => JSON.parse(localStorage.getItem('livora_orders') || '[]');
        const saveOrderStore = orders => localStorage.setItem('livora_orders', JSON.stringify(orders));

        function getCartTotals() {
            let subtotal = 0, weight = 0;
            cart.forEach(item => {
                const p = PRODUCTS.find(x => x.id === item.productId);
                if (p) { subtotal += p.price * item.qty; weight += p.weightKg * item.qty; }
            });
            const rate = ZONE_RATES[currentZone] || ZONE_RATES.jateng;
            const shipping = cart.length ? Math.ceil((weight * rate.basePerKg) / 5000) * 5000 : 0;
            return { subtotal, shipping, total: subtotal + shipping, weight };
        }

        function prepareCheckout() {
            const form = document.getElementById('checkout-form');
            if (!form) return;
            const t = getCartTotals();
            document.getElementById('checkout-summary').innerHTML = cart.map(item => {
                const p = PRODUCTS.find(x => x.id === item.productId);
                return `<div class="d-flex justify-content-between gap-2 py-2 border-bottom"><span>${p.name} × ${item.qty}</span><strong>${formatIDR(p.price * item.qty)}</strong></div>`;
            }).join('');
            document.getElementById('checkout-subtotal').textContent = formatIDR(t.subtotal);
            document.getElementById('checkout-shipping').textContent = formatIDR(t.shipping);
            document.getElementById('checkout-total').textContent = formatIDR(t.total);
            if (currentMember) {
                form.elements.name.value = currentMember.name;
                form.elements.email.value = currentMember.email;
            }
            form.elements.postal.value = currentPostal;
        }

        function renderOrderHistory() {
            const target = document.getElementById('order-history-list'), orders = getOrderStore();
            if (!target) return;
            if (!orders.length) {
                target.innerHTML = '<div class="alert alert-light border">Belum ada pesanan. Pesanan yang dibuat di perangkat ini akan muncul di sini.</div>';
                return;
            }
            target.innerHTML = orders.slice().reverse().map(o => `<div class="border rounded-3 p-3 mb-3 bg-white bg-opacity-75">
              <div class="d-flex flex-wrap justify-content-between gap-2"><strong>${o.id}</strong><span class="badge text-bg-warning">${o.status}</span></div>
              <div class="small text-secondary">${new Date(o.createdAt).toLocaleString('id-ID')} · ${o.customer.name}</div>
              <div class="mt-2">${o.items.map(i => `${i.name} × ${i.qty}`).join(', ')}</div>
              <div class="d-flex justify-content-between mt-2"><strong>${formatIDR(o.total)}</strong><button class="btn btn-sm btn-outline-dark" onclick="showInvoice('${o.id}')">Lihat invoice</button></div>
            </div>`).join('');
        }

        function showInvoice(orderId) {
            const order = getOrderStore().find(o => o.id === orderId);
            if (!order) return;
            activeInvoice = order;
            document.getElementById('invoice-content').innerHTML = `
              <div class="d-flex justify-content-between"><div><h3 class="h5 fw-bold">LIVORA</h3><div class="small text-secondary">Light Wood Minimalist Marketplace</div></div><div class="text-end small"><strong>${order.id}</strong><br>${new Date(order.createdAt).toLocaleString('id-ID')}</div></div><hr>
              <h4 class="h6 fw-bold">Tagihan kepada</h4><div>${order.customer.name}<br>${order.customer.email}<br>${order.customer.phone}<br>${order.customer.address}, ${order.customer.postal}</div><hr>
              ${order.items.map(i => `<div class="d-flex justify-content-between py-1"><span>${i.name} × ${i.qty}</span><strong>${formatIDR(i.price * i.qty)}</strong></div>`).join('')}
              <hr><div class="d-flex justify-content-between"><span>Subtotal</span><strong>${formatIDR(order.subtotal)}</strong></div><div class="d-flex justify-content-between"><span>Ongkir (estimasi)</span><strong>${formatIDR(order.shipping)}</strong></div><div class="d-flex justify-content-between fs-5 mt-2"><strong>Total</strong><strong>${formatIDR(order.total)}</strong></div>
              <div class="alert alert-warning mt-3 small">Metode: ${order.payment}. Status: ${order.status}. Ini invoice simulasi; pembayaran belum diverifikasi dan nomor VA/QRIS bukan nomor aktif.</div>`;
            openAnimatedModal('invoice-modal');
        }

        function closeInvoice() { closeAnimatedModal('invoice-modal'); }

        function copyInvoice() {
            if (!activeInvoice) return;
            const o = activeInvoice, txt = `LIVORA ${o.id}\nNama: ${o.customer.name}\nEmail: ${o.customer.email}\nTotal: ${formatIDR(o.total)}\nStatus: ${o.status}\nMetode: ${o.payment}`;
            navigator.clipboard?.writeText(txt).then(() => showToast('Detail invoice disalin')).catch(() => showToast('Gagal menyalin invoice'));
        }

        const checkoutForm = document.getElementById('checkout-form');
        if (checkoutForm) checkoutForm.addEventListener('submit', e => {
            e.preventDefault();
            if (!cart.length) { showToast('Keranjang kosong'); switchPage('katalog'); return; }
            const f = e.currentTarget, data = Object.fromEntries(new FormData(f).entries());
            currentZone = detectZoneFromInput(data.postal);
            const t = getCartTotals();
            const order = {
                id: 'LVR-' + Date.now().toString().slice(-9),
                createdAt: new Date().toISOString(),
                status: 'Menunggu konfirmasi manual',
                customer: { name: data.name, email: data.email, phone: data.phone, postal: data.postal, address: data.address },
                payment: data.payment,
                courier: data.courier,
                items: cart.map(item => {
                    const p = PRODUCTS.find(x => x.id === item.productId);
                    return { productId: p.id, name: p.name, price: p.price, qty: item.qty };
                }),
                subtotal: t.subtotal,
                shipping: t.shipping,
                total: t.total
            };
            const orders = getOrderStore();
            orders.push(order);
            saveOrderStore(orders);
            cart = [];
            localStorage.setItem('livora_cart', '[]');
            window.location.href = `${SITE_ROOT}pages/riwayat.html?invoice=${encodeURIComponent(order.id)}`;
        });

        /* ----------------------------------------------------------------------
         * 6. INITIALIZATION
         * ---------------------------------------------------------------------- */
        // Gambar gagal dimuat (mis. ID Unsplash salah) -> tampilkan placeholder
        document.addEventListener('error', function (e) {
            const t = e.target;
            if (t && t.tagName === 'IMG' && !t.dataset.fb) {
                t.dataset.fb = '1';
                t.src = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600"><rect width="100%" height="100%" fill="#F1E9DA"/><text x="50%" y="50%" fill="#8C6239" font-family="sans-serif" font-size="30" text-anchor="middle">Gambar tidak tersedia</text></svg>');
            }
        }, true);

        window.onload = function () {
            if (window.__livoraInitialized) return;
            window.__livoraInitialized = true;

            syncActiveNavTab();
            saveLocationState();
            renderHomeMinimalShowcase();
            initCatalogFilters();
            renderFullCatalogPage();
            renderCartDrawer();
            renderTestimonials();
            renderOrderHistory();
            populateOngkirProductSelect();

            const postalInput = document.getElementById('bento-postal-input');
            if (postalInput) {
                postalInput.value = `${currentPostal} - ${currentCity}`;
                updateBentoShippingCalculator();
            }

            // Selalu sinkronkan keranjang di semua halaman (fix bug keranjang hantu)
            renderCartDrawer();

            const currentPath = window.location.pathname.toLowerCase();
            if (currentPath.endsWith('/pages/checkout.html')) prepareCheckout();

            const params = new URLSearchParams(window.location.search);
            const invoiceId = params.get('invoice');
            if (invoiceId) showInvoice(invoiceId);

            // Auto-buka kembali modal produk saat pulang dari 3D Studio
            const returnProductId = params.get('product') || sessionStorage.getItem('livora_return_product');
            if (returnProductId && currentPath.includes('/pages/katalog')) {
                sessionStorage.removeItem('livora_return_product');
                setTimeout(() => openProductModal(returnProductId), 120);
            }

            // Search Bar Live Dropdown
            const searchInput = document.getElementById('global-search-input');
            const suggestionsBox = document.getElementById('search-suggestions');
            const suggestionsList = document.getElementById('search-suggestions-list');
            const clearSearchBtn = document.getElementById('clear-search-btn');

            function updateSuggestions(query) {
                const q = query.toLowerCase().trim();
                const matches = PRODUCTS.filter(p =>
                    !q ||
                    searchHaystack(p).includes(q) ||
                    `${p.dimP}x${p.dimL}x${p.dimT}`.includes(q.replace(/\s+/g, ''))
                );
                if (!matches.length) {
                    suggestionsList.innerHTML = `<div class="p-3 text-center text-xs text-oak-700">Produk tidak ditemukan.</div>`;
                    return;
                }
                suggestionsList.innerHTML = matches.slice(0, 6).map(p => `
                    <div onclick="openProductModal('${p.id}'); document.getElementById('search-suggestions').classList.add('hidden');" class="flex items-center justify-between gap-2 p-2 rounded-xl hover:bg-oak-200/50 cursor-pointer transition-colors">
                        <div class="flex items-center gap-2.5 min-w-0">
                            <img src="${p.image}" alt="${p.name}" class="w-9 h-9 rounded-lg object-cover shrink-0">
                            <div class="min-w-0">
                                <span class="text-xs font-bold text-charcoal-900 block truncate">${p.name}</span>
                                <span class="text-[10px] font-mono text-oak-700">${p.dimP}×${p.dimL}×${p.dimT} cm</span>
                            </div>
                        </div>
                        <span class="font-mono text-xs font-bold text-charcoal-900 shrink-0">${formatIDR(p.price)}</span>
                    </div>
                `).join('') : '<div class="p-3 text-xs text-oak-700">Tidak ada produk yang cocok.</div>';
            }

            if (searchInput && suggestionsBox && suggestionsList && clearSearchBtn) {
                searchInput.addEventListener('focus', () => {
                    updateSuggestions(searchInput.value);
                    suggestionsBox.classList.remove('hidden');
                });

                searchInput.addEventListener('input', e => {
                    const val = e.target.value;
                    clearSearchBtn.classList.toggle('hidden', !val);
                    updateSuggestions(val);
                });

                clearSearchBtn.addEventListener('click', () => {
                    searchInput.value = '';
                    clearSearchBtn.classList.add('hidden');
                    suggestionsBox.classList.add('hidden');
                });

                document.addEventListener('click', e => {
                    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
                        suggestionsBox.classList.add('hidden');
                    }
                });
            }

            // Tutup modal/drawer dengan tombol Escape
            document.addEventListener('keydown', e => {
                if (e.key === 'Escape') {
                    closeProductModal();
                    closeMemberModal();
                    closeCartDrawer();
                    closeInvoice();
                }
            });

            // Ongkir City Chips
            document.querySelectorAll('.bento-city-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.bento-city-btn').forEach(b => {
                        b.className = 'bento-city-btn px-3 py-1 rounded-full glass-pill text-charcoal-800 text-xs font-medium';
                    });
                    btn.className = 'bento-city-btn px-3 py-1 rounded-full bg-charcoal-900 text-cream-50 text-xs font-semibold';
                    const label = btn.getAttribute('data-label');
                    document.getElementById('bento-postal-input').value = label;
                    const parts = label.split(' - ');
                    currentPostal = parts[0];
                    currentCity = parts[1];
                    updateBentoShippingCalculator();
                });
            });

            const cartOpenBtn = document.getElementById('cart-open-btn');
            if (cartOpenBtn) cartOpenBtn.addEventListener('click', openCartDrawer);

            const cartCloseBtn = document.getElementById('cart-close-btn');
            if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);

            const checkoutBtn = document.getElementById('checkout-btn');
            if (checkoutBtn) checkoutBtn.addEventListener('click', () => {
                if (!cart.length) { showToast('Keranjang masih kosong'); return; }
                closeCartDrawer();
                window.location.href = SITE_ROOT + 'pages/checkout.html';
            });

            // Form Pendaftaran Member
            const memberForm = document.getElementById('member-register-form');
            if (memberForm) memberForm.addEventListener('submit', e => {
                e.preventDefault();
                const nameVal = document.getElementById('member-name-input').value.trim();
                const emailVal = document.getElementById('member-email-input').value.trim();
                if (!nameVal || !emailVal) return;

                const randomCode = Math.floor(1000 + Math.random() * 9000);
                currentMember = {
                    name: nameVal,
                    email: emailVal,
                    memberId: `LVR-2026-${randomCode}`
                };
                localStorage.setItem('livora_member', JSON.stringify(currentMember));
                syncMemberUI();
                showToast(`Selamat datang, ${nameVal}! Anda resmi terdaftar sebagai Member.`);
            });

            const newsletterForm = document.getElementById('newsletter-form');
            if (newsletterForm) newsletterForm.addEventListener('submit', e => {
                e.preventDefault();
                document.getElementById('newsletter-email').value = '';
                showToast('Voucher LIVORAKARGO50 berhasil diklaim!');
            });

            if (document.getElementById('profile-avatar-icon')) syncMemberUI();
            observeFluidElements();
        };