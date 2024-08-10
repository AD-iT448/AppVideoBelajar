/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors:{
      'lime' : '#a3e635',
      'azure' : '#F0FFFF'
    },
    extend: {
      container:{
        center:true,
      },
      
    },
  },
  plugins: [],
}

