import { colors } from "../../colors.styles";

const footerStyles = {
	box: {
		background: colors.background.footer,
		position: 'fixed',
		bottom: '0',
		width: '100%'
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		width: '60%',
		margin: 'auto'
	},
	row: {
		width: '60%',
		display: 'flex',
		justifyContent: 'space-between',
		margin: 'auto'
	}
};

export { footerStyles };