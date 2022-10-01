import { Grid } from "@mui/material";
import { PageSection } from "../components/content/page-section";
import { BODY, HEADER } from "../data/pages/products.data";
import { globalStyles } from "../styles/global.styles";

const Products = () => {
    return (
        <Grid sx={globalStyles.page}>
            <PageSection header={HEADER} body={BODY} />
        </Grid>
    );
}

export { Products };
