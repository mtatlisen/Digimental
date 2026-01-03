/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0bda95',
        'primary-hover': '#09c486',
        'primary-dark': '#09a06e',
        'background-light': '#f5f8f7',
        'background-dark': '#10221c',
        'surface-light': '#ffffff',
        'surface-dark': '#1a362e',
        'text-main': '#0d1c17',
        'text-muted': '#499c81',
        'border-light': '#e7f4ef',
        'border-dark': '#2a453b',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
