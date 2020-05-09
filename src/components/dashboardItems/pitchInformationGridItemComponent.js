import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Chart } from 'react-google-charts';

const useStyles = makeStyles(theme => ({
  paper: {
    fontSize: '1em',
    textAlign: 'center',
  },
  section: {
    height: '100%'
  },
  informationTitle: {
    fontSize: '1em',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  informationSectionTitle: {
    marginLeft: '1em'
  }
}));

function PitchInformationGridItemComponent(props) {
    const classes = useStyles();
    var lastPitchType = props.pitchData.length>0 ? props.pitchData[props.pitchData.length - 1][2] : 0;
    var lastPitchResult = props.pitchData.length>0 ? props.pitchData[props.pitchData.length - 1][3] : 0;
    var fastballCount = 0;
    props.pitchData.map((pitchData, i)=> {
      fastballCount = pitchData[2].includes('Fast') ? fastballCount + 1 : fastballCount;
    })
      return (
        <Paper className={classes.section}>
          <Grid container>
            <Grid item xs={12} className={classes.informationTitle}>
                Pitch Information
            </Grid>
            <Grid container justify='space-around' direction='row' item xs={12}>
                   <Grid item>
                       <h3>
                           Pitch Type
                       </h3>
                       <p>
                           {lastPitchType}
                       </p>
                       <h3>
                           Pitch Result
                       </h3>
                       <p>
                           {lastPitchResult}
                       </p>
                   </Grid>
                   <Grid item>
                   <Chart
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                          ['Pitch Type', 'Amount per type'],
                          ['Fastball', fastballCount],
                          ['Curveball', 0],
                          ['Slider', 0],
                          ['Changeup', 0],
                        ]}
                        options={{
                          legend: 'none',
                          pieSliceText: 'label',
                          title: 'Pitch Type In Session',
                          pieStartAngle: 100,
                        }}/>
                   </Grid>
               </Grid>
          </Grid>
        </Paper>
      )
}

export default PitchInformationGridItemComponent;