import { Grid, Typography } from "@mui/material";
import { globalStyles } from "../styles/global";

const styles = {
  header: {
    fontWeight: 'bold',
    align: 'center',
    justify: 'center'
  }
}

const About = () => {
  return (
    <Grid sx={globalStyles.page}>
      <Typography style={styles.header}>
        About
      </Typography>
    </Grid>
  );
}

export { About };
