import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    spinRateTitle: {
       fontSize: '1em',
       textAlign: 'center',
       fontWeight: 'bold'
    },
    spinRatePathTitle: {
        fontSize: '1.25em',
        textAlign: 'left',
        fontWeight: 'bold'
    },
    spinRate: {
        fontSize: '1.25em',
    },
    section: {
        height: '100%'
    }
}))
function PitchSpinGridItemComponent() {
    const classes = useStyles()
    return(
        <Paper className={classes.section}>
            <Grid container>
                <Grid className={classes.spinRateTitle} item xs={12}>
                    Spin Rate
                </Grid>
                <Grid container direction='row' justify='space-around'>
                    <Grid item alignItems='flex-start'>
                        <Grid  item>
                            <p className={classes.spinRatePathTitle}>Release</p> 
                        </Grid>
                        <Grid item>
                            <p className={classes.spinRatePathTitle}>Break</p>
                        </Grid>
                        <Grid item>
                            <p className={classes.spinRatePathTitle}>Plate</p>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid  item>
                            <p className={classes.spinRate}>1500<sub>rpm</sub></p> 
                        </Grid>
                        <Grid item>
                            <p className={classes.spinRate}>1500<sub>rpm</sub></p>
                        </Grid>
                        <Grid item>
                            <p className={classes.spinRate}>1500<sub>rpm</sub></p>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid  item>
                            <p className={classes.spinRate}>30<sub>rps</sub></p> 
                        </Grid>
                        <Grid item>
                            <p className={classes.spinRate}>30<sub>rps</sub></p>
                        </Grid>
                        <Grid item>
                            <p className={classes.spinRate}>30<sub>rps</sub></p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default PitchSpinGridItemComponent;