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

export default () => {
    let setUser = useUser();
    const [loginDetails, setLoginDetails] = useState({ username: '', password: '' })
    const [waiting, setWaiting] = useState(false)
    const handleLogin = (e) => {
        setWaiting(true)
        authenticate(loginDetails)
            .then((response) => {
                if (response.err) {
                    console.log(response.err)
                    setWaiting(false)
                    return;
                };
                setUser(response)
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
                        <TextField variant="outlined" size="small" onChange={handleUsernameChange} value={loginDetails.username} style={{ marginBottom: 10, width: '100%' }} label="Username" />
                        <TextField variant="outlined" size="small" onChange={handlePasswordChange} value={loginDetails.password} style={{ width: '100%' }} label="Password" />
                    </Box>
                </CardContent>
                <CardActions>
                    <Button component={Link} to='/register'>Register</Button>
                    <Button onClick={handleLogin} style={{ marginLeft: 'auto' }} color="inherit" disabled={waiting} size="small">Login</Button>
                </CardActions>
            </Card>
        </Box>
    )
}