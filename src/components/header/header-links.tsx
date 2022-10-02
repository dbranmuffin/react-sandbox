import { Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { headerPages } from "../../data/global/pages.data";
import { headerLinksStyles } from "../../styles/components/header/header-links.styles";

const HeaderLinks = () => {
    const navigate = useNavigate();

    return <Box sx={headerLinksStyles.wrapper}>
        {headerPages.filter(page => {
            return page.path !== '/'
        }).map(page => {
            return <Link sx={headerLinksStyles.link}
                key={page.text}
                component='button'
                onClick={() => navigate(page.path)}>
                {page.text}
            </Link>
        })}
    </Box>;
};

export { HeaderLinks };