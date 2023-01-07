import WorkIcon from '@mui/icons-material/Work';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WorkComponent from '../Containers/Components/WorkComponent'
import ProfileComponent from '../Containers/Components/ProfileComponent';
export const menuItems = [
    {
        id: 1,
        label: "Work",
        icon: <WorkIcon />,
        redirect: "/work",
        components: <WorkComponent />
    },
    {
        id: 2,
        label: "Profile",
        icon: <AccountBoxIcon />,
        redirect: "/profile",
        component: <ProfileComponent />
    }
]