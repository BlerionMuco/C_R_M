import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { menuItems } from '../../Contains/menu';
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { childMenuList } from '../../Contains/menu';
import { useTheme } from '@mui/material/styles';
import { Main, DrawerHeader } from '../Utils/MuiUtils';
import { AppBar } from '../Utils/MuiUtils';
import { useDispatch } from 'react-redux';
import { showNotification } from '../../redux/reducers/notification';
import useGetThemeOnStorage from '../../hooks/useGetThemeOnStorage';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
const drawerWidth = 240;


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));


const DashboardComponent = ({ component }) => {
    const theme = useTheme();
    const dispatch = useDispatch()
    const [open, setOpen] = useState(true);
    const navigate = useNavigate()
    const [openChildList, setOpenChildList] = useState(false);
    const [themeMode, setThemeMode] = useState(useGetThemeOnStorage());
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleClick = () => {
        setOpenChildList(!openChildList);
    };

    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const redirect = (link) => {
        navigate(`${link}`)
    }

    const logOut = () => {
        dispatch(showNotification({ message: "User logged out successfully", variant: "success" }))
        navigate("/");
        localStorage.removeItem('token');
        localStorage.removeItem('loggedUser');
    }

    const changeTheme = (event) => {
        console.log({ event });
        setThemeMode(event.target.checked)
        localStorage.setItem("theme", event.target.checked)
    }

    console.log({ themeMode });

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{ background: "#4e54c8", display: "flex", justifyContent: "space-between" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Hello {loggedUser.username}
                    </Typography>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div>
                            <FormControlLabel control={<MaterialUISwitch onChange={changeTheme} checked={themeMode} />} />
                        </div>
                        <div onClick={() => navigate("/profile")} style={{ alignItems: "center", display: "inline-grid", cursor: "pointer" }}>
                            <AccountCircleIcon fontSize='large' sx={{ margin: "0 auto" }} />
                            <div style={{ fontSize: "14px", textAlign: "center" }}>{loggedUser.username}</div>
                        </div>
                    </div>

                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader sx={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ fontWeight: "600", fontSize: "18px", marginLeft: "75px", paddingTop: "5px" }}>TICK</div>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List sx={{ margin: "0 10px", height: "100vh" }}>
                    {menuItems.map((menu) => (
                        <ListItem sx={window.location.pathname === menu.pathname ? { background: "#CFCFD1", borderRadius: "8px", marginBottom: "8px" } : { background: "", marginBottom: "8px" }} key={menu.id} disablePadding onClick={() => redirect(menu.redirect)}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {menu.icon}
                                </ListItemIcon>
                                <ListItemText primary={menu.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    {loggedUser.role_id === 1 &&
                        <>
                            <ListItemButton onClick={handleClick}>
                                <ListItemIcon>
                                    <SupervisorAccountIcon />
                                </ListItemIcon>
                                <ListItemText primary="Admin" />
                                {openChildList ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse sx={{ fontSize: "15px" }} in={openChildList} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {childMenuList && childMenuList.map((childMenu) => {
                                        return (
                                            <ListItemButton onClick={() => redirect(childMenu.redirect)} sx={window.location.pathname === childMenu.pathname ? { background: "#CFCFD1", borderRadius: "8px", marginBottom: "8px", pl: 4 } : { background: "", marginBottom: "8px", pl: 4 }} key={childMenu.id}>
                                                <ListItemIcon>
                                                    {childMenu.icon}
                                                </ListItemIcon>
                                                <ListItemText primary={childMenu.label} />
                                            </ListItemButton>
                                        )
                                    })}
                                </List>
                            </Collapse></>
                    }
                    <Button variant="contained" size='medium' color='primary' onClick={logOut} startIcon={<LogoutIcon />} sx={{ position: "absolute", width: "100%", bottom: "10px" }}>Log Out</Button>
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                {React.cloneElement(component, { open: open })}
            </Main>
        </Box>
    );
}

export default React.memo(DashboardComponent)