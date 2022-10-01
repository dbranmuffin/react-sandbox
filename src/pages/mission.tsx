import { Grid, Typography } from "@mui/material";
import { globalStyles } from "../styles/global";

const styles = {
    header: {
        fontWeight: 'bold',
        align: 'center',
        justify: 'center'
    }
}

const Mission = () => {
    return (
        <Grid sx={globalStyles.page}>
            <Typography style={styles.header}>
                Mission
            </Typography>
        </Grid>
    );
}

export { Mission };
