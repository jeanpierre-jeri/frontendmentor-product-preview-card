/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-cyan': 'hsl(158, 36%, 37%)',
        cream: 'hsl(30, 38%, 92%)',
        'dark-blue': 'hsl(212, 21%, 14%)',
        'grayish-blue': 'hsl(228, 12%, 48%)',
        'dark-green': '#1a4031'
      },
      fontFamily: {
        montserrat: 'Montserrat, sans-serif',
        fraunces: 'Fraunces, serif'
      }
    }
  },
  plugins: []
}
