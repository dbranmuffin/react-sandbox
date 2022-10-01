import { Grid } from "@mui/material";
import { PageSection } from "../components/content/page-section";
import { HEADER, BODY } from "../data/pages/about.data";
import { globalStyles } from "../styles/global.styles";

const About = () => {
  return (
    <Grid sx={globalStyles.page}>
      <PageSection header={HEADER} body={BODY} />
    </Grid>
  );
}

export { About };
