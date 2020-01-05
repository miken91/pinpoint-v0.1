import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import { Chart } from 'react-google-charts';

const useStyles = makeStyles(theme =>({
    section: {
        height: '100%'
    }
}));

function PitchTrajectorySideViewGridItemComponent(){
    const classes = useStyles();
    return(
        <Paper className={classes.section}>
            <Grid>
                <Chart
            height="100%"
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Pitch Location', 'Pitch Height'],
                      ['Release',25],
                      ['Break', 35],
                      ['Plate', 10],
                    ]}
                    options={{
                      title: 'Pitch Trajectory',
                      legend: 'none',
                      curveType: 'function',
                      hAxis: {
                        title: 'Pitch Location',
                      },
                      vAxis: {
                        title: 'Pitch Height',
                      },
                    }}/>
            </Grid>
        </Paper>

    )
}

export default PitchTrajectorySideViewGridItemComponent;