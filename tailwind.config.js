/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        base: '#0f172a'
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.25)'
      },
      backgroundImage: {
        'gradient-indigo-cyan': 'linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)'
      }
    }
  },
  plugins: []
}
