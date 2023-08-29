import { createContext } from 'react';

const initialState = {
  theme: 'light',
  themeToggler: () => {},
};

export const ThemeTogglerContext = createContext(initialState);
