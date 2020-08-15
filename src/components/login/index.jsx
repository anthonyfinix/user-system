import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import authenticate from './util/authenticate';
import './login.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../store'
import { Snackbar } from '@material-ui/core';

export default () => {
    let setUser = useUser();
    const [loginDetails, setLoginDetails] = useState({ username: '', password: '' });
    const [waiting, setWaiting] = useState(false);
    const [snackBarState, setSnackBarState] = React.useState({
        open: false,
        message: ''
    });
    const handleSnackbarClose = () => {
        setSnackBarState({ open: false, message: '' });
    }
    const handleLogin = (e) => {
        setWaiting(true)
        authenticate(loginDetails)
            .then((response) => {
                if (response.err) {
                    setSnackBarState({ open: true, message: response.err })
                    setWaiting(false)
                    return;
                };
                setUser({ ...response });
                localStorage.setItem('token',response.accessToken)
            })
    }
    const handleUsernameChange = (e) => {
        setLoginDetails({ username: e.target.value, password: loginDetails.password })
    }
    const handlePasswordChange = (e) => {
        setLoginDetails({ username: loginDetails.username, password: e.target.value })
    }
    return (
        <Box id="login-wrapper" display="flex" justifyContent="center" alignItems="center">
            <Card className="login-card" elevation={0}>
                {waiting ? <LinearProgress /> : null}
                <CardContent>
                    <Typography variant="h6" gutterBottom>LOGIN</Typography>
                    <Box mt={3}>
                        <TextField
                            className="custom-form-styles"
                            variant="outlined"
                            size="small"
                            onChange={handleUsernameChange}
                            value={loginDetails.username}
                            label="Username" />
                        <TextField
                            className="custom-form-styles"
                            variant="outlined"
                            size="small"
                            onChange={handlePasswordChange}
                            value={loginDetails.password}
                            label="Password" />
                    </Box>
                </CardContent>
                <CardActions>
                    <Button component={Link} to='/register'>Register</Button>
                    <Button onClick={handleLogin} style={{ marginLeft: 'auto' }} color="inherit" disabled={waiting} size="small">Login</Button>
                </CardActions>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={snackBarState.open}
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose}
                    message={snackBarState.message}
                    key='loginResponse'
                />
            </Card>
        </Box>
    )
}