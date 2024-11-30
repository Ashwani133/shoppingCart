/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(hsl(214.84, 26.05%, 23.33%), hsl(213.53, 23.61%, 28.24%))",
      },
      fontFamily: {
        dancingScript: ["Dancing Script", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "hsl(240deg 4.76% 95.88%)",
      },
    },
  },
  plugins: [],
};
