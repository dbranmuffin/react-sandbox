import { Grid, Typography } from "@mui/material";

const styles = {
  header: {
    fontWeight: 'bold',
    align: 'center',
    justify: 'center'
  }
}

const Homepage = () => {
  return (
    <Grid>
      <Typography style={styles.header}>
        Home
      </Typography>
    </Grid>
  );
}

export { Homepage };
