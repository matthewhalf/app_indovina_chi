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
  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f5f5",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
        },
      },
      "dark",
      "cupcake",
    ],
    darkTheme: "mytheme", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}

