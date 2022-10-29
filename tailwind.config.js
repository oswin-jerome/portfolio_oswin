module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#E1AA8F",
        // accent: "#ECC19A",
        textGrey: "#4E4E4E",
        light: {
          accentLight: "#FFF5F0",
          // accentLight: "#f5f5f5",
        },
        dark: {
          background: "#151D34",
        },
      },
    },
    container: {
      padding: "1rem",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
