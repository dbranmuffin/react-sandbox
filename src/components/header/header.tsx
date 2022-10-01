import { AppBar, Toolbar, CssBaseline } from "@mui/material";
import { headerStyles } from "../../styles/components/header/header.styles";
import { Avatar } from "./avatar";
import { HomeButton } from "./home-button";
import { PageLinks } from "./page-links";

const Header = () => {
    return (
        <AppBar sx={headerStyles.appBar}>
            <CssBaseline />
            <Toolbar sx={headerStyles.toolBar}>
                <HomeButton />
                <PageLinks />
                <Avatar />
            </Toolbar>
        </AppBar >
    );
}

export { Header };
