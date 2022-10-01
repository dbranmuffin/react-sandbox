import { Avatar as MUIAvatar } from '@mui/material';
import ProfileImage from '../../data/global/avatar.jpg';
import { avatarStyles } from '../../styles/components/header/avatar.styles';

const Avatar = () => {
    return <MUIAvatar alt="Avatar" src={ProfileImage} sx={avatarStyles.avatar} />;
}

export { Avatar };
