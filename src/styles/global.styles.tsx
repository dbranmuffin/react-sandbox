import { createTheme } from "@mui/material";
import { createUseStyles } from "react-jss";
import { colors } from "./colors.styles";

const globalStyles = {
    page: {
        paddingTop: '5rem',
        paddingBottom: '8rem',
        width: '100%',
        minHeight: '100vh',
        maxHeight:'100%',
        background: colors.background.page
    }
}

const globalTheme = createTheme({
    palette: {
        background: {
            paper: colors.background.page,
        },
        text: {
            primary: colors.text,
        },
        action: {
            active: colors.action.active,
        },
        success: {
            main: colors.success.main,
            dark: colors.success.dark,
        }
    }
});

const useScrollbarStyles = createUseStyles({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '10px'
        },
        '*::-webkit-scrollbar-track': {
            background: '#bbb' 
        },
        '*::-webkit-scrollbar-thumb': {
            background: '#888' 
        },
        '*::-webkit-scrollbar-thumb:hover': {
            background: '#555' 
        }
    }
  });

export { globalStyles, globalTheme, useScrollbarStyles };