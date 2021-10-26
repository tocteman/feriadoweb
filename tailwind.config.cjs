module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Jost', 'sans-serif']
    },
    extend: {
      colors: {
        rosado: {
          500: '#fa00c3'
        },
        azul: {
          500: '#4005f5'
        },
        amarillo: {
          400: '#ffe945',
          500: '#ffe947'
        },
        verde: {
          500: '#80ff35'
        },
        tomate: {
          400: '#ea5f3c',
          600: '#c8483d'
        },
        morado: {
          700: '#5e1541',
          800: '#4e1541',
          900: '#2f1536'
        }
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0.7',
            transform: 'translateY(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(+10px)'
          },
        }

      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'fade-in-down': 'fade-in-down 0.85s ease-in',
        'fade-in-up': 'fade-in-up 0.5s ease-in'
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
