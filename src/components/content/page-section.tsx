import { Grid, Typography, Box } from "@mui/material";
import { pageSectionStyle } from "../../styles/components/content/page-section.styles";

type PageSectionProps = {
    id: string,
    header: string,
    body: string
}

const PageSection = (props: PageSectionProps) => {
    const { id, header, body } = props;

    return <Grid id={id}>
        <Box style={pageSectionStyle.headerWrapper}>
            <Typography style={pageSectionStyle.header}>
                {header}
            </Typography>
        </Box>
        <Box style={pageSectionStyle.bodyWrapper}>
            <Typography style={pageSectionStyle.body}>
                {body}
            </Typography>
        </Box>
    </Grid>
};

export { PageSection };