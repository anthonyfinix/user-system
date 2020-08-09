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

export default () => {
    const [registrationDetails, setRegistrationDetails] = useState({ name: '', username: '', email: '', password: '', confirmPassword: '' });
    const [waiting, setWaiting] = useState(false)
    const handleRegister = ()=>{
        console.log("handle register");
    }
    const handleUsernameChange = ()=>{
        console.log("handleUsernameChange");
    }
    const handlePasswordChange = ()=>{
        console.log("handlePasswordChange");
    }
    return (
        <Box id="login-wrapper" display="flex" justifyContent="center" alignItems="center">
            <Card className="login-card" elevation={0}>
                {waiting ? <LinearProgress /> : null}
                <CardContent>
                    <Typography variant="h6" gutterBottom>LOGIN</Typography>
                    <Box mt={3}>
                        <TextField variant="outlined" size="small" onChange={handleUsernameChange} value={registrationDetails.username} style={{ marginBottom: 10, width: '100%' }} label="Username" />
                        <TextField variant="outlined" size="small" onChange={handlePasswordChange} value={registrationDetails.password} style={{ width: '100%' }} label="Password" />
                    </Box>
                </CardContent>
                <CardActions>
                    <Button component={Link} to='/login'>Login</Button>
                    <Button onClick={handleRegister} style={{ marginLeft: 'auto' }} color="inherit" disabled={waiting} size="small">REgister</Button>
                </CardActions>
            </Card>
        </Box>
    )
}