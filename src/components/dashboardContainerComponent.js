import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import PitchSpeedGridItemComponent from './dashboardItems/pitchSpeedGridItemComponent';
import PitchSpinGridItemComponent from './dashboardItems/pitchSpinGridItemComponent';
import PitchMovementGridItemComponent from './dashboardItems/pitchMovementGridItemCompoent';
import PitchInformationGridItemComponent from './dashboardItems/pitchInformationGridItemComponent';
import PitchCountGridItemComponent from './dashboardItems/pitchCountGridItemComponent';
import PitchTrajectorySideViewGridItemComponent from './dashboardItems/pitchTrajectorySideViewGridItemComponent';


const useStyles = makeStyles(theme => ({
    gridContainer: {
        marginTop: '1em',
        marginBottom: '1em'
    }
}))
function DashboardContainerComponent() {
    const { remote, ipcRenderer } = window.require('electron');
    const [pitchData, setPitchData] = useState([]);
    
    useEffect(()=> {
        ipcRenderer.send('asynchronous-message', 'ping')
        ipcRenderer.on('asynchronous-reply', (event, arg) => {
            setPitchData(arg);
        })
    },[]   
    );
    const classes = useStyles();
    return(
        <Container maxWidth="lg">
            <Grid container spacing={3} className={classes.gridContainer}>
               <Grid item sm={12} md={6}>
                   <PitchSpeedGridItemComponent pitchData={pitchData}></PitchSpeedGridItemComponent>
               </Grid>
               <Grid item sm={12} md={6}>
                   <PitchMovementGridItemComponent></PitchMovementGridItemComponent>
               </Grid>
               <Grid item sm={6} md={3}>
                   <PitchCountGridItemComponent></PitchCountGridItemComponent>
               </Grid>
               <Grid item sm={6} md={3}>
                   <PitchSpinGridItemComponent></PitchSpinGridItemComponent>
               </Grid>
               <Grid item sm={12} md={6}>
                   <PitchInformationGridItemComponent pitchData={pitchData}></PitchInformationGridItemComponent>
               </Grid>
               <Grid item sm={12} md={6}>
                   <PitchTrajectorySideViewGridItemComponent></PitchTrajectorySideViewGridItemComponent>
               </Grid>
            </Grid>
        </Container>
    );
}

export default DashboardContainerComponent;