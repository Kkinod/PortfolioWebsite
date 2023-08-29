import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import { darkTheme, lightTheme } from './styles/Themes';
import { GlobalStyle } from './styles/globalStyles.styles';
import { useDarkMode } from './shared/hooks/useDarkMode';
import { ThemeTogglerContext } from './shared/contexts/ThemeTogglerContext';

const App = () => {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <ThemeTogglerContext.Provider value={{ theme, themeToggler }}>
        <>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </>
      </ThemeTogglerContext.Provider>
    </ThemeProvider>
  );
};

export default App;
