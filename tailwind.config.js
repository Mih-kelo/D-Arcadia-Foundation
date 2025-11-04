/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Your Foundation's Brand Colors
        brand: {
          primary: '#2C5F2D',      // Deep forest green
          'primary-light': '#97BC62',
          'primary-dark': '#1A3A1B',
          secondary: '#FF6B35',     // Warm orange
          'secondary-light': '#FFA06B',
          'secondary-dark': '#CC5529',
          accent: '#FFD23F',        // Bright yellow
          neutral: {
            50: '#F8F9FA',
            100: '#F1F3F5',
            200: '#E9ECEF',
            300: '#DEE2E6',
            400: '#CED4DA',
            500: '#ADB5BD',
            600: '#6C757D',
            700: '#495057',
            800: '#343A40',
            900: '#212529',
          }
        },
      },
    },
  },
  plugins: [],
};
