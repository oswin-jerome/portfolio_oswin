module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./md/**/*.md"],
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
          // background: "#151D34",
          background: "#18120F",
        },
      },
    },
    container: {
      padding: "1rem",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
