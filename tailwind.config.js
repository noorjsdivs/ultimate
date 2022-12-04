/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "375px",
      sml: "500px",
      md: "667px",
      mdl: "768px",
      lg: "960px",
      lgl: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
    extend: {
      fontFamily: {
        bodyFont: ["Inter", "sans-serif"],
      },
      colors: {
        darkBlue: "#1678CB",
        lightBlue: "#3B8BEA",
        extraLightBlue: "#68D6F5",
        black: "#242424",
      },
      boxShadow: {
        testShadowOne: "box-shadow: 0px 0px 32px 5px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
