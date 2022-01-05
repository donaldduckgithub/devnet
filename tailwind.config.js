const { theme } = require('tailwindcss/defaultConfig')

module.exports = {
  theme: {
    screens: {
      'sm': '400px',
      // => @media (min-width: 640px) { ... }

      'md': '550px',
      // => @media (min-width: 768px) { ... }

      'lg': '700px',
      // => @media (min-width: 1024px) { ... }

      'xl': '850px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1024px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        main: '#38b2ac',
        'myblue': '#021925',
        'myblue2': '#04344d'
      },
    },
  },

}