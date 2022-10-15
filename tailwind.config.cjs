/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      display: ['Belgro', 'sans-serif']
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        passthrough: {
          '0%, 100%': { transform: 'translateX(300px)'},
          '50%': { transform: 'translateX(-300px)' }
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        passthrough: 'passthrough 5s ease-in-out infinite',
      },

    },
  },
  plugins: [],
}
