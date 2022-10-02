import { footerColumnLinks } from "../../data/global/pages.data";
import { FooterColumn } from "./footer-column";
import { Box, Grid } from "@mui/material";
import { footerStyles } from "../../styles/components/footer/footer.styles";

const Footer = () => {
	return (
		<Box sx={footerStyles.box}>
			<Box sx={footerStyles.container}>
				<Grid sx={footerStyles.row}>
					{footerColumnLinks.map(column => {
						return <FooterColumn key={column.title} column={column} />
					})}
				</Grid>
			</Box>
		</Box>
	);
};
export default Footer;
