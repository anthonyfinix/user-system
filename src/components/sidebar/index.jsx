import React from 'react';
import "./sidebar.css";
import { sidebarState } from '../../store';
import { useRecoilValue } from 'recoil';
import { pages } from '../../utils';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/Listitem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


export default () => {
    const state = useRecoilValue(sidebarState)
    return (
        <Box id="sidebar"className={`${state ? "open" : "hide"}`}>
            <List>
                {getPages()}
            </List>
        </Box>
    )
}

const getPages = () => {
    return pages.map(page => {
        return (
            <ListItem key={page.id} button>
                <ListItemIcon>
                    <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText primary={page.name} />
            </ListItem>
        )
    })
}