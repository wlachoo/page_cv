/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#BA0751',
        'custom-primary-dark': '#8B0540',
        'custom-primary-light': '#D4085F',
      },
    },
  },
  plugins: [],
};
