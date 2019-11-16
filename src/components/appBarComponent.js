import React from 'react';
import { AppBar, Toolbar, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    menuTitle: {
        marginLeft: "0.67em"
    }
}))

function AppBarComponent() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <h2 className={classes.menuTitle}>Pinpoint</h2>
            </Toolbar>
        </AppBar>
    );
}

export default AppBarComponent;