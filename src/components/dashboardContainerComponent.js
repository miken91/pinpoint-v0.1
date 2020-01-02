import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import PitchSpeedGridItemComponent from './dashboardItems/pitchSpeedGridItemComponent';
import PitchSpinGridItemComponent from './dashboardItems/pitchSpinGridItemComponent';
import PitchMovementGridItemComponent from './dashboardItems/pitchMovementGridItemCompoent';
import PitchInformationGridItemComponent from './dashboardItems/pitchInformationGridItemComponent';
import PitchCountGridItemComponent from './dashboardItems/pitchCountGridItemComponent';


const useStyles = makeStyles(theme => ({
    gridContainer: {
        marginTop: '1em',
        marginBottom: '1em'
    }
}))
function DashboardContainerComponent() {
    const classes = useStyles();
    return(
        <Container maxWidth="lg">
            <Grid container spacing={3} className={classes.gridContainer}>
               <Grid item md={6}>
                   <PitchSpeedGridItemComponent></PitchSpeedGridItemComponent>
               </Grid>
               <Grid item md={6}>
                   <PitchMovementGridItemComponent></PitchMovementGridItemComponent>
               </Grid>
               <Grid item md={3}>
                   <PitchCountGridItemComponent></PitchCountGridItemComponent>
               </Grid>
               <Grid item md={3}>
                   <PitchSpinGridItemComponent></PitchSpinGridItemComponent>
               </Grid>
               <Grid item md={6}>
                   <PitchInformationGridItemComponent></PitchInformationGridItemComponent>
               </Grid>
            </Grid>
        </Container>
    );
}

export default DashboardContainerComponent;