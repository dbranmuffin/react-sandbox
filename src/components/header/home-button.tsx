import { useNavigate } from "react-router-dom";
import { homeButtonStyles } from "../../styles/components/header/home-button.styles";
import CabinIcon from '@mui/icons-material/Cabin';
import Link from "@mui/material/Link";

const HomeButton = () => {
    const navigate = useNavigate();
    
    return <Link onClick={() => navigate('/')} component='button'>
        <CabinIcon sx={homeButtonStyles.homeButton} />
    </Link>;
};

export { HomeButton };