/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist Sans"', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
      colors: {
        command: {
          black: '#080d1a',
          surface: '#0f1628',
          border: 'rgba(255,255,255,0.07)'
        },
        clinic: {
          white: '#f8f9fb',
          surface: '#ffffff',
          border: 'rgba(0,0,0,0.06)'
        },
        recovery: {
          blue: '#2457D9',
          dim: 'rgba(36,87,217,0.1)',
          hover: '#1d47c0',
        },
        signal: {
          green: '#10B981',
          dim: 'rgba(16,185,129,0.12)'
        },
        gold: {
          sovereign: '#C47D0E',
          dim: 'rgba(196,125,14,0.12)'
        },
        loss: {
          red: '#C42126',
          dim: 'rgba(196,33,38,0.1)'
        }
      },
      boxShadow: {
        'diffusion-light': '0 20px 60px -20px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.04)',
        'diffusion-dark': '0 20px 60px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)',
        'float': '0 40px 80px -30px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.03)',
        'spotlight': '0 0 0 1px rgba(36,87,217,0.3), 0 0 30px rgba(36,87,217,0.1)',
        'inner-refract': 'inset 0 1px 0 rgba(255,255,255,0.1)',
        'inner-refract-light': 'inset 0 1px 0 rgba(255,255,255,0.6)',
      },
      borderRadius: {
        'bento': '2.5rem',
        'card': '1.5rem',
        'pill': '9999px',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 35s linear infinite',
        'marquee-rev': 'marquee-rev 40s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'mesh-blue': 'radial-gradient(ellipse at 20% 50%, rgba(36,87,217,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(16,185,129,0.08) 0%, transparent 50%)',
        'mesh-dark': 'radial-gradient(ellipse at 10% 30%, rgba(36,87,217,0.12) 0%, transparent 45%), radial-gradient(ellipse at 90% 70%, rgba(16,185,129,0.06) 0%, transparent 45%)',
      }
    },
  },
  plugins: [],
}
