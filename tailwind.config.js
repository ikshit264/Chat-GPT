
/* @type {import('tailwindcss').Config} */
module.exports = { 
  content: [ 
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}", 
      
    // Or if using `src` directory: 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ], 
  theme: { 
    extend: {
      colors: {
        'lgblue': 'linear-gradient(90deg, rgba(0, 255, 235, 1) 0%, rgba(7, 58, 187, 1) 100%)',
      },
    }
  }, 
  plugins: [], 
}