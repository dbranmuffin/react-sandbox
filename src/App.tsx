import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/homepage';

const App = () => {
  useEffect(() => {
    document.title = "React Sandbox"
  }, [])

  return (
    <Box>
      <Routes>
        <Route path="/"><Homepage /></Route>
        <Route path="/product"><Homepage /></Route>
        <Route path="/pricing"><Homepage /></Route>
        <Route path="/blog"><Homepage /></Route>
        <Route path="/profile"><Homepage /></Route>
        <Route path="/account"><Homepage /></Route>
        <Route path="/dashboard"><Homepage /></Route>
        <Route path="/logout"><Homepage /></Route>
      </Routes>
    </Box>
  )
}

export default App;
