/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        paragraphGray: '#7987a1',
        secondaryDark: '#042638',
        primary: '#0ebab1',
        lightGray: '#fafafa',
        secondaryLight: '#0f5377',
        primaryLight: rgba(14, 186, 177, 0.03),
        headingDark: '#042638',
        black: '#171717',
        darkGray50: rgba(175, 175, 175, 0.5),
        headingLight: '#e9e9e9',
        white50: 'rgba(255, 255, 255, .7)',
        transparent: rgba(14, 186, 177, 0),
      },
    },
  },
  plugins: [],
};
