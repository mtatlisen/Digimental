import React, { useEffect, useMemo, useState } from 'react';

type Product = {
  id: string;
  name: string;
  brand: string;
  description: string;
  features: string[];
  materials: Array<'PET' | 'Cam' | 'Alüminyum'>;
  image: string;
  category: string;
  color: string;
  highlight?: string;
};

type Brand = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  country: string;
  emoji: string;
  website: string;
  color: string;
  features: string[];
};

const PRODUCTS: Product[] = [
  {
    id: 'ieco-i10',
    name: 'iECO i10',
    brand: 'REVEGO',
    description: 'Cam şişeler için tasarlanmış kompakt çözüm. AI şekil tanıma ile donatılmış.',
    features: ['15" dokunmatik', '360° barkod', 'AI tanıma', '600 cam şişe'],
    materials: ['Cam'],
    image: 'https://revego.net/wp-content/uploads/2025/07/i10t1.jpg',
    category: 'Kompakt RVM',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    id: 'ieco-i20',
    name: 'iECO i20',
    brand: 'REVEGO',
    description: 'PET ve teneke kutular için yüksek verimli sıkıştırma sistemi.',
    features: ['QR kod', 'AI tanıma', '460 PET/800 kutu', 'Çoklu ödeme'],
    materials: ['PET', 'Alüminyum'],
    image: 'https://revego.net/wp-content/uploads/2025/07/REVEGO-i20.webp',
    category: 'Kompakt RVM',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 'ieco-i30',
    name: 'iECO i30',
    brand: 'REVEGO',
    description: 'Tüm malzemeler için çok yönlü endüstriyel çözüm.',
    features: ['Tüm malzemeler', 'Cam kırma', '1660 toplam', '15" ekran'],
    materials: ['PET', 'Cam', 'Alüminyum'],
    image: 'https://revego.net/wp-content/uploads/2025/07/REVEGO-i30.webp',
    category: 'Endüstriyel',
    color: 'from-violet-400 to-purple-500',
  },
  {
    id: 'ieco-i100',
    name: 'iECO i100',
    brand: 'REVEGO',
    description: 'Mobil iade merkezi. Festival ve etkinlikler için ideal.',
    features: ['120 adet/dk', 'Mobil', '27" ekran', '5000+ kapasite'],
    materials: ['PET', 'Cam', 'Alüminyum'],
    image: 'https://revego.net/wp-content/uploads/2025/07/REVEGO-iECO-i100.webp',
    category: 'Mobil',
    color: 'from-orange-400 to-red-500',
    highlight: 'MOBİL',
  },
  {
    id: 'rvm-x-proline',
    name: 'RVM X ProLine',
    brand: 'RVM Systems',
    description: 'Modüler ve genişletilebilir. 8 kabinete kadar büyüyebilir.',
    features: ['60 adet/dk', '10.1" ekran', 'Modüler', 'Euro palet'],
    materials: ['PET', 'Cam', 'Alüminyum'],
    image: 'https://rvmsystems.com.tr/wp-content/uploads/sites/19/2025/01/rvm-xproline.jpg',
    category: 'Modüler',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 'rvm-mega-proline',
    name: 'RVM Mega ProLine+',
    brand: 'RVM Systems',
    description: 'Çoklu besleme ile büyük torbaları tek seferde boşaltın!',
    features: ['100 adet/dk', '21.5" ekran', 'Çoklu besleme', '8 kabin'],
    materials: ['PET', 'Cam', 'Alüminyum'],
    image: 'https://rvmsystems.com.tr/wp-content/uploads/sites/19/2025/01/rvm-mega-proline.jpg',
    category: 'Çoklu Besleme',
    color: 'from-indigo-400 to-violet-500',
    highlight: 'POPÜLER',
  },
  {
    id: 'rvm-x20',
    name: 'RVM X20',
    brand: 'RVM Systems',
    description: 'Küçük mağazalar için kompakt ve verimli.',
    features: ['50 adet/dk', 'Kompakt', 'Sıkıştırma', 'Kolay kurulum'],
    materials: ['PET', 'Alüminyum'],
    image: 'https://rvmsystems.com.tr/wp-content/uploads/sites/19/2025/01/rvm-x20.jpg',
    category: 'Kompakt',
    color: 'from-teal-400 to-emerald-500',
  },
  {
    id: 'ripet-c-front',
    name: 'Ripet C-FRONT',
    brand: 'Ripet',
    description: 'Patentli RiPress ile 6 kat kapasite! 6.000 şişe/1m³',
    features: ['6.000 şişe', '%90 sıkıştırma', '24/7 toplama', 'DRS uyumlu'],
    materials: ['PET', 'Alüminyum'],
    image: 'https://ripet.it/wp-content/uploads/2024/05/Ripet-ecocompattatore-CFRONT-web.png',
    category: 'Eko-Kompaktör',
    color: 'from-green-400 to-emerald-500',
    highlight: '6X KAPASİTE',
  },
  {
    id: 'ripet-c-ta',
    name: 'Ripet C-TA',
    brand: 'Ripet',
    description: 'Sınırlı alan için ideal. Tek fazlı elektrik bağlantısı.',
    features: ['3.500 şişe', '2.2 KW', 'İç/dış mekan', 'Uzaktan izleme'],
    materials: ['PET', 'Alüminyum'],
    image: 'https://ripet.it/wp-content/uploads/2024/04/Ripet-C-TA.png',
    category: 'Kompakt',
    color: 'from-lime-400 to-green-500',
  },
  {
    id: 'ripet-plast-c',
    name: 'Ripet Plast-C',
    brand: 'Ripet',
    description: "Geri dönüşümlü HDPE'den üretim. %100 sürdürülebilir!",
    features: ['Geri dönüşümlü', 'Kaynak yok', '%100 recycle', 'Uzun ömür'],
    materials: ['PET', 'Alüminyum'],
    image: 'https://ripet.it/wp-content/uploads/2025/10/Ripet-ecocompattatore-Plast-C.png',
    category: 'Sürdürülebilir',
    color: 'from-emerald-300 to-green-500',
    highlight: 'YENİ',
  },
  {
    id: 'ripet-uol',
    name: 'Ripet UOL',
    brand: 'Ripet',
    description: '25.000 şişe kapasitesi! Havalimanı ve stadyumlar için.',
    features: ['25.000 şişe', '4 hazne', 'ATM tarzı', 'Dış mekan'],
    materials: ['PET', 'Alüminyum'],
    image: 'https://ripet.it/wp-content/uploads/2025/01/Ripet-ecocompattatore-uol.png',
    category: 'Dev Kapasite',
    color: 'from-yellow-400 to-orange-500',
    highlight: 'MAX',
  },
  {
    id: 'hlz-mdu-c',
    name: 'HLZ® MDU C',
    brand: 'Anker Andersen',
    description: 'Self-servis sayma istasyonu. Endüstriyel performans.',
    features: ['100+ adet/dk', 'Self-servis', 'Paslanmaz', 'CE/UL onaylı'],
    materials: ['PET', 'Cam', 'Alüminyum'],
    image: 'https://www.anker-andersen.dk/images/Product/HLZ-MDU-C.JPG',
    category: 'Sayma',
    color: 'from-slate-400 to-zinc-500',
  },
  {
    id: 'hlz-md-ultra',
    name: 'HLZ® MD Ultra',
    brand: 'Anker Andersen',
    description: '300 adet/dk! 360° barkod ile marka bazlı ayıklama.',
    features: ['300 adet/dk', '360° scanner', '%99.5 doğruluk', 'Marka ayıklama'],
    materials: ['PET', 'Cam', 'Alüminyum'],
    image: 'https://www.anker-andersen.dk/images/Product/HLZ-MDU.jpg',
    category: 'Ultra Hızlı',
    color: 'from-red-400 to-pink-500',
    highlight: 'EN HIZLI',
  },
  {
    id: 'hlz-dd',
    name: 'HLZ® Duo Disc',
    brand: 'Anker Andersen',
    description: 'Çift konveyör hattı ile ultra yüksek hız.',
    features: ['Çift hat', '300 adet/dk', 'AISI314', 'Özel ayıklama'],
    materials: ['PET', 'Cam', 'Alüminyum'],
    image: 'https://www.anker-andersen.dk/images/frontpage/system_komplet.jpg',
    category: 'Endüstriyel',
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 'qubc-center',
    name: 'QUBC® Center',
    brand: 'Anker Andersen',
    description: 'HoReCa ve kurumsal kullanım için özel tasarım.',
    features: ['HoReCa odaklı', 'Kompakt', 'Profesyonel', 'Düşük bakım'],
    materials: ['PET', 'Cam', 'Alüminyum'],
    image: 'https://www.anker-andersen.dk/images/Product/QUBC.JPG',
    category: 'Kurumsal',
    color: 'from-purple-400 to-indigo-500',
  },
];

const BRANDS: Brand[] = [
  {
    id: 'revego',
    name: 'REVEGO',
    tagline: 'Dönüştür, Sürdür, Kazan!',
    description: "Türkiye'nin yerli üreticisi. 2025 iF Tasarım Ödülü sahibi.",
    country: '🇹🇷 Türkiye',
    emoji: '🔄',
    website: 'https://revego.net/tr/',
    color: 'from-emerald-400 to-teal-500',
    features: ['Yerli Üretim', 'iF 2025 Ödülü', '7/24 Destek', 'DYS Uyumlu'],
  },
  {
    id: 'rvm-systems',
    name: 'RVM Systems',
    tagline: 'Circular Economy Leader',
    description: 'İsveç mühendisliği. 40+ pazarda 17 milyar ambalaj.',
    country: '🇸🇪 İsveç',
    emoji: '♻️',
    website: 'https://rvmsystems.com.tr/',
    color: 'from-blue-400 to-indigo-500',
    features: ['40+ Pazar', '17B Toplama', '30+ Yıl', 'Dijital Araçlar'],
  },
  {
    id: 'anker-andersen',
    name: 'Anker Andersen',
    tagline: 'High Speed Counting',
    description: "Danimarka'nın endüstriyel devi. 300/dk hız, %99.5 doğruluk.",
    country: '🇩🇰 Danimarka',
    emoji: '⚙️',
    website: 'https://www.anker-andersen.dk/en/',
    color: 'from-orange-400 to-red-500',
    features: ['300/dk Hız', '%99.5 Doğruluk', 'Paslanmaz Çelik', 'Global Lider'],
  },
  {
    id: 'ripet',
    name: 'Ripet',
    tagline: 'Bottle to Bottle',
    description: 'İtalyan tasarımı. Patentli RiPress ile %90 sıkıştırma.',
    country: '🇮🇹 İtalya',
    emoji: '🌱',
    website: 'https://ripet.it/en/',
    color: 'from-green-400 to-lime-500',
    features: ['%90 Sıkıştırma', '6x Kapasite', '700+ Makine', 'ISO-14001'],
  },
];

const NAV_ITEMS = [
  { label: 'Ana Sayfa', href: '#/', icon: '🏠' },
  { label: 'Ürünler', href: '#/products', icon: '📦' },
  { label: 'Markalar', href: '#/brands', icon: '🏷️' },
  { label: 'Hakkımızda', href: '#/about', icon: '💡' },
  { label: 'İletişim', href: '#/contact', icon: '📞' },
] as const;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-cyan-500/50 transition-all group-hover:scale-110 group-hover:rotate-3">
            <span className="text-white font-black text-xl">D</span>
          </div>
          <div>
            <span className="text-white font-extrabold text-xl tracking-tight">
              deposit<span className="gradient-text">.com.tr</span>
            </span>
            <p className="text-xs text-slate-400 -mt-1">Depozito İade Sistemleri</p>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all font-medium text-sm group"
            >
              <span className="group-hover:scale-125 transition-transform">{item.icon}</span>
              {item.label}
            </a>
          ))}
          <a
            href="#/contact"
            className="ml-4 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-bold text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:scale-105"
          >
            Teklif Al
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden w-11 h-11 rounded-xl glass flex items-center justify-center text-white"
          aria-label="Menüyü aç/kapat"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass mx-4 mt-3 rounded-2xl p-4 border border-white/20">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 py-3 px-4 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 font-medium"
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="relative mt-20">
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
    <div className="relative py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white font-black text-2xl">D</span>
              </div>
              <div>
                <span className="text-white font-extrabold text-2xl">
                  deposit<span className="gradient-text">.com.tr</span>
                </span>
                <p className="text-sm text-slate-400">Türkiye'nin DİS Ortağı</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              4 global marka, 16 farklı ürün. Depozito iade sistemleri için Türkiye'nin tek adresi.
            </p>
            <div className="flex gap-3">
              {BRANDS.map((b) => (
                <a
                  key={b.id}
                  href={b.website}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-12 h-12 bg-gradient-to-br ${b.color} rounded-xl flex items-center justify-center text-xl shadow-lg hover:scale-110 hover:-rotate-3 transition-all`}
                >
                  {b.emoji}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 text-lg flex items-center gap-2">🧭 Sayfalar</h4>
            <div className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <span>{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 text-lg flex items-center gap-2">📍 İletişim</h4>
            <div className="space-y-3 text-slate-400">
              <p className="flex items-center gap-2">
                <span>🏢</span> İstanbul, Türkiye
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span> info@deposit.com.tr
              </p>
              <p className="flex items-center gap-2">
                <span>📱</span> +90 (212) 000 00 00
              </p>
              <p className="flex items-center gap-2">
                <span>🕐</span> 7/24 Teknik Destek
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-slate-500">© 2025 DIM - Depozito İade Makineleri. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </div>
  </footer>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-50">
        <source
          src="https://rvmsystems.com.tr/wp-content/uploads/sites/19/2025/01/rvm_webbplats_ny-final.mp4"
          type="video/mp4"
        />
      </video>
      <div className="video-overlay absolute inset-0" />
    </div>

    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-emerald-500/40 to-cyan-500/30 rounded-full blur-3xl animate-float" />
      <div
        className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-32 left-1/3 w-72 h-72 bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '4s' }}
      />

      <div className="absolute top-1/4 left-16 text-7xl animate-bounce-slow opacity-40">♻️</div>
      <div className="absolute top-1/3 right-24 text-6xl animate-bounce-slow opacity-40" style={{ animationDelay: '0.5s' }}>
        🌱
      </div>
      <div className="absolute bottom-1/3 left-1/4 text-6xl animate-bounce-slow opacity-40" style={{ animationDelay: '1s' }}>
        🌍
      </div>
      <div className="absolute top-1/2 right-1/4 text-5xl animate-bounce-slow opacity-40" style={{ animationDelay: '1.5s' }}>
        ✨
      </div>
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center pt-24">
      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 border border-emerald-400/30 px-6 py-2.5 rounded-full mb-8 animate-pulse-glow shimmer">
        <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
        <span className="text-emerald-300 font-semibold">🇹🇷 Türkiye'nin DİS Ortağı</span>
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 text-xs font-black px-3 py-1 rounded-full">
          4 MARKA
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight text-shadow">
        Geleceği
        <br />
        <span className="gradient-text">Geri Dönüştür</span>
      </h1>

      <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
        <span className="text-emerald-400 font-bold">REVEGO</span> •<span className="text-blue-400 font-bold"> RVM Systems</span> •
        <span className="text-orange-400 font-bold"> Anker Andersen</span> •<span className="text-green-400 font-bold"> Ripet</span>
        <br />
        <span className="text-slate-400">Dört global markanın Türkiye distribütörü</span>
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <a
          href="#/products"
          className="group px-8 py-4 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-2xl font-bold text-lg text-white shadow-xl shadow-emerald-500/30 hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center gap-2"
        >
          📦 Ürünleri Keşfet
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href="#/contact"
          className="px-8 py-4 glass-card rounded-2xl font-bold text-lg text-white hover:bg-white/15 transition-all hover:scale-105 flex items-center gap-2"
        >
          📞 Teklif Al
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {[
          { value: '4', label: 'Global Marka', icon: '🌍', color: 'from-emerald-400 to-teal-500' },
          { value: '16', label: 'Farklı Ürün', icon: '📦', color: 'from-blue-400 to-indigo-500' },
          { value: '300/dk', label: 'Maks. Hız', icon: '⚡', color: 'from-orange-400 to-red-500' },
          { value: '%99.5', label: 'Doğruluk', icon: '🎯', color: 'from-purple-400 to-pink-500' },
        ].map((stat, i) => (
          <div key={i} className="glass-card rounded-2xl p-5 card-hover">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className={`text-3xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</div>
            <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span className="text-slate-500 text-xs uppercase tracking-widest">Aşağı Kaydır</span>
      <div className="w-8 h-12 border-2 border-slate-500/50 rounded-full flex justify-center pt-2">
        <div className="w-2 h-4 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full animate-bounce" />
      </div>
    </div>
  </section>
);

const ProductCard = ({ product }: { product: Product }) => {
  const materialColors: Record<Product['materials'][number], string> = {
    PET: 'bg-blue-500/30 text-blue-200 border-blue-400/40',
    Cam: 'bg-amber-500/30 text-amber-200 border-amber-400/40',
    Alüminyum: 'bg-slate-500/30 text-slate-200 border-slate-400/40',
  };

  return (
    <div className="group glass-card rounded-3xl overflow-hidden card-hover">
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20`} />
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

        <div className="absolute top-3 left-3">
          <span className={`bg-gradient-to-r ${product.color} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
            {product.category}
          </span>
        </div>

        {product.highlight && (
          <div className="absolute top-3 right-3">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 text-xs font-black px-3 py-1.5 rounded-full shadow-lg animate-pulse">
              {product.highlight}
            </span>
          </div>
        )}

        <div className="absolute bottom-3 right-3">
          <span className="glass text-white text-xs font-bold px-3 py-1.5 rounded-full">{product.brand}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{product.name}</h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.materials.map((mat) => (
            <span key={mat} className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${materialColors[mat]}`}>
              {mat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          {product.features.slice(0, 4).map((feature) => (
            <div key={feature} className="flex items-center gap-1.5 text-xs text-slate-300">
              <span className="text-emerald-400">✓</span>
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BrandCard = ({ brand }: { brand: Brand }) => (
  <a
    href={brand.website}
    target="_blank"
    rel="noreferrer"
    className={`group glass-card rounded-3xl p-7 card-hover block border-2 border-transparent hover:border-white/20`}
  >
    <div className="flex items-start justify-between mb-5">
      <div
        className={`w-16 h-16 bg-gradient-to-br ${brand.color} rounded-2xl flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all`}
      >
        {brand.emoji}
      </div>
      <span className="text-sm text-slate-400 font-medium bg-white/5 px-3 py-1 rounded-full">{brand.country}</span>
    </div>
    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{brand.name}</h3>
    <p className={`bg-gradient-to-r ${brand.color} bg-clip-text text-transparent font-bold text-sm mb-3`}>{brand.tagline}</p>
    <p className="text-slate-400 text-sm mb-5 line-clamp-2">{brand.description}</p>

    <div className="flex flex-wrap gap-2">
      {brand.features.map((f) => (
        <span key={f} className="text-xs bg-white/10 text-slate-300 px-3 py-1.5 rounded-full">
          {f}
        </span>
      ))}
    </div>
  </a>
);

const Home = () => (
  <>
    <Hero />

    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 text-sm font-bold px-5 py-2 rounded-full mb-4">
            💡 NEDEN DIM?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Depozito İade Sistemi <span className="gradient-text">(DİS)</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Türkiye genelinde zorunlu hale gelen DİS için en kapsamlı çözüm portföyü</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🤖', title: 'AI Tanıma', desc: 'Yapay zeka destekli ambalaj tanıma', color: 'from-violet-400 to-purple-500', glow: 'glow-purple' },
            { icon: '📡', title: 'IoT İzleme', desc: 'Gerçek zamanlı doluluk takibi', color: 'from-blue-400 to-cyan-500', glow: 'glow-blue' },
            { icon: '⚡', title: '%90 Sıkıştırma', desc: 'Patentli hacim azaltma', color: 'from-emerald-400 to-teal-500', glow: 'glow-green' },
            { icon: '🔧', title: '7/24 Destek', desc: 'Uzaktan tanılama ve servis', color: 'from-orange-400 to-red-500' },
          ].map((item) => (
            <div key={item.title} className={`glass-card rounded-2xl p-6 card-hover text-center ${item.glow || ''}`}>
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-xl`}>
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-blue-500/5" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 text-sm font-bold px-5 py-2 rounded-full mb-4">
            🌍 GLOBAL MARKALAR
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            4 Lider Marka, <span className="gradient-text">Tek Adres</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Avrupa'nın en prestijli üreticilerinin Türkiye distribütörüyüz</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{BRANDS.map((brand) => <BrandCard key={brand.id} brand={brand} />)}</div>
      </div>
    </section>

    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-400 text-sm font-bold px-5 py-2 rounded-full mb-4">
            ⭐ ÖNE ÇIKANLAR
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            En Popüler <span className="gradient-text">Ürünler</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.filter((p) => p.highlight).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-2xl font-bold text-lg text-white shadow-xl shadow-emerald-500/30 hover:shadow-cyan-500/50 transition-all hover:scale-105"
          >
            Tüm 16 Ürünü Gör
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30">
          <source src="https://rvmsystems.com.tr/wp-content/uploads/sites/19/2025/01/rvm_webbplats_ny-final.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Hemen <span className="gradient-text">Teklif Alın</span>
        </h2>
        <p className="text-xl text-slate-300 mb-8">İşletmenize en uygun depozito iade çözümünü birlikte belirleyelim</p>
        <a
          href="#/contact"
          className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-2xl font-bold text-xl text-white shadow-2xl shadow-emerald-500/30 hover:shadow-cyan-500/50 transition-all hover:scale-105"
        >
          <span>📞</span>Ücretsiz Danışmanlık
        </a>
      </div>
    </section>
  </>
);

const ProductsPage = () => {
  const [filter, setFilter] = useState<'all' | Brand['name']>('all');
  const filtered = useMemo(() => (filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.brand === filter)), [filter]);

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen pt-28">
      <div className="text-center mb-12">
        <span className="inline-block bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 text-sm font-bold px-5 py-2 rounded-full mb-4">
          📦 ÜRÜN KATALOĞU
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          <span className="gradient-text">16 Farklı</span> Çözüm
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Her ihtiyaca uygun depozito iade makinesi</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {(['all', 'REVEGO', 'RVM Systems', 'Anker Andersen', 'Ripet'] as const).map((brandName) => {
          const b = BRANDS.find((x) => x.name === brandName);
          return (
            <button
              key={brandName}
              onClick={() => setFilter(brandName)}
              className={`px-5 py-3 rounded-xl font-bold transition-all ${
                filter === brandName
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/30'
                  : 'glass text-slate-300 hover:text-white hover:bg-white/15'
              }`}
            >
              {brandName === 'all' ? '🌐 Tümü' : `${b?.emoji || ''} ${brandName}`}
            </button>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{filtered.map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </div>
  );
};

const BrandsPage = () => (
  <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen pt-28">
    <div className="text-center mb-16">
      <span className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 text-sm font-bold px-5 py-2 rounded-full mb-4">
        🏷️ MARKALARIMIZ
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        <span className="gradient-text">4 Global</span> Lider
      </h2>
    </div>

    <div className="space-y-8">
      {BRANDS.map((brand) => (
        <div
          key={brand.id}
          className="glass-card rounded-3xl overflow-hidden border-l-4 border-l-transparent hover:border-l-emerald-500 transition-all"
          style={{
            borderLeftColor: brand.color.includes('emerald')
              ? '#34d399'
              : brand.color.includes('blue')
                ? '#60a5fa'
                : brand.color.includes('orange')
                  ? '#fb923c'
                  : '#4ade80',
          }}
        >
          <div className="p-8 md:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              <div className={`w-20 h-20 bg-gradient-to-br ${brand.color} rounded-3xl flex items-center justify-center text-4xl shadow-2xl flex-shrink-0`}>
                {brand.emoji}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-3xl font-extrabold text-white">{brand.name}</h3>
                  <span className="text-sm bg-white/10 text-slate-300 px-3 py-1 rounded-full">{brand.country}</span>
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-sm bg-gradient-to-r ${brand.color} text-white px-4 py-1.5 rounded-full font-bold hover:opacity-80 transition-opacity`}
                  >
                    Web Sitesi →
                  </a>
                </div>
                <p className={`bg-gradient-to-r ${brand.color} bg-clip-text text-transparent font-bold text-lg mb-3`}>{brand.tagline}</p>
                <p className="text-slate-300 mb-5 max-w-3xl">{brand.description}</p>

                <div className="flex flex-wrap gap-2">
                  {brand.features.map((f) => (
                    <span key={f} className="flex items-center gap-2 text-sm bg-white/10 text-slate-200 px-4 py-2 rounded-xl">
                      <span className="text-emerald-400">✓</span>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-slate-900/50 p-6">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Bu Markadan Ürünler</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {PRODUCTS.filter((p) => p.brand === brand.name).map((product) => (
                <div key={product.id} className="glass rounded-xl p-3 hover:bg-white/10 transition-colors flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${product.color} rounded-lg flex items-center justify-center text-white text-xs font-bold`}>
                    {product.name.slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{product.name}</div>
                    <div className="text-xs text-slate-500">{product.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AboutPage = () => (
  <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen pt-28">
    <div className="text-center mb-16">
      <span className="inline-block bg-gradient-to-r from-violet-500/20 to-pink-500/20 text-violet-400 text-sm font-bold px-5 py-2 rounded-full mb-4">
        💡 HAKKIMIZDA
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        Türkiye'nin <span className="gradient-text">DİS Ortağı</span>
      </h2>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <h3 className="text-3xl font-extrabold text-white mb-6">DIM Kimdir?</h3>
        <p className="text-slate-300 mb-6 text-lg">
          DIM, 2025 yılında yürürlüğe giren Depozito İade Sistemi kapsamında Türkiye'nin en kapsamlı çözüm portföyünü sunan öncü şirkettir.
        </p>
        <p className="text-slate-400 mb-8">
          REVEGO, RVM Systems, Anker Andersen ve Ripet - 4 global markanın yetkili distribütörü olarak uçtan uca hizmet sunuyoruz.
        </p>

        <div className="grid grid-cols-3 gap-4">
          {[
            { v: '4', l: 'Marka', i: '🌍' },
            { v: '16', l: 'Ürün', i: '📦' },
            { v: '81', l: 'İl', i: '🇹🇷' },
          ].map((s) => (
            <div key={s.l} className="glass-card rounded-2xl p-4 text-center">
              <div className="text-2xl mb-1">{s.i}</div>
              <div className="text-2xl font-extrabold gradient-text">{s.v}</div>
              <div className="text-xs text-slate-400">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card rounded-3xl p-8">
        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">🔧 Hizmetlerimiz</h4>
        <div className="space-y-4">
          {[
            { i: '🔍', t: 'İhtiyaç Analizi', d: 'En uygun çözümü belirliyoruz' },
            { i: '🚚', t: 'Kurulum', d: 'Profesyonel ekiple yerinde kurulum' },
            { i: '🔧', t: 'Bakım & Servis', d: '7/24 teknik destek' },
            { i: '📊', t: 'İzleme', d: 'Uzaktan performans takibi' },
          ].map((item) => (
            <div key={item.t} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                {item.i}
              </div>
              <div>
                <h5 className="text-white font-semibold">{item.t}</h5>
                <p className="text-slate-400 text-sm">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="glass-card rounded-3xl p-8 md:p-12">
      <h3 className="text-2xl font-extrabold text-white mb-8 text-center">♻️ Depozito İade Süreci</h3>
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { s: '1', t: 'Toplama', d: 'Ambalaj makineye bırakılır', i: '📥', c: 'from-blue-400 to-cyan-500' },
          { s: '2', t: 'Tanıma', d: 'AI ile doğrulama yapılır', i: '🔍', c: 'from-violet-400 to-purple-500' },
          { s: '3', t: 'İade', d: 'Depozito ödenir', i: '💳', c: 'from-emerald-400 to-teal-500' },
          { s: '4', t: 'Geri Dönüşüm', d: 'Ambalaj geri kazanılır', i: '♻️', c: 'from-green-400 to-lime-500' },
        ].map((item) => (
          <div key={item.s} className="text-center">
            <div className={`w-20 h-20 bg-gradient-to-br ${item.c} rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-xl`}>
              {item.i}
            </div>
            <div className={`inline-block bg-gradient-to-r ${item.c} text-white text-xs font-bold px-3 py-1 rounded-full mb-2`}>Adım {item.s}</div>
            <h4 className="text-white font-bold mb-2">{item.t}</h4>
            <p className="text-slate-400 text-sm">{item.d}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen pt-28">
      <div className="text-center mb-16">
        <span className="inline-block bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-400 text-sm font-bold px-5 py-2 rounded-full mb-4">
          📞 İLETİŞİM
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Hemen <span className="gradient-text">Ulaşın</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Ücretsiz Danışmanlık</h3>
          <p className="text-slate-300 mb-8 text-lg">Uzman ekibimiz sizi bekliyor. İşletmenize en uygun çözümü birlikte belirleyelim.</p>

          <div className="space-y-4 mb-10">
            {[
              { i: '📍', l: 'Adres', v: 'İstanbul, Türkiye' },
              { i: '📧', l: 'E-posta', v: 'info@deposit.com.tr' },
              { i: '📞', l: 'Telefon', v: '+90 (212) 000 00 00' },
              { i: '⏰', l: 'Destek', v: '7/24 Teknik Destek' },
            ].map((item) => (
              <div key={item.l} className="flex items-center gap-4 p-4 glass-card rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center text-xl">{item.i}</div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">{item.l}</div>
                  <div className="text-white font-semibold">{item.v}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Marka Web Siteleri</h4>
            <div className="grid grid-cols-2 gap-3">
              {BRANDS.map((b) => (
                <a
                  key={b.id}
                  href={b.website}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r ${b.color} bg-opacity-10 hover:bg-opacity-20 transition-all`}
                >
                  <span className="text-2xl">{b.emoji}</span>
                  <span className="text-white font-medium text-sm">{b.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card p-8 rounded-3xl">
          {submitted ? (
            <div className="text-center py-16">
              <div className="text-7xl mb-6">✅</div>
              <h3 className="text-2xl font-bold text-white mb-2">Teşekkürler!</h3>
              <p className="text-slate-400">En kısa sürede sizinle iletişime geçeceğiz.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm text-slate-400 mb-2">Ad Soyad *</label>
                <input
                  required
                  className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500/50 outline-none"
                  placeholder="Adınız Soyadınız"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">E-posta *</label>
                  <input
                    required
                    type="email"
                    className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500/50 outline-none"
                    placeholder="ornek@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Telefon</label>
                  <input
                    type="tel"
                    className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500/50 outline-none"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Şirket</label>
                <input
                  className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500/50 outline-none"
                  placeholder="Şirket Adı"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">İlgilendiğiniz Marka</label>
                <select className="w-full glass rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500/50 outline-none">
                  <option value="" className="bg-slate-800">
                    Seçiniz
                  </option>
                  {BRANDS.map((b) => (
                    <option key={b.id} value={b.id} className="bg-slate-800">
                      {b.emoji} {b.name}
                    </option>
                  ))}
                  <option value="all" className="bg-slate-800">
                    🌐 Hepsi
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Mesajınız *</label>
                <textarea
                  required
                  rows={4}
                  className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500/50 outline-none resize-none"
                  placeholder="İhtiyacınızı kısaca açıklayın..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-emerald-500/30 hover:shadow-cyan-500/50 transition-all hover:scale-[1.02]"
              >
                📤 Gönder
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default function DepositApp() {
  const [path, setPath] = useState('#/');

  useEffect(() => {
    const sync = () => setPath(window.location.hash || '#/');
    sync();

    const onHashChange = () => {
      sync();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main>
        {path === '#/' && <Home />}
        {path === '#/products' && <ProductsPage />}
        {path === '#/brands' && <BrandsPage />}
        {path === '#/about' && <AboutPage />}
        {path === '#/contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
}

