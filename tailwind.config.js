/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        success: '#4CAF50',
        warning: '#FFFF00',
        error: '#EF4444'
      }
    },
  },
  plugins: [],
}

