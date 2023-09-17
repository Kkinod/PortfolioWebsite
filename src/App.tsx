import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useMemo } from 'react';
import { Home } from './pages/Home/Home';
import { Layout } from './pages/Layout/Layout';
import { darkTheme, lightTheme } from './styles/Themes';
import { GlobalStyle } from './styles/globalStyles.styles';
import { useDarkMode } from './shared/hooks/useDarkMode';
import { ThemeTogglerContext } from './shared/contexts/ThemeTogglerContext';

export const App = () => {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const contextValue = useMemo(
    () => ({ theme, themeToggler }),
    [theme, themeToggler]
  );

  return (
    <ThemeProvider theme={themeMode}>
      <ThemeTogglerContext.Provider value={contextValue}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeTogglerContext.Provider>
    </ThemeProvider>
  );
};
