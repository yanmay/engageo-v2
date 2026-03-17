/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        ui: ['"Outfit"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        // Core Palette
        'recovery-blue': 'var(--recovery-blue)',
        'command-black': 'var(--command-black)',
        'clinic-white': 'var(--clinic-white)',

        // Accents
        'signal-green': 'var(--signal-green)',
        'recovered-green': 'var(--recovered-green)',
        'loss-red': 'var(--loss-red)',
        'sovereign-gold': 'var(--sovereign-gold)',

        // Semantic Aliases
        primary: 'var(--recovery-blue)',
        background: 'var(--clinic-white)',
        surface: 'var(--command-black)',
      },
      letterSpacing: {
        tight: '-0.02em',
        tighter: '-0.04em',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(15,13,11,0.04), 0 8px 24px -6px rgba(15,13,11,0.08)',
        'card-hover': '0 8px 32px -4px rgba(15,13,11,0.14), 0 0 0 1px var(--ink-faint)',
        'brand': '0 4px 20px rgba(26,122,74,0.15)',
        'brand-lg': '0 8px 32px rgba(26,122,74,0.2)',
        'warm': '0 2px 12px rgba(15,13,11,0.06)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      zIndex: {
        'hide': '-1',
        'base': '0',
        'dropdown': '10',
        'sticky': '20',
        'fixed': '30',
        'modal-backdrop': '40',
        'modal': '50',
        'popover': '60',
        'tooltip': '70',
        'toast': '80',
        'highest': '999',
      }
    }
  },
  plugins: [],
}
