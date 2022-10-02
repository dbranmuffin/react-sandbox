import { Grid, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/footer';
import { Header } from './components/header/header';
import { allPageInfo, SITE_TITLE } from './data/global/pages.data';
import { globalTheme, globalStyles, useScrollbarStyles } from './styles/global.styles';

const App = () => {
  useScrollbarStyles();
  
  useEffect(() => {
    document.title = SITE_TITLE;
  }, []);

  return (
    <ThemeProvider theme={globalTheme}>
      <Grid sx={globalStyles.page}>
        <Header />
        <Routes>
          {allPageInfo.map(pageInfo => {
            return <Route path={pageInfo.page.path}
              element={pageInfo.page.element}
              key={pageInfo.page.text} />
          })}
        </Routes>
        <Footer />
      </Grid>
    </ThemeProvider>
  )
}

export default App;
