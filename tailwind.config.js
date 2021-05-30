module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main': '#5967ea',// 89, 103, 234
        'bg': '#2c2f33',
        'bg-deep': '#23272a',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
