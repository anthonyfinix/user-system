import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import './loading.css';
export default () => {
    return (<Box id='loading-wrapper' display="flex" alignItems="center" justifyContent="center">
        <CircularProgress/>
    </Box >)
}