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
    }
}))
function DashboardContainerComponent() {
    const classes = useStyles();
    return(
        <Container maxWidth="xl">
            <Grid container spacing={3} className={classes.gridContainer}>
                <Grid container item md={6} spacing={3}>
                    <Grid item xs={6} md={3}>
                        <PitchInformationGridItemComponent>

                        </PitchInformationGridItemComponent>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <PitchCountGridItemComponent>

                        </PitchCountGridItemComponent>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <PitchSpeedGridItemComponent>

                        </PitchSpeedGridItemComponent>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <PitchSpinGridItemComponent>

                        </PitchSpinGridItemComponent>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <PitchMovementGridItemComponent>
                            
                        </PitchMovementGridItemComponent>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default DashboardContainerComponent;