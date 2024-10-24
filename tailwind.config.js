/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#ffffcd',
        'primary-300': '#fef5ae',
        'primary-500': '#fdeb8f',
        'primary-700': '#fce171',
        'primary-900': '#fbd752',
        'secondary-100': '#2e14ed',
        'secondary-300': '#220fd2',
        'secondary-500': '#170ab8',
        'secondary-700': '#44484a',
        'secondary-900': '#343738',
        'third-100': '#9da0a1',
        'third-300' : '#6d6f70',
      },
      height: {
        'hvm': 'calc(100vh - 4.75rem)'
      },
      fontFamily: {
        'jet': 'JetBrains Mono, monospace'
      }
    },
  },
  plugins: [],
}

