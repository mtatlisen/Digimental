// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.digimental.com.tr',
	integrations: [
		starlight({
			title: 'Digimental',
			description: 'Digimental - Dijital Çözümler ve Yazılım Hizmetleri',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Türkçe',
					lang: 'tr',
				},
			},
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: false,
			},
			social: [
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/company/digimental' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/digimental' },
			],
			sidebar: [
				{
					label: 'Hizmetlerimiz',
					items: [
						{ label: 'Yazılım Geliştirme', slug: 'guides/yazilim-gelistirme' },
						{ label: 'Dijital Dönüşüm', slug: 'guides/dijital-donusum' },
						{ label: 'Danışmanlık', slug: 'guides/danismanlik' },
					],
				},
				{
					label: 'Hakkımızda',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
