/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      'green-vogue': {
        '50': '#eafaff',
        '100': '#cff4ff',
        '200': '#aaefff',
        '300': '#6fe8ff',
        '400': '#2cd7ff',
        '500': '#00b5ff',
        '600': '#008cff',
        '700': '#0072ff',
        '800': '#0060e0',
        '900': '#0055af',
        '950': '#022d5a',
    }
    },
    extend: {},
  },
  plugins: [],
}

