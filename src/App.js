import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import { lightTheme, darkTheme } from './constants/variables';
import { GlobalStyle } from './styles/GlobalStyle';
import ModeContext from './context/ModeContext';

function App() {
  const [modeValues, setModeValues] = useState({
    darkMode: false,
  });

  const toggleTheme = () => {
    setModeValues({
      darkMode: !modeValues.darkMode,
    });
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setModeValues({
      darkMode: prefersDarkMode ? true : false,
    });
  }, []);

  return (
    <ModeContext.Provider value={{ modeValues, setModeValues }}>
      <ThemeProvider theme={modeValues.darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <ScrollToTop />
        <Header toggleTheme={toggleTheme} />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </ThemeProvider>
    </ModeContext.Provider>
  );
}

export default App;
