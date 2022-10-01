import { Grid, Typography } from "@mui/material";
import { globalStyles } from "../styles/global";

const styles = {
    header: {
        fontWeight: 'bold',
        align: 'center',
        justify: 'center'
    }
}

const Products = () => {
    return (
        <Grid sx={globalStyles.page}>
            <Typography style={styles.header}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
        </Grid>
    );
}

export { Products };
