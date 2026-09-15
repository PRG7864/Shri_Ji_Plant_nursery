/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#0E281E',
          800: '#12372A', // Deep Forest
          700: '#194232',
          600: '#1F513A', // Forest Green
          500: '#2A6B4D',
          400: '#3D8C67',
        },
        sage: {
          50: '#F4F7F5',
          100: '#E7EDE8',
          200: '#CFDDCF',
          300: '#B2C9B4',
          400: '#8FAF91', // Sage Accent
          500: '#719473',
          600: '#567558',
        },
        moss: {
          DEFAULT: '#657A55',
          dark: '#4A5B3E',
          light: '#839971',
        },
        cream: {
          DEFAULT: '#F5F1E7', // Primary Background
          light: '#FAF8F2',
          dark: '#E8E1D3',
        },
        warmWhite: '#FCFBF7',
        charcoal: {
          DEFAULT: '#18201B', // Deep Text
          light: '#2C3831',
          muted: '#526057',
        },
        earth: {
          DEFAULT: '#A47752', // Earth
          dark: '#855E3E',
          light: '#C4966F',
        },
        terracotta: '#C86D51',
        leafGold: '#D4AF37',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(18, 55, 42, 0.08)',
        'glass-hover': '0 12px 40px 0 rgba(18, 55, 42, 0.14)',
        'botanical': '0 20px 40px -15px rgba(18, 55, 42, 0.12)',
        'card-elevated': '0 10px 30px -5px rgba(24, 32, 27, 0.08)',
      },
      borderRadius: {
        'organic': '30% 70% 70% 30% / 30% 30% 70% 70%',
        'organic-alt': '60% 40% 30% 70% / 60% 30% 70% 40%',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-3deg)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.03)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
