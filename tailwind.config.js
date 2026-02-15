/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        backgroundLight: '#F2F4F8',
        backgroundDark: '#0B0C10',
        textLight: '#1E1E1E',
        textDark: '#EAEAEA',
        accent: {
          purple: '#6C5CE7',
          coral: '#FF6B6B',
          electric: '#00D2FF'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)',
        glass: '0 8px 24px rgba(108,92,231,0.15)'
      },
      backdropBlur: {
        xs: '2px'
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Clash Display"', 'Cabinet Grotesk', 'Satoshi', 'Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
