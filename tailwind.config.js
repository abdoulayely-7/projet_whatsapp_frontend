/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'whatsapp': "url('/bg.jpg')"
      },
      backgroundColor:{
        'main' : '#161717',
        'body' : '#1D1F1F',
        'section' : '#161717',
      },
      borderColor:{
        'color':'#343636'
      }
    },
  },
  plugins: [],
}

