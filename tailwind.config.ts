import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#242326',
          800: '#181719',
          900: '#0d0d0f',
          950: '#050506',
        },
        accent: {
          gold: '#d9a72f',
          gold_light: '#f2c766',
          gold_dark: '#8f641c',
          cyan: '#06b6d4',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
        display: ['var(--font-sora)', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      spacing: {
        18: '4.5rem',
        20: '5rem',
        22: '5.5rem',
        24: '6rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '2.75rem',
      },
      boxShadow: {
        'glow-gold': '0 0 30px rgba(250, 204, 21, 0.25)',
        'glow-gold-sm': '0 0 15px rgba(250, 204, 21, 0.15)',
        'inner-gold': 'inset 0 0 20px rgba(250, 204, 21, 0.1)',
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        'premium-lg': '0 36px 90px rgba(0, 0, 0, 0.42)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, #0d0d0f 0%, #09090a 52%, #050506 100%)',
        'gradient-dark-alt': 'linear-gradient(140deg, #181719 0%, #0d0d0f 52%, #050506 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
