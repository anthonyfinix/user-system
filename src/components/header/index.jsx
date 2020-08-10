import React from 'react';
import './header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useSidebarState, user, useUser } from '../../store';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';



export default (props) => {
    const setUser = useUser()
    const toggleSidebar = useSidebarState();
    const userState = useRecoilValue(user);
    let location = useLocation();
    const toggleIcon = () => {
        return (
            <IconButton edge="start" onClick={toggleSidebar} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
        )
    }

    const handleLogout = ()=>{
        setUser(false);
    }

    const getLoggedInItems = () => {
        return (
            <Button className="custom-nav-links" onClick={handleLogout} color="inherit">Logout</Button>
        )
    }
    const getLoggedOutItems = () => {
        return (
            <Button className="custom-nav-links" component={Link} to="/login" color="inherit">Login</Button>
        )
    }

    return (
        <AppBar elevation={0} style={{ background: 'transparent', color: "black" }} position="static" id="main-header">
            <Toolbar>
                {location.pathname === '/app' ? toggleIcon() : null}
                <Button className="custom-home-link custom-nav-links" component={Link} to="/" color="inherit">Home</Button>
                {userState ? getLoggedInItems() : getLoggedOutItems()}
            </Toolbar>
        </AppBar>
    )
}
