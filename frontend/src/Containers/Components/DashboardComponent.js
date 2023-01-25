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
const drawerWidth = 240;


const DashboardComponent = ({ component }) => {
    const theme = useTheme();
    const dispatch = useDispatch()
    const [open, setOpen] = useState(true);
    const navigate = useNavigate()
    const [openChildList, setOpenChildList] = useState(false);
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
                    <div onClick={() => navigate("/profile")} style={{ alignItems: "center", display: "inline-grid", cursor: "pointer" }}>
                        <AccountCircleIcon fontSize='large' sx={{ margin: "0 auto" }} />
                        <div style={{ fontSize: "14px", textAlign: "center" }}>{loggedUser.username}</div>
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