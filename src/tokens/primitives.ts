import colors from 'tailwindcss/colors';
export const primitives = {
  colors: {
    'dq-gray': {
      50: '#f2f2f7',
      100: '#e5e5ea',
      200: '#d1d1d6',
      300: '#c7c7cc',
      400: '#aeaeb2',
      500: '#8e8e93',
      600: '#636366',
      700: '#48484a',
      800: '#3a3a3c',
      900: '#1c1c1e',
    },
    ...colors,
    black: '#000000',
    white: '#ffffff',
  },
  spacing: {
    0: '0',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
  },
  fontSizes: {
    xs: '11px',
    sm: '14px',
    base: '17px',
    lg: '20px',
    xl: '24px',
    '2xl': '28px',
    '3xl': '34px',
    '4xl': '40px',
    '5xl': '48px',
  },
  fontWeights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeights: {
    tight: '1.2',
    snug: '1.33',
    normal: '1.41',
    relaxed: '1.5',
  },
  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '20px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
};
