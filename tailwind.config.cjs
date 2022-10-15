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
          '0%': { transform: 'translateX(-50%)'},
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        passthrough: 'passthrough 8s linear infinite',
      },

    },
  },
  plugins: [],
}
