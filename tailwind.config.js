/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opensans: "Open Sans, sans-serif",
      },
      letterSpacing: {
        4: "4px",
        6: "6px",
      },
      translate: {
        '0': '0',
        'full': '100%',
      },
    },
  },
  plugins: [],
};
