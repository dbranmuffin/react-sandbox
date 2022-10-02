import { Grid } from "@mui/material";
import { PageSection } from "../components/content/page-section";
import { CONTACT_BODY, CONTACT_HEADER } from "../data/pages/contact/contact-us.data";
import { MISSION_BODY, MISSION_HEADER } from "../data/pages/about/missions.data";
import { TESTIMONIAL_BODY, TESTIMONIAL_HEADER } from "../data/pages/about/testimonials.data";

const About = () => {
  return (
    <Grid>
      <PageSection id="mission" header={MISSION_HEADER} body={MISSION_BODY} />
      <Grid sx={{padding: '20px'}} />
      <PageSection id="testimonials" header={TESTIMONIAL_HEADER} body={TESTIMONIAL_BODY} />
      <Grid sx={{padding: '20px'}} />
      <PageSection id="contact" header={CONTACT_HEADER} body={CONTACT_BODY} />
    </Grid>
  );
}

export { About };
