import { createTheme, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/nav-bar';
import { pages } from './data/global/pages';
import { ACTION_ACTIVE, BACKGROUND, SUCCESS_DARK, SUCCESS_MAIN, TEXT } from './styles/colors';

const App = () => {
  const globalTheme = createTheme({
    palette: {
      background: {
        paper: BACKGROUND,
      },
      text: {
        primary: TEXT,
      },
      action: {
        active: ACTION_ACTIVE,
      },
      success: {
        main: SUCCESS_MAIN,
        dark: SUCCESS_DARK,
      }
    }
  });

  useEffect(() => {
    document.title = "React Sandbox"
  }, [])

  return (
    <ThemeProvider theme={globalTheme}>
      <Navbar />
      <Routes>
        {pages.map(page => {
          return <Route path={page.path} element={page.element} key={page.text} />
        })}
      </Routes>
    </ThemeProvider>
  )
}

export default App;
