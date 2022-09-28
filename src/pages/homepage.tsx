import { AppBar, Grid } from "@mui/material";
import { NavMenu } from "../components/nav-menu/nav-menu";

const styles = {
  wrapper: {
    width: '100%',
    height: '100%'
  },
  appBar: {
    height: '4rem',
    width: '100%'
  },
  nav: {
    align: 'center',
    justify: 'center'
  }
}

const Homepage = () => {
  return (
    <Grid style={styles.wrapper}>
      <AppBar style={styles.appBar}>
        <NavMenu/>
      </AppBar>
    </Grid>
  );
}

export { Homepage };
