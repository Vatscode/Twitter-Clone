

import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},
  },

  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      "dark",
      {
        black: {
          ...daisyUIThemes["black"],
          primary: "rgb(30, 139, 212)", // Example primary color (blue)
          secondary: "rgb(23, 87, 119)", // Example secondary color (dark background)
         
        },
      },
    ],
  },
};
