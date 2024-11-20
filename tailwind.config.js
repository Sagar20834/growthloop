/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
        runningTime: "runningTime 7s linear forwards",
      },
      keyframes: {
        customAnimation: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
            filter: "blur(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(100px)",
            filter: "blur(33px)",
          },
          "100%": { opacity: 1, transform: "translateY(0)", filter: "blur(0)" },
        },

        runningTime: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        custom: "customAnimation 1s ease-in-out 1.2s forwards",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(135deg, #07283f 0%, #0b1d29 48.36%, #092335 100%)",
        "custom-gradient-rotated":
          "linear-gradient(315deg, #07283f 0%, #0b1d29 48.36%, #092335 100%)",
        "another-gradient": "linear-gradient(180deg, #1a75bb 0%, #09cc8b 100%)",
        "footer-gradient":
          "linear-gradient(180deg, rgba(225, 242, 255, 0.6) 0%, rgba(205, 233, 255, 0.65) 100%)",
      },
      colors: {
        "custom-dark-1": "#10212f",
        "custom-dark-2": "#152b3c",
      },
      fontFamily: {
        saira: ["Saira", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        alata: ["Alata", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
        maven: ["Maven Pro", "sans-serif"],
        arimo: ["Arimo", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
