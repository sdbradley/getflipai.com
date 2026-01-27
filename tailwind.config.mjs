/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f2942',
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#1f3a52',
          900: '#0f2942',
        },
        accent: {
          DEFAULT: '#c27c4e',
          50: '#fdf8f4',
          100: '#faede3',
          200: '#f4d9c5',
          300: '#e9bc9a',
          400: '#d9976a',
          500: '#c27c4e',
          600: '#b06a3d',
          700: '#935634',
          800: '#77452c',
          900: '#5f3825',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
