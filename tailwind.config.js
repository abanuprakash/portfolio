module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        appBg: {
          light: '#f2f4f9',
          white: '#fff'
        },
        font: {
          red: '#ff4d5f',
          lavender: '#682ea2',
          light: '#ccd0e3',
          primary: '#464646',
          blackLight: '#4646468f'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}