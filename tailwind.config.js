/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07080a',
          900: '#0d0f14',
          850: '#12151c',
          800: '#181c25',
          700: '#232936',
          600: '#343d4f',
          500: '#4e5b72',
          400: '#75839b',
          300: '#a1adc1',
          200: '#cbd3e1',
          100: '#e7ecf4',
          50: '#f4f6fa',
        },
        accent: {
          lime: '#b8f34a',
          'lime-hover': '#a4e332',
          'lime-muted': 'rgba(184, 243, 74, 0.12)',
          emerald: '#10b981',
          cyan: '#06b6d4',
          indigo: '#6366f1',
        },
        paper: {
          50: '#fafbf9',
          100: '#f2f4f0',
          200: '#e5e8e2',
          300: '#d0d4cb',
          900: '#141613',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        'bezel': '0 0 0 1px rgba(255, 255, 255, 0.08), 0 2px 4px rgba(0, 0, 0, 0.3)',
        'bezel-hover': '0 0 0 1px rgba(184, 243, 74, 0.35), 0 8px 24px -4px rgba(0, 0, 0, 0.5)',
        'bezel-light': '0 0 0 1px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.04)',
        'spot': '0 0 24px -4px rgba(184, 243, 74, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
