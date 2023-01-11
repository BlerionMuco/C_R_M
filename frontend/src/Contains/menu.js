import WorkIcon from '@mui/icons-material/Work';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import WorkComponent from '../Containers/Components/WorkComponent'
import ProfileComponent from '../Containers/Components/ProfileComponent';
import CalendarComponent from '../Containers/Components/CalendarComponent';
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
    },
    {
        id: 2,
        name: "calendar",
        pathname: "/calendar",
        label: "Calendar",
        icon: <CalendarMonthIcon />,
        redirect: "/calendar",
        component: <CalendarComponent />
    }
]