/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Para el archivo HTML en la raíz
    "./src/**/*.{js,jsx}", // Para todos los archivos dentro de `src`
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkBG: "#0a0519",
        titleColor: "#ec672d",
        barColor: "#cc932e(12,88%,95%)",
        whiteColor: "#fffbee",
      },
    },
  },
  plugins: [],
};
