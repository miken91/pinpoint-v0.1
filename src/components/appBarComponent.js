import React, { useState,useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Tabs, Tab} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    menuTitle: {
        marginLeft: "0.67em",
        flexGrow: 1
    }
}))

function AppBarComponent(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const {
        page: [page, setPage]
    } = {
        page: useState(''),
        ...props.state
    }
    const {
        tab: [tab, setTab]
    } = {
        tab: useState(0),
        ...props.state
    }
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = event => {
        setPage(event.currentTarget.id)
        setAnchorEl(null);
    };
    
    const handleChange = (event, newTab) => {
        setTab(newTab);
    }

    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {/* <MenuItem id='Home' onClick={handleClose}>Home</MenuItem> */}
                    <MenuItem id='Dashboard' onClick={handleClose}>Dashboard</MenuItem>
                    <MenuItem id='Profile' onClick={handleClose}>Profile</MenuItem>
                </Menu>
                <h2 className={classes.menuTitle}>Pinpoint</h2>
                <Tabs 
                    value={tab}
                    onChange={handleChange}>
                        <Tab label="View Previous Session"></Tab>
                        <Tab label="Start New Session"></Tab>
                </Tabs>
            </Toolbar>
        </AppBar>
    );
}

export default AppBarComponent;