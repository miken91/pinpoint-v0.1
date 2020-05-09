import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import PitchSpeedGridItemComponent from './dashboardItems/pitchSpeedGridItemComponent';
import PitchSpinGridItemComponent from './dashboardItems/pitchSpinGridItemComponent';
import PitchMovementGridItemComponent from './dashboardItems/pitchMovementGridItemComponent';
import PitchInformationGridItemComponent from './dashboardItems/pitchInformationGridItemComponent';
import PitchCountGridItemComponent from './dashboardItems/pitchCountGridItemComponent';
import PitchTrajectorySideViewGridItemComponent from './dashboardItems/pitchTrajectorySideViewGridItemComponent';

const useStyles = makeStyles(theme => ({
    gridContainer: {
        marginTop: '1em',
        marginBottom: '1em'
    }
}))

function DashboardComponent(props) {
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.gridContainer}>
               <Grid item sm={12} md={6}>
                   <PitchSpeedGridItemComponent pitchData={props.pitchData}></PitchSpeedGridItemComponent>
               </Grid>
               <Grid item sm={12} md={6}>
                   <PitchMovementGridItemComponent pitchData={props.pitchData}></PitchMovementGridItemComponent>
               </Grid>
               <Grid item sm={6} md={3}>
                   <PitchCountGridItemComponent pitchData={props.pitchData}></PitchCountGridItemComponent>
               </Grid>
               <Grid item sm={6} md={3}>
                   <PitchSpinGridItemComponent pitchData={props.pitchData}></PitchSpinGridItemComponent>
               </Grid>
               <Grid item sm={12} md={6}>
                   <PitchInformationGridItemComponent pitchData={props.pitchData}></PitchInformationGridItemComponent>
               </Grid>
               <Grid item sm={12} md={6}>
                   <PitchTrajectorySideViewGridItemComponent pitchData={props.pitchData}></PitchTrajectorySideViewGridItemComponent>
               </Grid>
        </Grid>
    )
}

export default DashboardComponent;