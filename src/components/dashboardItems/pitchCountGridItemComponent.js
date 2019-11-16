import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PitchMovementGridItemComponent from './pitchMovementGridItemCompoent';

const useStyles = makeStyles(theme => ({
    countTitle: {
        fontSize: '1em',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    count: {
        fontSize: '2.5em',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    section: {
        height: '100%'
    }
}));

function PitchCountGridItemComponent() {
    const classes = useStyles();
    return (
        <Paper className={classes.section}>
          <Grid container direction='column'>
            <Grid item xs={12} className={classes.countTitle}>
                Pitch Count
            </Grid>
            <Grid item xs={12} className={classes.count}>
                <p>25</p>
            </Grid>
          </Grid>
        </Paper>
    )
}

export default PitchCountGridItemComponent;