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
function PitchSpinGridItemComponent(props) {
    const classes = useStyles()
    var releaseSpinPerMin = props.pitchData.length>0 ? props.pitchData[props.pitchData.length - 1][27] : 0;
    var breakSpinPerMin = props.pitchData.length>0 ? props.pitchData[props.pitchData.length - 1][42] : 0;
    var plateSpinPerMin = props.pitchData.length>0 ? props.pitchData[props.pitchData.length - 1][58] : 0;

    return(
        <Paper className={classes.section}>
            <Grid container>
                <Grid className={classes.spinRateTitle} item xs={12}>
                    Spin Rate
                </Grid>
                <Grid container direction='row' justify='space-around'>
                    <Grid item>
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
                            <p className={classes.spinRate}>{releaseSpinPerMin}<sub>rpm</sub></p> 
                        </Grid>
                        <Grid item>
                            <p className={classes.spinRate}>{breakSpinPerMin}<sub>rpm</sub></p>
                        </Grid>
                        <Grid item>
                            <p className={classes.spinRate}>{plateSpinPerMin}<sub>rpm</sub></p>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid  item>
                            <p className={classes.spinRate}>{(releaseSpinPerMin/60).toFixed(0)}<sub>rps</sub></p> 
                        </Grid>
                        <Grid item>
                            <p className={classes.spinRate}>{(breakSpinPerMin/60).toFixed(0)}<sub>rps</sub></p>
                        </Grid>
                        <Grid item>
                            <p className={classes.spinRate}>{(plateSpinPerMin/60).toFixed(0)}<sub>rps</sub></p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default PitchSpinGridItemComponent;