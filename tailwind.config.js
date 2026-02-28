/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif:   ['"Instrument Serif"', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Warm near-white — feels handcrafted vs. digital-template
        canvas:  '#F7F5F2',
        sand:    '#EDE8E0',
        surface: '#FEFCFA',
        // True ink — warmer than cold navy
        obsidian: '#0F0D0B',
        charcoal: '#1E1A16',
        // Text hierarchy
        subtle:  '#6B6560',
        muted:   '#A09890',
        border:  '#E4DDD5',
        // Brand palette
        brand:   '#3D5AFE',
        // Complementary terracotta — for micro-accents
        rust:    '#E8552A',
        // Legacy aliases
        accent:  '#3D5AFE',
        primary: '#0F0D0B',
        ink:     '#0F0D0B',
      },
      letterSpacing: {
        tight:   '-0.02em',
        tighter: '-0.04em',
      },
      boxShadow: {
        'card':       '0 1px 3px rgba(15,13,11,0.04), 0 8px 24px -6px rgba(15,13,11,0.08)',
        'card-hover': '0 8px 32px -4px rgba(15,13,11,0.14), 0 0 0 1px rgba(61,90,254,0.12)',
        'brand':      '0 4px 20px rgba(61,90,254,0.28)',
        'brand-lg':   '0 8px 32px rgba(61,90,254,0.35)',
        'warm':       '0 2px 12px rgba(15,13,11,0.06)',
      },
      borderRadius: {
        'xl':  '12px',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    }
  },
  plugins: [],
}
