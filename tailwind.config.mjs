/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#0bda95',
				'primary-hover': '#09c486',
				'primary-dark': '#08a571',
				'background-light': '#f5f8f7',
				'background-dark': '#10221c',
				'surface-light': '#ffffff',
				'surface-dark': '#1a362e',
				'card-dark': '#162e26',
				'text-main': '#0d1c17',
				'text-main-light': '#0d1c17',
				'text-main-dark': '#e7f4ef',
				'text-muted': '#499c81',
				'text-muted-light': '#499c81',
				'text-muted-dark': '#8cbdb1',
				'text-secondary': '#499c81',
				'border-light': '#cee8e0',
				'border-dark': '#2a4037',
			},
			fontFamily: {
				display: ['Inter', 'sans-serif'],
				body: ['Noto Sans', 'sans-serif'],
				sans: ['Inter', 'sans-serif'],
			},
			borderRadius: {
				DEFAULT: '0.25rem',
				lg: '0.5rem',
				xl: '0.75rem',
				full: '9999px',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
