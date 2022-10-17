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
