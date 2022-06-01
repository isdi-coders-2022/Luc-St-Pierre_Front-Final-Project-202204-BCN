module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl":
          "0 1px 10px 0 hsla(210, 7%, 22%, .06), 0 2px 4px 0 hsla(210, 7%, 22%, .08);",
      },
    },
  },
  plugins: [],
};
