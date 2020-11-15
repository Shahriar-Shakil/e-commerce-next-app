module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
        primary: "#ffba00",
        danger: "#ff0000",
      },
    },
  },
  variants: {},
  plugins: [],
};
