        const PRODUCTS = [
            // 1. ANAK-ANAK (4 Produk)
            {
                id: 'kiko-montessori-bed',
                name: 'Kiko Montessori Low Bed',
                ageGroup: 'Anak-anak',
                styleBadge: 'Kids Safe Rounded Birch',
                dimP: 100, dimL: 200, dimT: 35,
                material: 'Solid Birch Sudut Tumpul Aman',
                price: 2950000, oldPrice: 3400000,
                weightKg: 26, featuredOnHome: true,
                file3D: 'kiko_montessori_bed_3d.html',
                image: 'https://images.unsplash.com/photo-1540518614846-7ede433c457?auto=format&fit=crop&w=900&q=80'
            },
            {
                id: 'mori-kids-desk',
                name: 'Mori Kids Study Desk',
                ageGroup: 'Anak-anak',
                styleBadge: 'Ergonomic Kids Wood',
                dimP: 90, dimL: 55, dimT: 65,
                material: 'Light Maple & White Oak',
                price: 1450000, oldPrice: 1750000,
                weightKg: 16, featuredOnHome: false,
                file3D: 'mori_kids_desk_3d.html',
                image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=80'
            },
            {
                id: 'pino-toy-organizer',
                name: 'Pino Montessori Toy Shelf',
                ageGroup: 'Anak-anak',
                styleBadge: 'Scandinavian Kids Storage',
                dimP: 85, dimL: 35, dimT: 70,
                material: 'Solid Birch + 6 Kotak Linen',
                price: 1190000, oldPrice: 1400000,
                weightKg: 14, featuredOnHome: false,
                file3D: 'pino_toy_shelf_3d.html',
                image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=900&q=80'
            },
            {
                id: 'sora-bunk-bed',
                name: 'Sora Twin Bunk Bed',
                ageGroup: 'Anak-anak',
                styleBadge: 'Space-Saving Kids',
                dimP: 100, dimL: 208, dimT: 165,
                material: 'Solid Pine & Oak Anti-Slip',
                price: 5450000, oldPrice: 6200000,
                weightKg: 58, featuredOnHome: false,
                file3D: 'sora_bunk_bed_3d.html',
                image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'
            },

            // 2. REMAJA & MAHASISWA / KOS (4 Produk)
            {
                id: 'lumina-desk',
                name: 'Lumina Minimalist Desk',
                ageGroup: 'Remaja & Kos',
                styleBadge: 'Scandinavian Compact',
                dimP: 120, dimL: 60, dimT: 75,
                material: 'Solid White Oak + 2 Laci',
                price: 1850000, oldPrice: 2250000,
                weightKg: 28, featuredOnHome: true,
                file3D: 'lumina_desk_3d.html',
                image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80'
            },
            {
                id: 'vela-study-chair',
                name: 'Vela Timber Study Chair',
                ageGroup: 'Remaja & Kos',
                styleBadge: 'Japandi Task Seating',
                dimP: 62, dimL: 60, dimT: 98,
                material: 'Bentwood Oak + Linen Cushion',
                price: 1350000, oldPrice: 1600000,
                weightKg: 12, featuredOnHome: false,
                file3D: 'vela_study_chair_3d.html',
                image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=900&q=80'
            },
            {
                id: 'nara-slim-wardrobe',
                name: 'Nara Slim Kos Wardrobe',
                ageGroup: 'Remaja & Kos',
                styleBadge: 'Minimalist Natural Ash',
                dimP: 90, dimL: 55, dimT: 190,
                material: 'Kayu Ash Oven-Dried 2 Pintu',
                price: 3450000, oldPrice: 3950000,
                weightKg: 48, featuredOnHome: false,
                file3D: 'nara_slim_wardrobe_3d.html',
                image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80'
            },
            {
                id: 'kanso-bookshelf',
                name: 'Kanso Modular Bookshelf',
                ageGroup: 'Remaja & Kos',
                styleBadge: 'Scandinavian Light Wood',
                dimP: 80, dimL: 32, dimT: 145,
                material: 'Solid White Oak 4 Tingkat',
                price: 1250000, oldPrice: 1490000,
                weightKg: 22, featuredOnHome: false,
                file3D: 'kanso_bookshelf_3d.html',
                image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=900&q=80'
            },

            // 3. DEWASA & KELUARGA (4 Produk)
            {
                id: 'aoki-credenza',
                name: 'Aoki Birch Credenza',
                ageGroup: 'Dewasa & Keluarga',
                styleBadge: 'Flagship Japandi Miter 45°',
                dimP: 180, dimL: 45, dimT: 75,
                material: 'Solid Scandinavian Birch 22mm',
                price: 18450000, oldPrice: 21200000,
                weightKg: 46, featuredOnHome: false,
                file3D: 'aoki_birch_credenza_3d_configurator.html',
                image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=900&q=80'
            },
            {
                id: 'hana-japandi-sofa',
                name: 'Hana Japandi 3-Seater Sofa',
                ageGroup: 'Dewasa & Keluarga',
                styleBadge: 'Japandi Living Room',
                dimP: 210, dimL: 85, dimT: 78,
                material: 'Solid Oak + Cream Boucle Fabric',
                price: 6850000, oldPrice: 7900000,
                weightKg: 54, featuredOnHome: true,
                file3D: 'hana_japandi_sofa_3d.html',
                image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80'
            },
            {
                id: 'tori-dining-table',
                name: 'Tori Solid Oak Dining Table',
                ageGroup: 'Dewasa & Keluarga',
                styleBadge: 'Scandinavian 6-Seater',
                dimP: 180, dimL: 90, dimT: 75,
                material: '100% Solid White Oak 3.2 cm',
                price: 5250000, oldPrice: 6100000,
                weightKg: 49, featuredOnHome: false,
                file3D: 'tori_dining_table_3d.html',
                image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=900&q=80'
            },
            {
                id: 'kaia-queen-bed',
                name: 'Kaia Queen Floating Bed',
                ageGroup: 'Dewasa & Keluarga',
                styleBadge: 'Japandi Master Bedroom',
                dimP: 160, dimL: 200, dimT: 85,
                material: 'Solid Birch Frame + Linen Headboard',
                price: 6400000, oldPrice: 7350000,
                weightKg: 62, featuredOnHome: false,
                file3D: 'kaia_queen_bed_3d.html',
                image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=900&q=80'
            },

            // 4. LANSIA / ORANG TUA (4 Produk)
            {
                id: 'senja-senior-armchair',
                name: 'Senja Easy-Rise Armchair',
                ageGroup: 'Lansia / Senior',
                styleBadge: 'Senior Ergonomic Support',
                dimP: 78, dimL: 82, dimT: 96,
                material: 'Birch Armrest Kokoh + Lumbar Support',
                price: 3250000, oldPrice: 3750000,
                weightKg: 21, featuredOnHome: true,
                file3D: 'senja_senior_armchair_3d.html',
                image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80'
            },
            {
                id: 'raku-senior-recliner',
                name: 'Raku Senior Wood Recliner',
                ageGroup: 'Lansia / Senior',
                styleBadge: 'Senior Relaxation',
                dimP: 80, dimL: 88, dimT: 102,
                material: 'Bentwood Birch + Sandaran Leher',
                price: 4150000, oldPrice: 4800000,
                weightKg: 25, featuredOnHome: false,
                file3D: 'raku_senior_recliner_3d.html',
                image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80'
            },
            {
                id: 'yumi-bedside-nightstand',
                name: 'Yumi Sensor-LED Nightstand',
                ageGroup: 'Lansia / Senior',
                styleBadge: 'Safe Night Mobility',
                dimP: 50, dimL: 42, dimT: 60,
                material: 'Solid Birch + Sensor Gerak LED',
                price: 1290000, oldPrice: 1550000,
                weightKg: 13, featuredOnHome: false,
                file3D: 'yumi_nightstand_3d.html',
                image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=900&q=80'
            },
            {
                id: 'oka-mobility-bench',
                name: 'Oka Grab-Handle Bench',
                ageGroup: 'Lansia / Senior',
                styleBadge: 'Easy Sit & Stand Bench',
                dimP: 110, dimL: 40, dimT: 48,
                material: 'Solid White Oak + Pegangan Samping',
                price: 1650000, oldPrice: 1950000,
                weightKg: 17, featuredOnHome: false,
                file3D: 'oka_mobility_bench_3d.html',
                image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80'
            }
        ];

        const BUYER_REVIEWS = [
            {
                buyer: 'Keluarga Hendrawan',
                city: 'Jakarta Selatan',
                roomTag: 'Ruang Tamu 4 × 5 m',
                productName: 'Aoki Birch Credenza (180×45×75 cm)',
                rating: '5.0',
                photo: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=900&q=80'
            },
            {
                buyer: 'Dimas Aditya',
                city: 'Semarang',
                roomTag: 'Kamar Kos 3 × 3 m',
                productName: 'Lumina Minimalist Desk (120×60×75 cm)',
                rating: '4.9',
                photo: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80'
            },
            {
                buyer: 'Ibu Ratna (64 Thn)',
                city: 'Bandung',
                roomTag: 'Ruang Baca Keluarga',
                productName: 'Senja Easy-Rise Armchair (78×82×96 cm)',
                rating: '5.0',
                photo: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80'
            }
        ];

        let currentPage = 'home';
        let catalogViewMode = 'grid';
        let selectedAgeFilter = 'all';
        let catalogSearchText = '';
        let cart = JSON.parse(localStorage.getItem('livora_cart') || '[]');
        let currentPostal = '50275';
        let currentCity = 'Semarang';
        let currentZone = 'jateng';
        let selectedBentoWeight = 46;

        // State Akun Member: Awalnya Kosong (null) sesuai permintaan
        let currentMember = JSON.parse(localStorage.getItem('livora_member') || 'null');
        let revealObserver = null;

        function formatIDR(num) {
            return 'Rp ' + num.toLocaleString('id-ID');
        }

        /* ----------------------------------------------------------------------
         * 0. FLUID SCROLL & STAGGERED REVEAL OBSERVER (WATER-LIKE ANIMATION)
         * ---------------------------------------------------------------------- */
        function observeFluidElements() {
            if (!revealObserver) {
                revealObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            revealObserver.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
            }

            document.querySelectorAll('.fluid-reveal:not(.is-visible)').forEach((el, idx) => {
                el.style.transitionDelay = `${Math.min(idx * 55, 320)}ms`;
                revealObserver.observe(el);
            });
        }

        /* ----------------------------------------------------------------------
         * 1. SPA PAGE SWITCHER WITH FLUID WAVE TRANSITION
         * ---------------------------------------------------------------------- */
        function switchPage(pageKey) {
            const pageFiles = { home: '/index.html', katalog: '/pages/katalog.html', ongkir: '/pages/ongkir.html', inspirasi: '/pages/inspirasi.html', checkout: '/pages/checkout.html', riwayat: '/pages/riwayat.html' };
            const target = pageFiles[pageKey];
            if (target) { window.location.href = target; return; }
            currentPage = pageKey;
            ['home', 'katalog', 'ongkir', 'inspirasi', 'checkout', 'riwayat'].forEach(p => {
                const sec = document.getElementById('page-' + p);
                if (sec) {
                    if (p === pageKey) {
                        sec.classList.remove('hidden');
                        sec.classList.remove('page-enter');
                        void sec.offsetWidth; // Reflow for fresh fluid animation
                        sec.classList.add('page-enter');
                    } else {
                        sec.classList.add('hidden');
                    }
                }

                const navBtn = document.getElementById('nav-' + p);
                if (navBtn) {
                    navBtn.className = p === pageKey
                        ? 'nav-tab-btn px-4 py-1.5 rounded-full bg-charcoal-900 text-cream-50 text-xs font-semibold transition-all flex items-center gap-1.5'
                        : 'nav-tab-btn px-4 py-1.5 rounded-full text-charcoal-800 hover:text-charcoal-900 text-xs font-medium transition-all flex items-center gap-1.5';
                }

                const mobBtn = document.getElementById('mob-nav-' + p);
                if (mobBtn) {
                    mobBtn.className = p === pageKey
                        ? 'px-3.5 py-1 rounded-full bg-charcoal-900 text-cream-50 font-semibold whitespace-nowrap transition-all'
                        : 'px-3.5 py-1 rounded-full glass-pill text-charcoal-800 whitespace-nowrap transition-all';
                }
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(observeFluidElements, 40);
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
                    style="transition-delay: ${index * 80}ms"
                    class="fluid-reveal apple-tile glass-card rounded-[32px] pt-8 px-6 pb-6 flex flex-col justify-between items-center text-center cursor-pointer group overflow-hidden"
                >
                    <!-- Centered Minimal Apple-Style Header -->
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

                        <!-- Minimal Dual Links -->
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

                    <!-- Clean Furniture Image Container -->
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
                    style="transition-delay: ${Math.min(idx * 45, 360)}ms"
                    class="fluid-reveal apple-tile glass-card rounded-[28px] p-4 flex flex-col justify-between cursor-pointer group"
                >
                    <div>
                        <div class="relative h-48 w-full rounded-2xl overflow-hidden bg-cream-200 mb-4">
                            <img src="${p.image}" alt="${p.name}" loading="lazy" class="apple-tile-img w-full h-full object-cover">
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
                    style="transition-delay: ${Math.min(idx * 45, 360)}ms"
                    class="fluid-reveal glass-card rounded-[26px] p-4 sm:p-5 cursor-pointer group"
                >
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                        <div class="lg:col-span-3 h-36 rounded-2xl overflow-hidden bg-cream-200 relative">
                            <img src="${p.image}" alt="${p.name}" loading="lazy" class="apple-tile-img w-full h-full object-cover">
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
            const filtered = PRODUCTS.filter(p => {
                const matchAge = selectedAgeFilter === 'all' || p.ageGroup === selectedAgeFilter;
                const q = catalogSearchText.toLowerCase().trim();
                const matchSearch = !q ||
                    p.name.toLowerCase().includes(q) ||
                    p.ageGroup.toLowerCase().includes(q) ||
                    `${p.dimP}x${p.dimL}x${p.dimT}`.includes(q);
                return matchAge && matchSearch;
            });

            if (catalogViewMode === 'grid') {
                container.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6';
                container.innerHTML = filtered.map((p, i) => createCatalogGridCardHTML(p, i)).join('');
            } else {
                container.className = 'space-y-3.5';
                container.innerHTML = filtered.map((p, i) => createCatalogRowCardHTML(p, i)).join('');
            }
            setTimeout(observeFluidElements, 20);
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
            document.getElementById('view-grid-btn').className = mode === 'grid'
                ? 'px-3 py-1.5 rounded-full bg-charcoal-900 text-cream-50 text-xs font-bold'
                : 'px-3 py-1.5 rounded-full glass-pill text-charcoal-800 text-xs font-semibold';
            document.getElementById('view-row-btn').className = mode === 'row'
                ? 'px-3 py-1.5 rounded-full bg-charcoal-900 text-cream-50 text-xs font-bold'
                : 'px-3 py-1.5 rounded-full glass-pill text-charcoal-800 text-xs font-semibold';
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
                <div style="transition-delay: ${idx * 90}ms" class="fluid-reveal apple-tile relative h-80 rounded-[28px] overflow-hidden glass-card p-2 group">
                    <div class="relative w-full h-full rounded-[22px] overflow-hidden">
                        <img src="${r.photo}" alt="${r.productName}" loading="lazy" class="apple-tile-img w-full h-full object-cover">
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
        function openAnimatedModal(modalId) {
            const modal = document.getElementById(modalId);
            modal.classList.remove('hidden');
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal.classList.add('is-open');
                });
            });
        }

        function closeAnimatedModal(modalId) {
            const modal = document.getElementById(modalId);
            modal.classList.remove('is-open');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 380);
        }

        function openProductModal(productId) {
            const p = PRODUCTS.find(item => item.id === productId) || PRODUCTS[0];
            document.getElementById('modal-prod-age').textContent = p.ageGroup;
            document.getElementById('modal-prod-cat').textContent = p.styleBadge;
            document.getElementById('modal-prod-title').textContent = p.name;
            document.getElementById('modal-prod-img').src = p.image;
            document.getElementById('modal-dim-p').textContent = `${p.dimP} cm`;
            document.getElementById('modal-dim-l').textContent = `${p.dimL} cm`;
            document.getElementById('modal-dim-t').textContent = `${p.dimT} cm`;
            document.getElementById('modal-weight').textContent = `${p.weightKg} kg`;
            document.getElementById('modal-material').textContent = p.material;
            document.getElementById('modal-prod-price').textContent = formatIDR(p.price);
            document.getElementById('modal-3d-filename').textContent = p.file3D;

            document.getElementById('modal-launch-3d-btn').onclick = () => {
                showToast(`Membuka modul 3D terpisah: ${p.file3D}`);
            };

            document.getElementById('modal-add-cart-btn').onclick = () => {
                addToCart(p.id);
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

            if (!currentMember) {
                // State Awal: Kosong / Guest
                avatarIcon.innerHTML = `<i class="fa-regular fa-user text-xs text-oak-700"></i>`;
                labelText.textContent = 'Daftar';
                onlineDot.classList.add('hidden');
                subtitle.textContent = 'Belum terdaftar • Masukkan nama & email';
                regForm.classList.remove('hidden');
                activeCard.classList.add('hidden');
            } else {
                // State Terdaftar: Tampilkan Inisial & Nama Member
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
            if (val.startsWith('50') || val.includes('semarang')) return 'jateng';
            if (val.startsWith('55') || val.includes('jogja') || val.includes('yogyakarta')) return 'jogja';
            if (val.startsWith('40') || val.includes('bandung')) return 'jabar';
            if (val.startsWith('1') || val.includes('jakarta')) return 'jabodetabek';
            if (val.startsWith('6') || val.includes('surabaya')) return 'jatim';
            if (val.startsWith('8') || val.includes('bali')) return 'bali';
            return 'jabodetabek';
        }

        function updateBentoShippingCalculator() {
            if (!document.getElementById('bento-postal-input')) return;
            const destInput = document.getElementById('bento-postal-input').value || `${currentPostal} - ${currentCity}`;
            currentZone = detectZoneFromInput(destInput);
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
            document.getElementById('toast-message').textContent = msg;
            toast.classList.remove('hidden');
            clearTimeout(window._toastTimer);
            window._toastTimer = setTimeout(() => toast.classList.add('hidden'), 2600);
        }

        function addToCart(productId) {
            const existing = cart.find(item => item.productId === productId);
            if (existing) existing.qty += 1;
            else cart.push({ productId, qty: 1 });
            const prod = PRODUCTS.find(p => p.id === productId);
            localStorage.setItem('livora_cart', JSON.stringify(cart));
            renderCartDrawer();
            showToast(`${prod.name} ditambahkan ke keranjang`);
        }

        function updateCartQty(productId, delta) {
            const idx = cart.findIndex(i => i.productId === productId);
            if (idx > -1) {
                cart[idx].qty += delta;
                if (cart[idx].qty <= 0) cart.splice(idx, 1);
                localStorage.setItem('livora_cart', JSON.stringify(cart));
                renderCartDrawer();
            }
        }

        function renderCartDrawer() {
            const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
            document.getElementById('cart-count-badge').textContent = totalItems;
            document.getElementById('cart-drawer-postal').innerHTML = `Tujuan: <strong>${currentPostal} (${currentCity})</strong>`;

            const container = document.getElementById('cart-items-container');
            if (cart.length === 0) {
                container.innerHTML = `<div class="text-center py-10 text-oak-700 text-xs">Keranjang kosong.</div>`;
                document.getElementById('cart-subtotal').textContent = 'Rp 0';
                document.getElementById('cart-shipping').textContent = 'Rp 0';
                document.getElementById('cart-grand-total').textContent = 'Rp 0';
                return;
            }

            let subtotal = 0;
            let totalWeight = 0;
            container.innerHTML = cart.map(item => {
                const p = PRODUCTS.find(prod => prod.id === item.productId);
                subtotal += p.price * item.qty;
                totalWeight += p.weightKg * item.qty;
                return `
                    <div class="p-3 rounded-2xl glass-pill flex items-center justify-between gap-3">
                        <img src="${p.image}" alt="${p.name}" class="w-12 h-12 rounded-xl object-cover shrink-0">
                        <div class="flex-1 min-w-0">
                            <h4 class="text-xs font-extrabold text-charcoal-900 truncate">${p.name}</h4>
                            <span class="block font-mono text-[10px] text-oak-700">${p.dimP}×${p.dimL}×${p.dimT} cm</span>
                            <span class="block font-mono text-xs font-bold text-charcoal-900">${formatIDR(p.price)}</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                            <button onclick="updateCartQty('${p.id}', -1)" class="w-6 h-6 rounded-full bg-cream-200 font-bold text-xs">-</button>
                            <span class="font-mono text-xs font-bold w-4 text-center">${item.qty}</span>
                            <button onclick="updateCartQty('${p.id}', 1)" class="w-6 h-6 rounded-full bg-cream-200 font-bold text-xs">+</button>
                        </div>
                    </div>
                `;
            }).join('');

            const rateInfo = ZONE_RATES[currentZone] || ZONE_RATES.jateng;
            const shippingCost = Math.ceil((totalWeight * rateInfo.basePerKg) / 5000) * 5000;
            document.getElementById('cart-subtotal').textContent = formatIDR(subtotal);
            document.getElementById('cart-shipping').textContent = formatIDR(shippingCost);
            document.getElementById('cart-grand-total').textContent = formatIDR(subtotal + shippingCost);
        }


        /* CHECKOUT + ORDER HISTORY (prototype tanpa backend/API) */
        let activeInvoice = null;
        const getOrderStore = () => JSON.parse(localStorage.getItem('livora_orders') || '[]');
        const saveOrderStore = orders => localStorage.setItem('livora_orders', JSON.stringify(orders));
        function getCartTotals() {
            let subtotal = 0, weight = 0;
            cart.forEach(item => { const p=PRODUCTS.find(x=>x.id===item.productId); if(p){subtotal+=p.price*item.qty;weight+=p.weightKg*item.qty;} });
            const rate=ZONE_RATES[currentZone]||ZONE_RATES.jateng;
            const shipping=cart.length ? Math.ceil((weight*rate.basePerKg)/5000)*5000 : 0;
            return {subtotal,shipping,total:subtotal+shipping,weight};
        }
        function prepareCheckout() {
            const form=document.getElementById('checkout-form');
            if (!form) return;
            const t=getCartTotals();
            document.getElementById('checkout-summary').innerHTML=cart.map(item=>{
                const p=PRODUCTS.find(x=>x.id===item.productId);
                return `<div class="d-flex justify-content-between gap-2 py-2 border-bottom"><span>${p.name} × ${item.qty}</span><strong>${formatIDR(p.price*item.qty)}</strong></div>`;
            }).join('');
            document.getElementById('checkout-subtotal').textContent=formatIDR(t.subtotal);
            document.getElementById('checkout-shipping').textContent=formatIDR(t.shipping);
            document.getElementById('checkout-total').textContent=formatIDR(t.total);
            const f=form;
            if(currentMember){f.elements.name.value=currentMember.name;f.elements.email.value=currentMember.email;}
            f.elements.postal.value=currentPostal;
        }
        function renderOrderHistory() {
            const target=document.getElementById('order-history-list'), orders=getOrderStore();
            if (!target) return;
            if(!orders.length){target.innerHTML='<div class="alert alert-light border">Belum ada pesanan. Pesanan yang dibuat di perangkat ini akan muncul di sini.</div>';return;}
            target.innerHTML=orders.slice().reverse().map(o=>`<div class="border rounded-3 p-3 mb-3 bg-white bg-opacity-75">
              <div class="d-flex flex-wrap justify-content-between gap-2"><strong>${o.id}</strong><span class="badge text-bg-warning">${o.status}</span></div>
              <div class="small text-secondary">${new Date(o.createdAt).toLocaleString('id-ID')} · ${o.customer.name}</div>
              <div class="mt-2">${o.items.map(i=>`${i.name} × ${i.qty}`).join(', ')}</div>
              <div class="d-flex justify-content-between mt-2"><strong>${formatIDR(o.total)}</strong><button class="btn btn-sm btn-outline-dark" onclick="showInvoice('${o.id}')">Lihat invoice</button></div>
            </div>`).join('');
        }
        function showInvoice(orderId) {
            const order=getOrderStore().find(o=>o.id===orderId);
            if(!order)return;
            activeInvoice=order;
            document.getElementById('invoice-content').innerHTML=`
              <div class="d-flex justify-content-between"><div><h3 class="h5 fw-bold">LIVORA</h3><div class="small text-secondary">Light Wood Minimalist Marketplace</div></div><div class="text-end small"><strong>${order.id}</strong><br>${new Date(order.createdAt).toLocaleString('id-ID')}</div></div><hr>
              <h4 class="h6 fw-bold">Tagihan kepada</h4><div>${order.customer.name}<br>${order.customer.email}<br>${order.customer.phone}<br>${order.customer.address}, ${order.customer.postal}</div><hr>
              ${order.items.map(i=>`<div class="d-flex justify-content-between py-1"><span>${i.name} × ${i.qty}</span><strong>${formatIDR(i.price*i.qty)}</strong></div>`).join('')}
              <hr><div class="d-flex justify-content-between"><span>Subtotal</span><strong>${formatIDR(order.subtotal)}</strong></div><div class="d-flex justify-content-between"><span>Ongkir (estimasi)</span><strong>${formatIDR(order.shipping)}</strong></div><div class="d-flex justify-content-between fs-5 mt-2"><strong>Total</strong><strong>${formatIDR(order.total)}</strong></div>
              <div class="alert alert-warning mt-3 small">Metode: ${order.payment}. Status: ${order.status}. Ini invoice simulasi; pembayaran belum diverifikasi dan nomor VA/QRIS bukan nomor aktif.</div>`;
            openAnimatedModal('invoice-modal');
        }
        function closeInvoice(){closeAnimatedModal('invoice-modal');}
        function copyInvoice(){
            if(!activeInvoice)return;
            const o=activeInvoice, txt=`LIVORA ${o.id}\nNama: ${o.customer.name}\nEmail: ${o.customer.email}\nTotal: ${formatIDR(o.total)}\nStatus: ${o.status}\nMetode: ${o.payment}`;
            navigator.clipboard?.writeText(txt).then(()=>showToast('Detail invoice disalin')).catch(()=>showToast('Gagal menyalin invoice'));
        }
        const checkoutForm = document.getElementById('checkout-form');
        if (checkoutForm) checkoutForm.addEventListener('submit',e=>{
            e.preventDefault();
            if(!cart.length){showToast('Keranjang kosong');switchPage('katalog');return;}
            const f=e.currentTarget, data=Object.fromEntries(new FormData(f).entries());
            currentZone=detectZoneFromInput(data.postal);
            const t=getCartTotals();
            const order={id:'LVR-'+Date.now().toString().slice(-9),createdAt:new Date().toISOString(),status:'Menunggu konfirmasi manual',customer:{name:data.name,email:data.email,phone:data.phone,postal:data.postal,address:data.address},payment:data.payment,courier:data.courier,items:cart.map(item=>{const p=PRODUCTS.find(x=>x.id===item.productId);return {productId:p.id,name:p.name,price:p.price,qty:item.qty};}),subtotal:t.subtotal,shipping:t.shipping,total:t.total};
            const orders=getOrderStore();orders.push(order);saveOrderStore(orders);
            cart=[];localStorage.setItem('livora_cart','[]');
            window.location.href = `/pages/riwayat.html?invoice=${encodeURIComponent(order.id)}`;
        });

        /* ----------------------------------------------------------------------
         * 6. INITIALIZATION
         * ---------------------------------------------------------------------- */
        window.onload = function () {
            renderHomeMinimalShowcase();
            renderFullCatalogPage();
            renderTestimonials();
            renderOrderHistory();
            populateOngkirProductSelect();
            updateBentoShippingCalculator();
            const currentPath = window.location.pathname;
            if (currentPath.endsWith('/pages/checkout.html')) prepareCheckout();
            const invoiceId = new URLSearchParams(window.location.search).get('invoice');
            if (invoiceId) showInvoice(invoiceId);

            // Search Bar Live Dropdown
            const searchInput = document.getElementById('global-search-input');
            const suggestionsBox = document.getElementById('search-suggestions');
            const suggestionsList = document.getElementById('search-suggestions-list');
            const clearSearchBtn = document.getElementById('clear-search-btn');

            function updateSuggestions(query) {
                const q = query.toLowerCase().trim();
                const matches = PRODUCTS.filter(p =>
                    !q ||
                    p.name.toLowerCase().includes(q) ||
                    p.ageGroup.toLowerCase().includes(q) ||
                    `${p.dimP}x${p.dimL}x${p.dimT}`.includes(q)
                );
                suggestionsList.innerHTML = matches.slice(0, 5).map(p => `
                    <div onclick="openProductModal('${p.id}'); document.getElementById('search-suggestions').classList.add('hidden');" class="flex items-center justify-between p-2 rounded-xl hover:bg-oak-200/50 cursor-pointer">
                        <div class="flex items-center gap-2.5">
                            <img src="${p.image}" alt="${p.name}" class="w-8 h-8 rounded-lg object-cover">
                            <div>
                                <span class="text-xs font-bold text-charcoal-900 block">${p.name}</span>
                                <span class="text-[10px] font-mono text-oak-700">${p.dimP}×${p.dimL}×${p.dimT} cm</span>
                            </div>
                        </div>
                        <span class="font-mono text-xs font-bold text-charcoal-900">${formatIDR(p.price)}</span>
                    </div>
                `).join('');
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
                    const hd = document.getElementById('header-postal-display'); if (hd) hd.textContent = `${currentPostal} • ${currentCity}`;
                    const hm = document.getElementById('header-postal-mobile'); if (hm) hm.textContent = currentPostal;
                    updateBentoShippingCalculator();
                });
            });

            const cartOpenBtn = document.getElementById('cart-open-btn'); if (cartOpenBtn) cartOpenBtn.addEventListener('click', openCartDrawer);
            const cartCloseBtn = document.getElementById('cart-close-btn'); if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
            const checkoutBtn = document.getElementById('checkout-btn');
            if (checkoutBtn) checkoutBtn.addEventListener('click', () => {
                if (!cart.length) { showToast('Keranjang masih kosong'); return; }
                closeCartDrawer();
                window.location.href = '/pages/checkout.html';
            });

            // Form Pendaftaran Member (Awalnya Kosong -> Isi Nama & Email)
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

            // Inisialisasi UI Member (Kosong) & Animasi Scroll Fluid
            if (document.getElementById('profile-avatar-icon')) syncMemberUI();
            observeFluidElements();
        };
