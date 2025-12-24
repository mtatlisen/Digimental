export interface Brand {
	name: string;
	country: string;
	flag: string;
	tagline: string;
	url: string;
	color: string;
}

export const brands: Brand[] = [
	{
		name: 'REVEGO',
		country: 'Türkiye',
		flag: '🇹🇷',
		tagline: 'Yerli üretim, iF 2025 ödüllü',
		url: 'https://revego.net/tr/',
		color: '#10b981',
	},
	{
		name: 'RVM Systems',
		country: 'İsveç',
		flag: '🇸🇪',
		tagline: '40+ pazarda 17 milyar ambalaj',
		url: 'https://rvmsystems.com.tr/',
		color: '#3b82f6',
	},
	{
		name: 'Ripet',
		country: 'İtalya',
		flag: '🇮🇹',
		tagline: 'Patentli RiPress teknolojisi',
		url: 'https://ripet.it/en/',
		color: '#22c55e',
	},
	{
		name: 'Anker Andersen',
		country: 'Danimarka',
		flag: '🇩🇰',
		tagline: 'Sanayi tipi, 300/dk hız',
		url: 'https://www.anker-andersen.dk/en/',
		color: '#f59e0b',
	},
];
