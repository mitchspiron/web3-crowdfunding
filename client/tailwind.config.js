/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#0A0A0A", // Noir plus profond
          800: "#1A1A1A", // Noir pour la barre latérale
          700: "#2D2D2D", // Noir pour les cartes
          600: "#3D3D3D", // Noir pour les hover
        },
      },
    },
  },
  plugins: [],
};
