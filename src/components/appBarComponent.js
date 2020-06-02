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
    const {
        tab: [tab, setTab]
    } = {
        tab: useState(0),
        ...props.state
    }

    const handleChange = (event, newTab) => {
        setTab(newTab);
    }

    return (
        <AppBar position="sticky">
            <Toolbar>
                <h2 className={classes.menuTitle}>Pinpoint Pitch Tracking</h2>
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