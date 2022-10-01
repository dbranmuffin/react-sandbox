import { createTheme } from "@mui/material";
import { colors } from "./colors.styles";

export const globalStyles = {
    page: {
        paddingTop: '4rem',
        width: '100%',
        height: '100vh',
        background: colors.background.page
    }
}

export const globalTheme = createTheme({
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

export const SITE_TITLE = 'React Sandbox';