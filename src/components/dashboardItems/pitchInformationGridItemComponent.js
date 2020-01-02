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

function PitchInformationGridItemComponent() {
    const classes = useStyles();

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
                           Fastball
                       </p>
                       <h3>
                           Pitch Result
                       </h3>
                       <p>
                           Strike
                       </p>
                   </Grid>
                   <Grid item>
                   <Chart
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                          ['Pitch Type', 'Amount per type'],
                          ['Fastball', 5],
                          ['Curveball', 4],
                          ['Slider', 3],
                          ['Changeup', 2],
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