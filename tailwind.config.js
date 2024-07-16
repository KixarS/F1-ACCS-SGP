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
          100: '#b4ded4',
          200: '#86cab9',
          300: '#3e9f86', // add topic button in sidebar
          400: '#397767',
          500: '#03474B', // main
          600: '#25876d',
          700: '#20775f',
          800: '#1b6751',
          900: '#124b37',
        },
        'secondary': "75B498",
      },
      fontFamily: {
        sans: ['"Kanit"', ...defaultTheme.fontFamily.sans],
      },
      plugins: [],
    },
  },
};
