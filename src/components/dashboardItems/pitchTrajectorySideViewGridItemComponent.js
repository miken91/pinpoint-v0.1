import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import { Chart } from 'react-google-charts';

const useStyles = makeStyles(theme =>({
    section: {
        height: '100%'
    }
}));

function PitchTrajectorySideViewGridItemComponent(props){
    const classes = useStyles();
    var pitchHeightAtRelease = props.pitchData.length>0 ? props.pitchData[props.pitchData.length - 1][24] : 0;
    var pitchHeightAtBreak = props.pitchData.length>0 ? props.pitchData[props.pitchData.length - 1][39] : 0;
    var pitchHeightAtPlate = props.pitchData.length>0 ? props.pitchData[props.pitchData.length - 1][55] : 0;
    return(
        <Paper className={classes.section}>
            <Grid>
                <Chart
            height="100%"
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Pitch Location', 'Pitch Height'],
                      ['Release',pitchHeightAtRelease],
                      ['Break', pitchHeightAtBreak],
                      ['Plate', pitchHeightAtPlate],
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