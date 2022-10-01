import { Grid, Typography, Box } from "@mui/material";
import { pageSectionStyle } from "../../styles/components/content/page-section.styles";

type PageSectionProps = {
    header: string,
    body: string
}

const PageSection = (props: PageSectionProps) => {
    const { header, body } = props;

    return <Grid>
        <Typography style={pageSectionStyle.header}>
            {header}
        </Typography>
        <Box style={pageSectionStyle.bodyWrapper}>
            <Typography style={pageSectionStyle.body}>
                {body}
            </Typography>
        </Box>
    </Grid>
};

export { PageSection };