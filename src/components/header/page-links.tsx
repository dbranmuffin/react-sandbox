import { Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { pages } from "../../data/global/pages";
import { pageLinksStyles } from "../../styles/components/header/page-links.styles";

const PageLinks = () => {
    const navigate = useNavigate();

    return <Box>
        {pages.filter(page => {
            return page.path !== '/'
        }).map(page => {
            return <Link sx={pageLinksStyles.link}
                key={page.text}
                component='button'
                onClick={() => navigate(page.path)}>
                {page.text}
            </Link>
        })}
    </Box>;
};

export { PageLinks };