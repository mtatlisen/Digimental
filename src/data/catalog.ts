export type Product = {
	id: string;
	name: string;
	brand: string;
	cap: string;
	speed: string;
	type: string;
	img: string;
	tag?: string;
};

export type Brand = {
	name: string;
	country: string;
	flag: string;
	desc: string;
	url: string;
};

export const PRODUCTS: Product[] = [
	{
		id: 'i10',
		name: 'iECO i10',
		brand: 'REVEGO',
		cap: '600 şişe',
		speed: '-',
		type: 'Cam',
		img: 'https://revego.net/wp-content/uploads/2025/07/i10t1.jpg',
	},
	{
		id: 'i20',
		name: 'iECO i20',
		brand: 'REVEGO',
		cap: '460/800',
		speed: '-',
		type: 'PET + Kutu',
		img: 'https://revego.net/wp-content/uploads/2025/07/REVEGO-i20.webp',
	},
	{
		id: 'i30',
		name: 'iECO i30',
		brand: 'REVEGO',
		cap: '1.660',
		speed: '-',
		type: 'Tümü',
		img: 'https://revego.net/wp-content/uploads/2025/07/REVEGO-i30.webp',
	},
	{
		id: 'i100',
		name: 'iECO i100',
		brand: 'REVEGO',
		cap: '5.000+',
		speed: '120/dk',
		type: 'Tümü',
		img: 'https://revego.net/wp-content/uploads/2025/07/REVEGO-iECO-i100.webp',
		tag: 'Mobil',
	},
	{
		id: 'xpro',
		name: 'X ProLine',
		brand: 'RVM Systems',
		cap: 'Modüler',
		speed: '60/dk',
		type: 'Tümü',
		img: 'https://rvmsystems.com.tr/wp-content/uploads/sites/19/2025/01/rvm-xproline.jpg',
	},
	{
		id: 'mega',
		name: 'Mega ProLine+',
		brand: 'RVM Systems',
		cap: '8 Kabin',
		speed: '100/dk',
		type: 'Tümü',
		img: 'https://rvmsystems.com.tr/wp-content/uploads/sites/19/2025/01/rvm-mega-proline.jpg',
		tag: 'Popüler',
	},
	{
		id: 'x20',
		name: 'X20',
		brand: 'RVM Systems',
		cap: 'Kompakt',
		speed: '50/dk',
		type: 'PET + Kutu',
		img: 'https://rvmsystems.com.tr/wp-content/uploads/sites/19/2025/01/rvm-x20.jpg',
	},
	{
		id: 'cfront',
		name: 'C-FRONT',
		brand: 'Ripet',
		cap: '6.000',
		speed: '-',
		type: 'PET',
		img: 'https://ripet.it/wp-content/uploads/2024/05/Ripet-ecocompattatore-CFRONT-web.png',
		tag: '6x Sıkıştırma',
	},
	{
		id: 'cta',
		name: 'C-TA',
		brand: 'Ripet',
		cap: '3.500',
		speed: '-',
		type: 'PET',
		img: 'https://ripet.it/wp-content/uploads/2024/04/Ripet-C-TA.png',
	},
	{
		id: 'plastc',
		name: 'Plast-C',
		brand: 'Ripet',
		cap: '6.000',
		speed: '-',
		type: 'PET',
		img: 'https://ripet.it/wp-content/uploads/2025/10/Ripet-ecocompattatore-Plast-C.png',
		tag: 'Yeni',
	},
	{
		id: 'uol',
		name: 'UOL',
		brand: 'Ripet',
		cap: '25.000',
		speed: '-',
		type: 'PET',
		img: 'https://ripet.it/wp-content/uploads/2025/01/Ripet-ecocompattatore-uol.png',
	},
	{
		id: 'mduc',
		name: 'MDU C',
		brand: 'Anker Andersen',
		cap: '-',
		speed: '100/dk',
		type: 'Tümü',
		img: 'https://www.anker-andersen.dk/images/Product/HLZ-MDU-C.JPG',
	},
	{
		id: 'ultra',
		name: 'MD Ultra',
		brand: 'Anker Andersen',
		cap: '-',
		speed: '300/dk',
		type: 'Tümü',
		img: 'https://www.anker-andersen.dk/images/Product/HLZ-MDU.jpg',
		tag: 'En Hızlı',
	},
	{
		id: 'duo',
		name: 'Duo Disc',
		brand: 'Anker Andersen',
		cap: '-',
		speed: '300/dk',
		type: 'Tümü',
		img: 'https://www.anker-andersen.dk/images/frontpage/system_komplet.jpg',
	},
	{
		id: 'qubc',
		name: 'QUBC Center',
		brand: 'Anker Andersen',
		cap: 'HoReCa',
		speed: '-',
		type: 'Tümü',
		img: 'https://www.anker-andersen.dk/images/Product/QUBC.JPG',
	},
];

export const BRANDS: Brand[] = [
	{
		name: 'REVEGO',
		country: 'Türkiye',
		flag: '🇹🇷',
		desc: 'Yerli üretim, iF 2025 ödüllü',
		url: 'https://revego.net/tr/',
	},
	{
		name: 'RVM Systems',
		country: 'İsveç',
		flag: '🇸🇪',
		desc: '40+ pazarda 17 milyar ambalaj',
		url: 'https://rvmsystems.com.tr/',
	},
	{
		name: 'Ripet',
		country: 'İtalya',
		flag: '🇮🇹',
		desc: 'Patentli RiPress, %90 sıkıştırma',
		url: 'https://ripet.it/en/',
	},
	{
		name: 'Anker Andersen',
		country: 'Danimarka',
		flag: '🇩🇰',
		desc: '300/dk hız, %99.5 doğruluk',
		url: 'https://www.anker-andersen.dk/en/',
	},
];

export const NAV = [
	{ label: 'Ana Sayfa', href: '/' },
	{ label: 'Ürünler', href: '/products' },
	{ label: 'Markalar', href: '/brands' },
	{ label: 'İletişim', href: '/contact' },
] as const;

