import { colors } from "../../colors.styles";

const footerColumnStyles = {
    column: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '30px',
        marginRight: '30px'
    },
    link: {
        color: '#fff',
        marginBottom: '10px',
        fontSize: '14px',
        textDecoration: 'none',
        textAlign: 'left',

        '&:hover': {
            color: colors.background.header,
            transition: '200ms ease-in'
        }
    },
    heading: {
        fontSize: '18px',
        color: '#fff',
        marginBottom: '10px',
        textAlign: 'left',
        fontWeight: 'bold'
    }
};

export { footerColumnStyles };