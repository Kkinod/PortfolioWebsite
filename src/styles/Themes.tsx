export type MyTheme = typeof lightTheme;

export const lightTheme = {
  background: '#ffffff',
  reverseBackground: '#000000',
  reverseBackgroundRgb: '0, 0, 0',
  accentBackground: '#f3f4fD',
  reverseAccentBackground: '#4a4950',
  text: '#000000',
  mainMotive: '#ffd700',
} as const;

export const darkTheme = {
  background: '#000000',
  reverseBackground: '#ffffff',
  reverseBackgroundRgb: '250, 250, 250',
  accentBackground: '#4a4950',
  reverseAccentBackground: '#f3f4fD',
  text: '#ffffff',
  mainMotive: '#ffd700',
};
