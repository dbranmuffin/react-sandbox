import { ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/header';
import { pages } from './data/global/pages';
import { globalTheme, SITE_TITLE } from './styles/global.styles';

const App = () => {
  useEffect(() => {
    document.title = SITE_TITLE;
  }, [])

  return (
    <ThemeProvider theme={globalTheme}>
      <Header />
      <Routes>
        {pages.map(page => {
          return <Route path={page.path} element={page.element} key={page.text} />
        })}
      </Routes>
    </ThemeProvider>
  )
}

export default App;
