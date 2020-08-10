import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';
import registerUser from './util/registerUser.js'
import { Snackbar } from '@material-ui/core';

export default () => {
    const [registrationDetails, setRegistrationDetails] = useState({ name: '', username: '', email: '', password: '', confirmPassword: '' });
    const [waiting, setWaiting] = useState(false)
    const [snackBarState, setSnackBarState] = React.useState({
        open: false,
        message: ''
    });
    const handleSnackbarClose = () => {
        setSnackBarState({ open: false, message: '' });
    }
    const handleRegister = () => {
        setWaiting(true)
        registerUser(registrationDetails)
            .then((response) => {
                if (response.err) {
                    setSnackBarState({ open: true, message: response.err })
                    setWaiting(false)
                    return;
                };
                console.log(response)
            })
    }
    const handleNameChange = (e) => {
        setRegistrationDetails({
            ...registrationDetails,
            name: e.target.value,
        })
    }
    const handleEmailChange = (e) => {
        setRegistrationDetails({
            ...registrationDetails,
            email: e.target.value,
        })
    }
    const handleUsernameChange = (e) => {
        setRegistrationDetails({
            ...registrationDetails,
            username: e.target.value,
        })
    }
    const handlePasswordChange = (e) => {
        setRegistrationDetails({
            ...registrationDetails,
            password: e.target.value,
        })
    }
    const handleConfirmPasswordChange = (e) => {
        setRegistrationDetails({
            ...registrationDetails,
            confirmPassword: e.target.value,
        })
    }
    return (
        <Box id="register-wrapper" display="flex" justifyContent="center" alignItems="center">
            <Card className="login-card" elevation={0}>
                {waiting ? <LinearProgress /> : null}
                <CardContent>
                    <Typography variant="h6" gutterBottom>LOGIN</Typography>
                    <Box mt={3}>
                        <TextField
                            variant="outlined"
                            size="small"
                            className="custom-form-styles"
                            onChange={handleNameChange}
                            value={registrationDetails.name}
                            label="Full Name" />
                        <TextField
                            variant="outlined"
                            size="small"
                            className="custom-form-styles"
                            onChange={handleUsernameChange}
                            value={registrationDetails.username}
                            label="Username" />
                        <TextField
                            variant="outlined"
                            size="small"
                            className="custom-form-styles"
                            onChange={handleEmailChange}
                            value={registrationDetails.email}
                            label="Email" />
                        <TextField
                            variant="outlined"
                            size="small"
                            className="custom-form-styles"
                            onChange={handlePasswordChange}
                            value={registrationDetails.password}
                            label="Password" />
                        <TextField
                            variant="outlined"
                            size="small"
                            className="custom-form-styles"
                            onChange={handleConfirmPasswordChange}
                            value={registrationDetails.ConfirmPassword}
                            label="Confirm Password" />
                    </Box>
                </CardContent>
                <CardActions>
                    <Button component={Link} to='/login' size="small">Login</Button>
                    <Button onClick={handleRegister} style={{ marginLeft: 'auto' }} color="inherit" disabled={waiting} size="small">REgister</Button>
                </CardActions>
            </Card>
            <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={snackBarState.open}
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose}
                    message={snackBarState.message}
                    key='loginResponse'
                />
        </Box>
    )
}