import { AppBar, Link, Toolbar, CssBaseline, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { pages } from "../data/global/pages";
import CabinIcon from '@mui/icons-material/Cabin';
import { Avatar } from '@mui/material';
import { NAV_BACKGROUND, PRIMARY, SECONDARY } from "../styles/colors";
import ProfileImage from '../data/global/avatar.jpg';

const styles = {
    appBar: {
        background: NAV_BACKGROUND,
        position: 'absolute',
        width: '100%'
    },
    toolBar: {
        width: '100%',
        paddingLeft: '10px',
        paddingRight: '10px',
        justifyContent: 'space-between'
    },
    homeButtonContainer: {
        paddingLeft: '10px'
    },
    homeButton: {
        fontSize: '30px',
        color: PRIMARY
    },
    link: {
        padding: '10px',
        fontWeight: 'bold',
        color: PRIMARY,
        fontSize: "20px",
        "&:hover": {
            color: SECONDARY
        },
    },
    avatar: {
        height: '2.5rem',
        width: '2.5rem'
    }
};


const Navbar = () => {
    const navigate = useNavigate();

    return (
        <AppBar sx={styles.appBar}>
            <CssBaseline />
            <Toolbar sx={styles.toolBar}>
                <Link onClick={() => navigate('/')} component='button'>
                    <CabinIcon sx={styles.homeButton} />
                </Link>
                <Box>
                    {pages.filter(page => {
                        return page.path !== '/'
                    }).map(page => {
                        return <Link sx={styles.link}
                            key={page.text}
                            component='button'
                            onClick={() => navigate(page.path)}>
                            {page.text}
                        </Link>
                    })}
                </Box>
                <Avatar alt="Avatar" src={ProfileImage} sx={styles.avatar} />
            </Toolbar>
        </AppBar >
    );
}

export { Navbar };
