import { colors } from "../../colors.styles";

export const headerLinksStyles = {
    link: {
        padding: '10px',
        fontWeight: 'bold',
        color: colors.primary,
        fontSize: "20px",
        "&:hover": {
            color: colors.secondary
        },
    },
    wrapper: {
        paddingRight: '2rem'
    }
};