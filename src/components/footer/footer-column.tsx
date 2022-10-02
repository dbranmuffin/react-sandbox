import { Box, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FooterColumnLink } from "../../models/links.model";
import { footerColumnStyles } from "../../styles/components/footer/footer-column.styles";

type FooterColumnProps = {
    column: FooterColumnLink
};

const FooterColumn = (props: FooterColumnProps) => {
    const { column } = props;
    const navigate = useNavigate();

    const handleNavigate = (link: string) => {
        if (!link.startsWith('/')) {
            window.location.href = link;
        } else {
            navigate(link);
        }
    }

    return (
        <Box sx={footerColumnStyles.column}>
            <Typography sx={footerColumnStyles.heading}>{column.title}</Typography>
            {column.links.map(link => {
                return <Link key={link.text} sx={footerColumnStyles.link} onClick={() => handleNavigate(link.path)} component='button'>{link.text}</Link>
            })}
        </Box>
    )
};

export { FooterColumn };