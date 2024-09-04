import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'home-feed-bg': '#f5f5f7',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        'primary-button':
          '0px 4px 12px -2px rgba(0, 0, 0, 0.25), 0px 0px 0px 0px rgba(0, 0, 0, 0.4)',
        'primary-button-hover':
          '0px 4px 12px -2px rgba(0, 0, 0, 0.25), 0px 0px 0px 4px rgba(0, 0, 0, 0.4)',
        'secondary-button':
          '0px 4px 12px -2px rgba(0, 0, 0, 0.15), 0px 0px 0px 0px rgba(0, 0, 0, 0.4)',
        'secondary-button-hover':
          '0px 4px 12px -2px rgba(0, 0, 0, 0.15), 0px 0px 0px 4px rgba(0, 0, 0, 0.1)',
        'quiz-card': '0px 8px 20px -4px rgba(0, 0, 0, 0.15)',
        'branded-button-hover':
          // customize rgba value
          '0px 4px 12px -2px rgba(0, 0, 0, 0.15), 0px 0px 0px 4px rgba(116, 45, 221, 0.4)',
        'premium-article-image': '0px 14px 28px -7px rgba(0, 0, 0, 0.4)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-text-tertiary)',
        muted: 'var(--color-text-muted)',
        accent: 'var(--color-text-accent)',
        link: 'var(--color-text-link)',
        'divider-primary': 'var(--border-color-primary)',
        'divider-secondary': 'var(--border-color-secondary)',
        'divider-tertiary': 'var(--border-color-tertiary)',
      },
      backgroundColor: {
        primary: 'var(--color-background-primary)',
        secondary: 'var(--color-background-secondary)',
        tertiary: 'var(--color-background-tertiary)',
        'divider-primary': 'var(--border-color-primary)',
        'divider-secondary': 'var(--border-color-secondary)',
        'divider-tertiary': 'var(--border-color-tertiary)',
      },
      borderColor: {
        primary: 'var(--border-color-primary)',
        secondary: 'var(--border-color-secondary)',
        tertiary: 'var(--border-color-tertiary)',
      },
      fontSize: {
        label: '13px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
