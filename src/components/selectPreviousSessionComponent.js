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
    const rows = [{pitcherName: "Mike", dateRecorded: "10-10-20"}]
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
    },[]   
    );
    const classes = useStyles();
    return(
        <React.Fragment>
            <h2>Select Previous Session</h2>
                <Table className={classes.tableSize}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pitcher Name</TableCell>
                            <TableCell>Date Recorded</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row=>(
                        <TableRow
                        hover
                        onClick={event => handleClick(event, row)}>
                            <TableCell>{row.pitcherName}</TableCell>
                            <TableCell>{row.dateRecorded}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
        </React.Fragment>
    )
}

export default SelectPreviousSessionComponent;