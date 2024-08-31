import { primitives } from './primitives';

export const semantic = {
  colors: {
    background: {
      primary: primitives.colors.gray[50],
      secondary: primitives.colors.white,
      tertiary: primitives.colors.gray[100],
    },
    text: {
      primary: primitives.colors.gray[900],
      secondary: primitives.colors.gray[600],
      tertiary: primitives.colors.gray[500],
    },
    action: {
      primary: primitives.colors.blue[500],
      secondary: primitives.colors.gray[200],
      hover: primitives.colors.blue[600],
      disabled: primitives.colors.gray[300],
    },
    border: {
      default: primitives.colors.gray[200],
      focus: primitives.colors.blue[500],
    },
    status: {
      success: primitives.colors.green[500],
      error: primitives.colors.red[600],
      warning: '#ff9f00',
      info: primitives.colors.blue[500],
    },
  },
  typography: {
    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
    heading: {
      1: {
        fontSize: primitives.fontSizes['4xl'],
        lineHeight: primitives.lineHeights.tight,
        fontWeight: primitives.fontWeights.bold,
      },
      2: {
        fontSize: primitives.fontSizes['3xl'],
        lineHeight: primitives.lineHeights.tight,
        fontWeight: primitives.fontWeights.semibold,
      },
      3: {
        fontSize: primitives.fontSizes['2xl'],
        lineHeight: primitives.lineHeights.snug,
        fontWeight: primitives.fontWeights.semibold,
      },
    },
    body: {
      regular: {
        fontSize: primitives.fontSizes.base,
        lineHeight: primitives.lineHeights.normal,
        fontWeight: primitives.fontWeights.regular,
      },
      small: {
        fontSize: primitives.fontSizes.sm,
        lineHeight: primitives.lineHeights.normal,
        fontWeight: primitives.fontWeights.regular,
      },
    },
  },
  spacing: {
    contentPadding: primitives.spacing[6],
    sectionSpacing: primitives.spacing[12],
    stackSpacing: primitives.spacing[4],
  },
  shadows: {
    sm: 'var(--tw-shadow-sm)',
    md: 'var(--tw-shadow)',
    lg: 'var(--tw-shadow-lg)',
  },
};
