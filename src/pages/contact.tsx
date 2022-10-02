import { Grid } from "@mui/material";
import { PageSection } from "../components/content/page-section";
import { CONTACT_BODY, CONTACT_HEADER } from "../data/pages/contact/contact-us.data";

const Contact = () => {
  return (
    <Grid>
      <PageSection id="contact" header={CONTACT_HEADER} body={CONTACT_BODY} />
    </Grid>
  );
}

export { Contact };
