module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl":
          "0 1px 10px 0 hsla(210, 7%, 22%, .06), 0 2px 4px 0 hsla(210, 7%, 22%, .08);",
        "4xl": "0px 7px 18px rgba(0, 0, 0, 0.1)",
        "5xl": "0 2px 4px rgba(0,0,0,0.18)",
      },
    },
  },
  plugins: [],
};
