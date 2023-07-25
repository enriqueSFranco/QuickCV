/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue,ts}"
  ],
  theme: {
    extend: {
      keyframes: {
        progress: {
          '0%': {
            left: 0,
            transform: 'translateX(-100%)'
          },
          ' 100%': {
            left: '100%',
            transform: 'translateX(0%)'
          }
        }
      },
      animation: {
        'progress': 'progress 2s linear infinite'
      }
    },
  },
  plugins: [],
}

