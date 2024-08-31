import { semantic } from './semantic';
import { primitives } from './primitives';

export const components = {
  button: {
    primary: {
      background: semantic.colors.action.primary,
      color: primitives.colors.white,
      padding: `${primitives.spacing[3]} ${primitives.spacing[5]}`,
      borderRadius: primitives.radii.full,
      fontSize: semantic.typography.body.regular.fontSize,
      fontWeight: primitives.fontWeights.semibold,
      boxShadow: semantic.shadows.md,
    },
    secondary: {
      // ... (keep the same as before)
    },
  },
  input: {
    // ... (keep the same as before)
  },
  card: {
    background: semantic.colors.background.secondary,
    borderRadius: primitives.radii.xl,
    padding: semantic.spacing.contentPadding,
    boxShadow: semantic.shadows.lg,
  },
  nav: {
    // ... (keep the same as before)
  },
};
