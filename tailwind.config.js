module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        accent:"#ECC19A",
        textGrey:"#4E4E4E",
        light:{
          accentLight:"#f5f5f5",
        },
        dark:{
          background:"#151D34",
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
