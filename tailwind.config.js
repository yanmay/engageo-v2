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
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        canvas: '#ECEEF2',
        surface: '#FFFFFF',
        obsidian: '#0B1221',
        charcoal: '#1E293B',
        subtle: '#64748B',
        muted: '#94A3B8',
        border: '#E2E8F0',
        brand: '#3D5AFE',
        accent: '#3D5AFE',
        primary: '#0B1221',
        ink: '#0B1221',
      },
      letterSpacing: {
        tight: '-0.02em',
        tighter: '-0.04em',
      },
      boxShadow: {
        'card': '0 2px 4px rgba(0,0,0,0.03), 0 10px 24px -6px rgba(0,0,0,0.07)',
        'card-hover': '0 8px 24px -4px rgba(0,0,0,0.12), 0 0 0 1px rgba(61,90,254,0.1)',
        'brand': '0 4px 20px rgba(61,90,254,0.28)',
        'brand-lg': '0 8px 32px rgba(61,90,254,0.35)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      animation: {
        'gradient-pan': 'gradient-pan 4s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      }
    }
  },
  plugins: [],
}
