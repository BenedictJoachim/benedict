/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('assets/images/hero6.jpg')",
      }
  
    },
  },
  plugins: [],
}

// module.exports = {
//   plugins: [
//     require('@tailwindcss/forms'),
//     require('@headlessui/tailwindcss'),
//   ]
// }