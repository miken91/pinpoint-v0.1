import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Chart } from 'react-google-charts';

const useStyles = makeStyles(theme => ({
lastPitchSpeedTitle: {
    fontSize: '1em',
    fontWeight: 'bold',
    textAlign: 'center'
},
lastPitchSpeed: {
    fontSize: '3em',
    fontWeight: 'bold',
    textAlign: 'center'
},
lastPitchSpeedSubScriptItems: {
    fontSize: '1.25em',
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
              <Grid item>
                <Chart
                    height="100%"
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['x', 'Pitch Velocity'],
                      [0, 0],
                      [1, 10],
                      [2, 23],
                      [3, 17],
                    ]}
                    options={{
                      title: 'Session Pitch Velocity',
                      legend: 'none',
                      hAxis: {
                        title: 'Pitch Count',
                      },
                      vAxis: {
                        title: 'Velocity',
                      },
                    }}/>
              </Grid>
              <Grid item>
                <h3>Latest Pitch</h3>
                <p>90 mph</p>
                <h6>AVG</h6>
                <p>85 mph</p>
                <h6>MAX</h6>
                <p>95 mph</p>
              </Grid>
            </Grid>
      </Paper>  
    )
}

export default PitchSpeedGridItemComponent;