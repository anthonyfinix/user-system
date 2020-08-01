import React from 'react';
import './header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useSidebarState } from '../../store';


export default (props) => {
    const toggleSidebar = useSidebarState();
    return (
        <AppBar position="static" id="main-header">
            <Toolbar>
                <IconButton edge="start" onClick={toggleSidebar} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Button color="inherit" className="login-btn">Login</Button>
            </Toolbar>
        </AppBar>
    )
}