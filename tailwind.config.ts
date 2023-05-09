/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#BBB0FF",
        primary: {
          100: "#E6E0FF",
          90: "#D4CCFF",
          80: "#BBB0FF",
          70: "#8B80DB",
          60: "#6358B7",
          50: "#4F4692",
          40: "#3F3875",
          30: "#3D3860",
          20: "#343248",
          10: "#2D2A3D",
        },
        neutral: {
          100: "#FFFFFF",
          90: "#E1E1E1",
          80: "#C3C3C3",
          70: "#949494",
          60: "#717070",
          50: "#565656",
          40: "#3C3C3C",
          30: "#272727",
          20: "#191919",
          "00": "#00000",
        },
        sucess: {
          100: "#ECFAE9",
          90: "#C3EDBA",
          80: "#9DDA90",
          70: "#7AC26C",
          60: "#6EB260",
          50: "#5F9954",
          40: "#407435",
          30: "#325B2A",
          20: "#24421E",
          10: "#172913",
        },
        error: {
          100: "#FFEDED",
          90: "#FFB3B4",
          80: "#FF888A",
          70: "#F57375",
          60: "#E86164",
          50: "#C9595A",
          40: "#9B3536",
          30: "#7A292A",
          20: "#581E1F",
          10: "#371313",
        },
        drawer: "#1D1C1F",
        mainBg: "#131214",
        crypto: {
          bitcoin: "#F7931A",
          ethereum: "#0EBDCD",
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
