import React from 'react';
import './header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useSidebarState } from '../../store';
import { Link } from 'react-router-dom';


export default (props) => {
    const toggleSidebar = useSidebarState();
    return (
        <AppBar elevation={0} style={{ background: 'transparent',color: "black"}} position="static" id="main-header">
            <Toolbar>
                <IconButton edge="start" onClick={toggleSidebar} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Button className="custom-home-link custom-nav-links" component={Link} to="/" color="inherit">Home</Button>
                <Button className="custom-nav-links" component={Link} to="/login" color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}