export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  features: string[];
  materials: string[];
  image: string;
  category: string;
  color: string;
  highlight?: string;
}

export interface Brand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  country: string;
  emoji: string;
  website: string;
  color: string;
  features: string[];
}

export const PRODUCTS: Product[] = [
  { id: 'ieco-i10', name: 'iECO i10', brand: 'REVEGO', description: 'Cam şişeler için tasarlanmış kompakt çözüm. AI şekil tanıma ile donatılmış.', features: ['15" dokunmatik', '360° barkod', 'AI tanıma', '600 cam şişe'], materials: ['Cam'], image: 'https://revego.net/wp-content/uploads/2025/07/i10t1.jpg', category: 'Kompakt RVM', color: 'from-emerald-400 to-teal-500' },
  { id: 'ieco-i20', name: 'iECO i20', brand: 'REVEGO', description: 'PET ve teneke kutular için yüksek verimli sıkıştırma sistemi.', features: ['QR kod', 'AI tanıma', '460 PET/800 kutu', 'Çoklu ödeme'], materials: ['PET', 'Alüminyum'], image: 'https://revego.net/wp-content/uploads/2025/07/REVEGO-i20.webp', category: 'Kompakt RVM', color: 'from-blue-400 to-cyan-500' },
  { id: 'ieco-i30', name: 'iECO i30', brand: 'REVEGO', description: 'Tüm malzemeler için çok yönlü endüstriyel çözüm.', features: ['Tüm malzemeler', 'Cam kırma', '1660 toplam', '15" ekran'], materials: ['PET', 'Cam', 'Alüminyum'], image: 'https://revego.net/wp-content/uploads/2025/07/REVEGO-i30.webp', category: 'Endüstriyel', color: 'from-violet-400 to-purple-500' },
  { id: 'ieco-i100', name: 'iECO i100', brand: 'REVEGO', description: 'Mobil iade merkezi. Festival ve etkinlikler için ideal.', features: ['120 adet/dk', 'Mobil', '27" ekran', '5000+ kapasite'], materials: ['PET', 'Cam', 'Alüminyum'], image: 'https://revego.net/wp-content/uploads/2025/07/REVEGO-iECO-i100.webp', category: 'Mobil', color: 'from-orange-400 to-red-500', highlight: 'MOBİL' },
  { id: 'rvm-x-proline', name: 'RVM X ProLine', brand: 'RVM Systems', description: 'Modüler ve genişletilebilir. 8 kabinete kadar büyüyebilir.', features: ['60 adet/dk', '10.1" ekran', 'Modüler', 'Euro palet'], materials: ['PET', 'Cam', 'Alüminyum'], image: 'https://rvmsystems.com.tr/wp-content/uploads/sites/19/2025/01/rvm-xproline.jpg', category: 'Modüler', color: 'from-cyan-400 to-blue-500' },
  { id: 'rvm-mega-proline', name: 'RVM Mega ProLine+', brand: 'RVM Systems', description: 'Çoklu besleme ile büyük torbaları tek seferde boşaltın!', features: ['100 adet/dk', '21.5" ekran', 'Çoklu besleme', '8 kabin'], materials: ['PET', 'Cam', 'Alüminyum'], image: 'https://rvmsystems.com.tr/wp-content/uploads/sites/19/2025/01/rvm-mega-proline.jpg', category: 'Çoklu Besleme', color: 'from-indigo-400 to-violet-500', highlight: 'POPÜLER' },
  { id: 'rvm-x20', name: 'RVM X20', brand: 'RVM Systems', description: 'Küçük mağazalar için kompakt ve verimli.', features: ['50 adet/dk', 'Kompakt', 'Sıkıştırma', 'Kolay kurulum'], materials: ['PET', 'Alüminyum'], image: 'https://rvmsystems.com.tr/wp-content/uploads/sites/19/2025/01/rvm-x20.jpg', category: 'Kompakt', color: 'from-teal-400 to-emerald-500' },
  { id: 'ripet-c-front', name: 'Ripet C-FRONT', brand: 'Ripet', description: 'Patentli RiPress ile 6 kat kapasite! 6.000 şişe/1m³', features: ['6.000 şişe', '%90 sıkıştırma', '24/7 toplama', 'DRS uyumlu'], materials: ['PET', 'Alüminyum'], image: 'https://ripet.it/wp-content/uploads/2024/05/Ripet-ecocompattatore-CFRONT-web.png', category: 'Eko-Kompaktör', color: 'from-green-400 to-emerald-500', highlight: '6X KAPASİTE' },
  { id: 'ripet-c-ta', name: 'Ripet C-TA', brand: 'Ripet', description: 'Sınırlı alan için ideal. Tek fazlı elektrik bağlantısı.', features: ['3.500 şişe', '2.2 KW', 'İç/dış mekan', 'Uzaktan izleme'], materials: ['PET', 'Alüminyum'], image: 'https://ripet.it/wp-content/uploads/2024/04/Ripet-C-TA.png', category: 'Kompakt', color: 'from-lime-400 to-green-500' },
  { id: 'ripet-plast-c', name: 'Ripet Plast-C', brand: 'Ripet', description: "Geri dönüşümlü HDPE'den üretim. %100 sürdürülebilir!", features: ['Geri dönüşümlü', 'Kaynak yok', '%100 recycle', 'Uzun ömür'], materials: ['PET', 'Alüminyum'], image: 'https://ripet.it/wp-content/uploads/2025/10/Ripet-ecocompattatore-Plast-C.png', category: 'Sürdürülebilir', color: 'from-emerald-300 to-green-500', highlight: 'YENİ' },
  { id: 'ripet-uol', name: 'Ripet UOL', brand: 'Ripet', description: '25.000 şişe kapasitesi! Havalimanı ve stadyumlar için.', features: ['25.000 şişe', '4 hazne', 'ATM tarzı', 'Dış mekan'], materials: ['PET', 'Alüminyum'], image: 'https://ripet.it/wp-content/uploads/2025/01/Ripet-ecocompattatore-uol.png', category: 'Dev Kapasite', color: 'from-yellow-400 to-orange-500', highlight: 'MAX' },
  { id: 'hlz-mdu-c', name: 'HLZ® MDU C', brand: 'Anker Andersen', description: 'Self-servis sayma istasyonu. Endüstriyel performans.', features: ['100+ adet/dk', 'Self-servis', 'Paslanmaz', 'CE/UL onaylı'], materials: ['PET', 'Cam', 'Alüminyum'], image: 'https://www.anker-andersen.dk/images/Product/HLZ-MDU-C.JPG', category: 'Sayma', color: 'from-slate-400 to-zinc-500' },
  { id: 'hlz-md-ultra', name: 'HLZ® MD Ultra', brand: 'Anker Andersen', description: '300 adet/dk! 360° barkod ile marka bazlı ayıklama.', features: ['300 adet/dk', '360° scanner', '%99.5 doğruluk', 'Marka ayıklama'], materials: ['PET', 'Cam', 'Alüminyum'], image: 'https://www.anker-andersen.dk/images/Product/HLZ-MDU.jpg', category: 'Ultra Hızlı', color: 'from-red-400 to-pink-500', highlight: 'EN HIZLI' },
  { id: 'hlz-dd', name: 'HLZ® Duo Disc', brand: 'Anker Andersen', description: 'Çift konveyör hattı ile ultra yüksek hız.', features: ['Çift hat', '300 adet/dk', 'AISI314', 'Özel ayıklama'], materials: ['PET', 'Cam', 'Alüminyum'], image: 'https://www.anker-andersen.dk/images/frontpage/system_komplet.jpg', category: 'Endüstriyel', color: 'from-amber-400 to-orange-500' },
  { id: 'qubc-center', name: 'QUBC® Center', brand: 'Anker Andersen', description: 'HoReCa ve kurumsal kullanım için özel tasarım.', features: ['HoReCa odaklı', 'Kompakt', 'Profesyonel', 'Düşük bakım'], materials: ['PET', 'Cam', 'Alüminyum'], image: 'https://www.anker-andersen.dk/images/Product/QUBC.JPG', category: 'Kurumsal', color: 'from-purple-400 to-indigo-500' }
];

export const BRANDS: Brand[] = [
  { id: 'revego', name: 'REVEGO', tagline: 'Dönüştür, Sürdür, Kazan!', description: "Türkiye'nin yerli üreticisi. 2025 iF Tasarım Ödülü sahibi.", country: '🇹🇷 Türkiye', emoji: '🔄', website: 'https://revego.net/tr/', color: 'from-emerald-400 to-teal-500', features: ['Yerli Üretim', 'iF 2025 Ödülü', '7/24 Destek', 'DYS Uyumlu'] },
  { id: 'rvm-systems', name: 'RVM Systems', tagline: 'Circular Economy Leader', description: 'İsveç mühendisliği. 40+ pazarda 17 milyar ambalaj.', country: '🇸🇪 İsveç', emoji: '♻️', website: 'https://rvmsystems.com.tr/', color: 'from-blue-400 to-indigo-500', features: ['40+ Pazar', '17B Toplama', '30+ Yıl', 'Dijital Araçlar'] },
  { id: 'anker-andersen', name: 'Anker Andersen', tagline: 'High Speed Counting', description: "Danimarka'nın endüstriyel devi. 300/dk hız, %99.5 doğruluk.", country: '🇩🇰 Danimarka', emoji: '⚙️', website: 'https://www.anker-andersen.dk/en/', color: 'from-orange-400 to-red-500', features: ['300/dk Hız', '%99.5 Doğruluk', 'Paslanmaz Çelik', 'Global Lider'] },
  { id: 'ripet', name: 'Ripet', tagline: 'Bottle to Bottle', description: 'İtalyan tasarımı. Patentli RiPress ile %90 sıkıştırma.', country: '🇮🇹 İtalya', emoji: '🌱', website: 'https://ripet.it/en/', color: 'from-green-400 to-lime-500', features: ['%90 Sıkıştırma', '6x Kapasite', '700+ Makine', 'ISO-14001'] }
];

export const NAV_ITEMS = [
  { label: 'Ana Sayfa', href: '/', icon: '🏠' },
  { label: 'Ürünler', href: '/products', icon: '📦' },
  { label: 'Markalar', href: '/brands', icon: '🏷️' },
  { label: 'Hakkımızda', href: '/about', icon: '💡' },
  { label: 'İletişim', href: '/contact', icon: '📞' }
];
