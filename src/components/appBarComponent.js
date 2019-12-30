import React from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    menuTitle: {
        marginLeft: "0.67em",
        flexGrow: 1
    }
}))

function AppBarComponent() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
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
                    <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                <h2 className={classes.menuTitle}>Pinpoint</h2>
                <h4>Session Controls</h4>
                <IconButton>
                    <ExpandMore />
                </IconButton>
                {/* <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Start Session</MenuItem>
                    <MenuItem onClick={handleClose}>End Session</MenuItem>
                </Menu> */}
            </Toolbar>
        </AppBar>
    );
}

export default AppBarComponent;