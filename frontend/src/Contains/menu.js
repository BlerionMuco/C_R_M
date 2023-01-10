import WorkIcon from '@mui/icons-material/Work';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WorkComponent from '../Containers/Components/WorkComponent'
import ProfileComponent from '../Containers/Components/ProfileComponent';
export const menuItems = [
    {
        id: 1,
        name: "work",
        label: "Work",
        pathname: "/work",
        icon: <WorkIcon />,
        redirect: "/work",
        components: <WorkComponent />
    },
    {
        id: 2,
        name: "profile",
        pathname: "/profile",
        label: "Profile",
        icon: <AccountBoxIcon />,
        redirect: "/profile",
        component: <ProfileComponent />
    }
]