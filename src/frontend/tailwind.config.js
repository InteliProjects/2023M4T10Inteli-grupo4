/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': "#005A7D",
      'white': "#FFFFFF",
      'gray': "#edebeb",
      'lightRed': "#ffb4b4",
      'boldRed': "#fd4343",
      'lightOrange': "#ffeba5",
      'boldOrange': '#fc8847',
      'lightGreen': '#cfffb9',
      'boldGreen': '#4cd30e',
    },
      borderRadius: {
        'lg': '30px',
        'xl': '300px',
      },
  },
  plugins: [],
} 

