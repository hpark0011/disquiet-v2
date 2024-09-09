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
      backgroundImage: {
        'button-primary':
          'linear-gradient(to bottom, rgba(44, 44, 46, 0.7), #2c2c2e)',
        'new-tag':
          'linear-gradient(to bottom, rgba(153, 137, 255, 1), rgba(109, 85, 255, 0.9))',
      },
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
        'post-card': 'var(--border-radius-post-card)',
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
        glow: {
          '0%, 100%': {
            boxShadow:
              '0px 4px 8px -2px rgba(109, 85, 255, 0.8), 0px 0px 0px 2px rgba(109, 85, 255, 0.4)',
          },
          '50%': {
            boxShadow:
              '0px 4px 8px -2px rgba(109, 85, 255, 0.8), 0px 0px 0px 4px rgba(109, 85, 255, 0.4)',
          },
        },
        jiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        glow: 'glow 1.6s ease-in-out infinite',
        jiggle: 'jiggle 0.5s ease-in-out infinite',
      },
      boxShadow: {
        'primary-button':
          '0px 4px 12px -2px rgba(0, 0, 0, 0.25), 0px 0px 0px 0px rgba(0, 0, 0, 0.4)',
        'primary-button-hover':
          '0px 4px 12px -2px rgba(0, 0, 0, 0.25), 0px 0px 0px 4px rgba(0, 0, 0, 0.4)',
        'secondary-button':
          '0px 4px 12px -2px rgba(0, 0, 0, 0.15), 0px 0px 0px 0px rgba(0, 0, 0, 0.2)',
        'secondary-button-hover':
          '0px 4px 12px -2px rgba(0, 0, 0, 0.15), 0px 0px 0px 4px rgba(0, 0, 0, 0.1)',
        'quiz-card': '0px 8px 20px -4px rgba(0, 0, 0, 0.15)',
        'post-card-light':
          '0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 16px 32px -8px rgba(0, 0, 0, 0.1)',
        'post-card-default':
          '0px 1px 3px 0px rgba(0, 0, 0, 0.15), 0px 16px 32px -8px rgba(0, 0, 0, 0.15)',
        'branded-button-hover':
          // customize rgba value
          '0px 4px 12px -2px rgba(0, 0, 0, 0.15), 0px 0px 0px 4px rgba(116, 45, 221, 0.4)',
        'premium-article-image': '0px 14px 28px -7px rgba(0, 0, 0, 0.4)',
        'new-tab':
          '0px 4px 8px -2px rgba(109, 85, 255, 0.8), 0px 0px 0px 2px rgba(109, 85, 255, 0.4)',
        modal:
          '0px 16px 32px -8px rgba(0, 0, 0, 0.5), 0px 0px 0px 4px rgba(255, 255, 255, 0.20)',
        dropdown:
          '0px 4px 8px -2px rgba(0, 0, 0, 0.10), 0px 0px 4px 0px rgba(0, 0, 0, 0.05)',
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
        'tab-list-primary': 'var(--color-background-tab-list-primary)',
        'tab-list-secondary': 'var(--color-background-tab-list-secondary)',
        'primary-button-hover': 'var(--color-background-primary-button-hover)',
        'tab-trigger-hover': 'var(--color-background-tab-trigger-hover)',
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
