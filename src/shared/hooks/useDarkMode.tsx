import { useLayoutEffect, useState } from 'react';

interface ThemeTogglerType {
  (): void;
}

export const useDarkMode = (): [string, ThemeTogglerType] => {
  const [theme, setTheme] = useState('light');

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useLayoutEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, themeToggler];
};
