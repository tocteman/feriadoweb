/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      display: ['Belgro', 'sans-serif']
    },
    minHeight: {
      '1/2': '50vh'
    },
    maxHeight: {
      'half': '50vh'
    },
    extend: {
      colors: {
        rosado: {
          400: '#e627b5',
          500: '#fa00c3'
        },
        azul: {
          250: '#57d4f9',
          500: '#4005f5'
        },
        amarillo: {
          300: '#ffe23f',
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
          900: '#2f1536',
          950: '#1c0840'
        }
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-13deg)' },
          '50%': { transform: 'rotate(13deg)' },
        },
        passthrough: {
          '0%': { transform: 'translateX(-220%)'},
          '100%': { transform: 'translateX(120%)' }
        },
        wave: {
          '0%': { transform: 'translateX(-3%)'},
          '50%': { transform: 'translateX(3%)'},
          '100%': { transform: 'translateX(-3%)'},
        },
        rolling: {
          '0%': { transform: 'rotate(0deg)'},
          '100%': { transform: 'rotate(360deg)'},
        }
      },
      animation: {
        wiggle: 'wiggle 8s ease-in-out infinite',
        passthrough: 'passthrough 4s linear infinite',
        wave: 'wave 1.5s linear infinite',
        rolling: 'rolling 5s linear infinite',
      },

    },
  },
  plugins: [],
}
