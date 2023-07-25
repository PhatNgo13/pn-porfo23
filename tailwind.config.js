/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1F262A",
        "secondary": "#5B676D",
        "accent": "#C8C8C8",
        "background": "#EBEBEB"
      },
      fontFamily:{
        'arapey': ['ARAPEY', 'serif']
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
