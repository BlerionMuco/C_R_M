import WorkIcon from '@mui/icons-material/Work';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';

import WorkComponent from '../Containers/Components/Work/WorkComponent'
import ProfileComponent from '../Containers/Components/Profile/ProfileComponent';
import CalendarComponent from '../Containers/Components/Calendar/CalendarComponent';
import ManageUsersComponent from '../Containers/Components/Admin/ManageUsersComponent';
import ManageWorkDayComponent from '../Containers/Components/Admin/ManageWorkDayComponent';
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
        id: 3,
        name: "calendar",
        pathname: "/calendar",
        label: "Calendar",
        icon: <CalendarMonthIcon />,
        redirect: "/calendar",
        component: <CalendarComponent />
    },
    // {
    //     id: 4,
    //     name: "adminDashboard",
    //     //pathname: "/adminDashboard",
    //     label: "Admin",
    //     icon: <CalendarMonthIcon />,
    //     child: true
    //     //redirect: "/calendar",
    //     //component: <CalendarComponent />
    // }
]

export const childMenuList = [
    {
        id: 1,
        name: "userManagment",
        pathname: "/userManagment",
        label: "Users",
        icon: <ManageAccountsIcon />,
        redirect: "/userManagment",
        component: <ManageUsersComponent />
    },
    {
        id: 2,
        name: "manageWorkDay",
        pathname: "/manageWorkDay",
        label: "Work Day",
        icon: <EventRepeatIcon />,
        redirect: "/manageWorkDay",
        component: <ManageWorkDayComponent />
    }
]