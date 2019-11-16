import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
lastPitchSpeedTitle: {
    fontSize: '1em',
    fontWeight: 'bold',
    textAlign: 'center'
},
lastPitchSpeed: {
    fontSize: '2em',
    fontWeight: 'bold',
    textAlign: 'center'
},
lastPitchSpeedSubScriptItems: {
    fontSize: '.75em',
    fontWeight: 'bold',
    textAlign: 'center',
},
section: {
  height: '100%'
}
}))
function PitchSpeedGridItemComponent() {
    const classes = useStyles();
    return(
      <Paper className={classes.section}>
          <Grid container>
              <Grid className={classes.lastPitchSpeedTitle} item xs={12}>
                Pitch Velocity
              </Grid>
              <Grid className={classes.lastPitchSpeed} item xs={12}> 
                <p>90 mph</p>
              </Grid>
              <Grid className={classes.lastPitchSpeedSubScriptItems} item xs={12} sm={6}>
                <p>Avg Pitch Speed: 90</p> 
              </Grid>
              <Grid className={classes.lastPitchSpeedSubScriptItems} item xs={12} sm={6}>
                <p>Max Pitch Speed: 90</p>
              </Grid>
          </Grid>
      </Paper>  
    )
}

export default PitchSpeedGridItemComponent;