import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: '#822e2e',
        white: '#FFFFFF',
        'dark-gray': '#5D5D5D',
        'medium-gray': '#848484',
        'low-contrast': 'var(--low-contrast)',
        faded: 'var(--faded)',
        background: 'var(--background)',
        card: 'var(--card)',
        button: 'var(--button)',
        accent: 'var(--accent)',
        text: 'var(--text)',
      },
      height: {
        article: '190px',
      },
      width: {
        100: '400px',
      },
      maxWidth: {
        layout: '1470px',
      },
      minHeight: {
        300: '300px',
      },
      scale: {
        115: '1.15',
        120: '1.20',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'rotate(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'rotate(5deg)' },
          '20%, 40%, 60%, 80%': { transform: 'rotate(-5deg)' },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
        shake: 'shake 1s ease-in-out 3',
        none: 'none',
      },
    },
    zIndex: {},
  },
  variants: {},
  plugins: [],
  darkMode: 'class',
}
export default config
