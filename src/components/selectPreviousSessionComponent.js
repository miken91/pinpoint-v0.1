import React, {useState, useEffect} from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
    tableSize: {
        width: "50%"
    }
}));
function SelectPreviousSessionComponent(props) {
    const { remote, ipcRenderer } = window.require('electron');
    const [pitchers, setPitchers] = useState([]);
    const {
        previousSession: [previousSession, setPreviousSession]
    } = {
        previousSession: useState(),
        ...props.state
    }
    const handleClick = (event, row) => {
            ipcRenderer.send('getRowData', row);
    }
    useEffect(()=> {
        ipcRenderer.on('returningSessionData', (event, arg) => {
            setPreviousSession(arg);
        })
        ipcRenderer.on('returningSessions', function(event, arg){
            setPitchers(arg)
        })
        ipcRenderer.send('getSessions')
    },[]   
    );
    const classes = useStyles();
    return(
        <React.Fragment>
            <h2>Select Previous Session</h2>
                <Table className={classes.tableSize}>
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Teams</TableCell>
                            <TableCell>Date Recorded</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pitchers.map(pitcher=>(
                        <TableRow
                        hover
                        onClick={event => handleClick(event, pitcher)}>
                            <TableCell>{pitcher.firstName}</TableCell>
                            <TableCell>{pitcher.lastName}</TableCell>
                            <TableCell>{pitcher.team}</TableCell>
                            <TableCell>{pitcher.date}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
        </React.Fragment>
    )
}

export default SelectPreviousSessionComponent;