import React from 'react';
import Sidebar from '../sidebar'
import './main.css';
import Box from '@material-ui/core/Box';

export default ()=>{
    return (
    <Box id="main-wrapper" display="flex">
        <Sidebar></Sidebar>
        <Box>
            <h1>Test</h1>
        </Box>
    </Box>
    )
}