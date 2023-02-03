import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import PeopleIcon from '@mui/icons-material/People';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { Link, Outlet } from 'react-router-dom';

const drawerWidth = 240;

const Main = (props) => {
    const { window } = props;
    const [color, setcolor] = useState('default')
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleclick = () => {
        console.log("click");
        if (color === "default") {
            setcolor("#F33823")
        }
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link onClick={handleclick} style={{ textDecoration: 'none', fontWeight: "400", color: "rgba(0, 0, 0, 0.6)", backgroundColor: "#F33823" }} to="/">
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PeopleIcon></PeopleIcon>
                        </ListItemIcon>
                        <ListItemText>Add Student</ListItemText>
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link style={{ textDecoration: 'none', fontWeight: "400", color: "rgba(0, 0, 0, 0.6)" }} to="/managestudent">
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PeopleIcon></PeopleIcon>
                        </ListItemIcon>
                        <ListItemText>Manage Students</ListItemText>
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link style={{ textDecoration: 'none', fontWeight: "400", color: "rgba(0, 0, 0, 0.6)" }} to="/">
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PeopleIcon></PeopleIcon>
                        </ListItemIcon>
                        <ListItemText>Logout</ListItemText>
                    </ListItemButton>
                </ListItem>
            </Link>
            <Divider />
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Outlet>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >

                </Box>
            </Outlet>
        </Box >
    );
}

export default Main;