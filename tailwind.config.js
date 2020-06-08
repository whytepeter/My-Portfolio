module.exports = {
  theme: {
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        accent: "#F2994A",
        light: "#F2F2F2",
        text2: "#333333",
        text1: "#828282",
        textHover: "#BDBDBD",
      },
    },
  },

  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./public/**/*.html", "./src/**/*.vue"],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
      ],
    },
  },
}
