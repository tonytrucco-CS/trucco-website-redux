import { lighten } from 'polished';

export const breakpoints = {
  xxl: '120em',
  xl: '100em',
  lg: '85.375em',
  md: '64em',
  sm: '48em',
  xs: '32em',
  xxs: '25.6875em',
};

export const fonts = {
  sansserif: '"Space Grotesk", sans-serif',
  button: 'Roboto, sans-serif',
};

export const colors = {
  gray100: '#FFFFFF',
  gray200: '#F8F8F8',
  gray300: '#E0E0E0',
  gray400: '#999999',
  gray500: '#666666',
  gray600: '#333333',
  gray700: '#222222',
  gray800: '#1B1B1B',
  gray900: '#010101',
  blue: '#1172B4',
};

export const darkTheme = {
  text: colors.gray200,
  border: colors.gray600,
  headerButton: colors.gray200,
  buttonText: colors.gray200,
  background: colors.gray800,
  contentBG: colors.gray700,
  cardBG: colors.gray600,
  cardContrast: colors.gray400,
  contrast: colors.gray200,
  gradient1: colors.gray900,
  gradient2: colors.gray500,
  buttonBackground: colors.blue,
  link: lighten(0.2, colors.blue),
};

export const lightTheme = {
  text: colors.gray900,
  border: colors.gray300,
  headerButton: colors.gray800,
  buttonText: colors.gray200,
  background: colors.gray300,
  contentBG: colors.gray200,
  cardBG: colors.gray100,
  cardContrast: colors.gray500,
  contrast: colors.gray900,
  gradient1: colors.gray100,
  gradient2: colors.gray400,
  buttonBackground: colors.blue,
  link: colors.blue,
};
