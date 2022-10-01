import { Grid, Typography } from "@mui/material";
import { globalStyles } from "../styles/global.styles";

const styles = {
  header: {
    fontWeight: 'bold',
    align: 'center',
    justify: 'center'
  }
}

const Homepage = () => {
  return (
    <Grid sx={globalStyles.page}>
      <Typography style={styles.header}>
        Home
      </Typography>
    </Grid>
  );
}

export { Homepage };
