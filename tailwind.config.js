const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        primary: {
          DEFAULT: '03474B',
          100: '#3e7275',
          200: '#2f676b',
          300: '#215d60', 
          400: '#125256',
          500: '#03474B', // main
          600: '#034347',
          700: '#033f42',
          800: '#023a3e',
          900: '#011d1f',
        },
        secondary: {
          DEFAULT: '75B498',
          100: '#b6d7c8',
          200: '#a6cebc',
          300: '#9ecab6', 
          400: '#85bda4',
          500: '#75b498', // main
          600: '#60947d',
          700: '#537f6b',
          800: '#456a59',
          900: '#304a3f',
        },
        black: {
          DEFAULT: '252525',
          100: '#585858',
          200: '#4b4b4b',
          300: '#3f3f3f', 
          400: '#323232',
          500: '#252525', // main
          600: '#232323',
          700: '#212121',
          800: '#1e1e1e',
          900: '#111111',
        },
      },
      fontFamily: {
        sans: ['"Kanit"', ...defaultTheme.fontFamily.sans],
      },
      plugins: [],
    },
  },
};
