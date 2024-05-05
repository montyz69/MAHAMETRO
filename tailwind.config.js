/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslateblue: "#612570",
        white: "#fff",
        purple: "rgba(126, 48, 146, 0.1)",
        black: "#000",
        chocolate: "#d87112",
        gainsboro: "#d9d9d9",
        brown: "#c03d3d",
        mediumseagreen: "#34a853",
        gray: {
          "100": "#868686",
          "200": "#858585",
          "300": "rgba(255, 255, 255, 0.1)",
        },
        deepskyblue: "#1eafed",
        red: "#d81212",
        darkslategray: "#404040",
        deeppink: "#ea168e",
        whitesmoke: "#eef2f5",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "fira-code": "'Fira Code'",
      },
      borderRadius: {
        lg: "18px",
        sm: "14px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lg: "18px",
      "109xl": "128px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
