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
function PitchSpeedGridItemComponent(props) {
    const classes = useStyles();
    var data = [['x', 'Pitch Velocity']];
    var total = 0;
    var avg = 0;
    var highest = 0;
    var lastPitch = 0;
    props.pitchData.map((pitchData, i)=>{
      data.push([i + 1, pitchData[5]])
      total = total + pitchData[5]
      avg = total/(i+1);
      highest = pitchData[5]>highest ? pitchData[5] : highest;
      lastPitch = pitchData[5];
    })
    return(
      <Paper className={classes.section}>
          <Grid container>
              <Grid item>
                <Chart
                    height="100%"
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={data}
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
                <p>{lastPitch} mph</p>
                <h6>AVG</h6>
                <p>{avg} mph</p>
                <h6>FASTEST</h6>
                <p>{highest} mph</p>
              </Grid>
            </Grid>
      </Paper>  
    )
}

export default PitchSpeedGridItemComponent;