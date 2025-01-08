/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs':'425px',
        'xxs':'320px'
      },
      fontFamily:{
        Royale:["Bonheur Royale"],
        Poppin:["Poppins"],
      },
      colors:{
          primary:"#302f2f",
        secondary:"#f1d9ba",
      },
      container:
      {
        center: true,
        padding:{
          DEFAULT:"1rem"        }
      }
    },
  },
  plugins: [],
}