module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      config: {
        content: [
          './pages/**/*.{js,ts,jsx,tsx,mdx}',
          './components/**/*.{js,ts,jsx,tsx}',
          './theme.config.tsx'
        ],
        theme: {
          extend: {}
        },
        plugins: [],
        darkMode: 'class'
      }
    },
    'autoprefixer': {},
  },
}