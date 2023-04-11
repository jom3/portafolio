/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
        '200': '50rem',
        '256': '64rem',
        '300': '75rem',
        '330': '82.5rem',
        '360': '90rem',
      },
      height:{
        '128': '32rem',
      }
    },
    screens:{
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'smx':{'min':'767px'}
    }
  },
  plugins: [],
}
