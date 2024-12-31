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
        brightRed: "hsl(12,88%,59%)",
        brightRedLight: "hsl(12,88%,69%)",
        brightRedSuplight: "hsl(12,88%,95%)",
      },
    },
  },
  plugins: [],
};
