/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'rgb(255, 99, 64)', 
        heading:'#E7E7E7',  
        subtext :'#C4C4C4', 
        'custom-gray': '#1F2937CC',  
      },
      
    },
  },
  plugins: [],
}