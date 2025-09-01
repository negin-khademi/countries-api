/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        blues: {
          900: "hsl(209, 23%, 22%)", // Dark Mode Elements
          950: "hsl(207, 26%, 17%)", // Dark Mode Background
        },
        greys: {
          950: "hsl(200, 15%, 8%)", // Light Mode Text
          400: "hsl(0, 0%, 50%)", // Light Mode Input
          50: "hsl(0, 0%, 99%)", // Light Mode Background
        },
        whites: "hsl(0, 100%, 100%)", // Dark Mode Text & Light Mode Elements
      },
    },
  },
  plugins: [],
};
