module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    backgroundImage: {
      "mobile-bg":
        "url('../public/assets/images/pattern-background-mobile.svg')",
      "desktop-bg":
        "url('../public/assets/images/pattern-background-desktop.svg')",
    },
    minHeight: {
      "3/4": "75%",
    },
    maxWidth: {
      400: "400px",
    },
    extend: {},
  },
  plugins: [],
};
