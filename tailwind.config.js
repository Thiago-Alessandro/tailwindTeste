/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'mb': '320px',

      'tb': '768px',
      // => @media (min-width: 768px) { ... }

      'desk': '1024px',
      // => @media (min-width: 1024px) { ... }

      'hd': '1440px',
      // => @media (min-width: 1280px) { ... }

      'xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

