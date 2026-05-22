/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#05050A',     // Deep charcoal/black
          card: '#0D0E16',        // Glassmorphic cards
          surface: '#121320',     // Dark slate surface
          muted: '#8F9CAE',       // Secondary muted text
          accentBlue: '#2563EB',  // Strong primary blue
          accentIndigo: '#4F46E5',// Accent Indigo
          accentPurple: '#7C3AED',// Accent Purple
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow-slow': 'glow 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' },
          '50%': { opacity: '0.8', filter: 'blur(60px)' },
        }
      },
      boxShadow: {
        'glass-sm': '0 2px 10px 0 rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'glass-lg': '0 16px 48px 0 rgba(0, 0, 0, 0.6), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'glow-blue': '0 0 25px rgba(59, 130, 246, 0.3)',
        'glow-purple': '0 0 25px rgba(124, 58, 237, 0.3)',
      }
    },
  },
  plugins: [],
}
