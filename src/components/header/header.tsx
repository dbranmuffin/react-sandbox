import { AppBar, Toolbar, CssBaseline, Box } from "@mui/material";
import { headerStyles } from "../../styles/components/header/header.styles";
import { HomeButton } from "./home-button";
import { HeaderLinks } from "./header-links";

const Header = () => {
    return (
        <AppBar sx={headerStyles.appBar}>
            <CssBaseline />
            <Toolbar sx={headerStyles.toolBar}>
                <HomeButton />
                <HeaderLinks />
                <Box />
            </Toolbar>
        </AppBar >
    );
}

export { Header };
