/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Agricultural Fintech Color Palette
        'vanilla-gold': '#F4D03F',
        'madagascar-green': '#27AE60',
        'earth-brown': '#8D6E63',
        'mobile-orange': '#FF9500',
        'airtel-red': '#DC2626',
      },
      fontFamily: {
        'sans': ['Inter', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      screens: {
        'xs': '475px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '128': '32rem',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #F4D03F 0%, #27AE60 100%)',
        'vanilla-gradient': 'linear-gradient(135deg, #F4D03F 0%, #FF9500 100%)',
        'green-gradient': 'linear-gradient(135deg, #27AE60 0%, #059669 100%)',
      },
      boxShadow: {
        'agricultural': '0 4px 6px -1px rgba(244, 208, 63, 0.1), 0 2px 4px -1px rgba(244, 208, 63, 0.06)',
        'sms': '0 4px 14px 0 rgba(39, 174, 96, 0.15)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}