
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#D8D8D8",
        secondary: "#262626",
        btnClr: "#2B2B2B",
        rgbWhite: "rgba(255, 255, 255, 0.60)",
      },
      maxWidth: {
        container: "1604px",
      },
    },
  },
  plugins: [],
};
