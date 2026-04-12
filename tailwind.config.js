/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0f1117',
        panel: '#151922',
        panelSoft: '#1b2230',
        borderSoft: '#2b3345',
        accent: '#8b9cff',
      },
    },
  },
  plugins: [],
};
