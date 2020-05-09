import React from 'react'
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Chart } from 'react-google-charts';

const useStyles = makeStyles(theme => ({
    section: {
        height: '100%'
    },
    statTitle: {
        fontSize:'1.25em'
    }
}));
function PitchMovementGridItemComponent(props) {
    const classes = useStyles();
    var data = [['Movement', 'Height']];
    var lastPitchHeight = props.pitchData.length>0 ? props.pitchData[props.pitchData.length - 1][17] : 0;
    var lastPitchMovement = props.pitchData.length>0 ? props.pitchData[props.pitchData.length - 1][16]: 0;
    data.push([lastPitchMovement, lastPitchHeight])
    return (
        <Paper className={classes.section}>
            <Grid container direction='row'>
                <Grid item>
                    <Chart 
                        chartType="ScatterChart"
                        data={data}
                        height="250px"
                        options={{
                            title: "Pitch break and movement",
                            hAxis: { title: 'Movement'},
                            vAxis: { title: 'Break'},
                            legend: 'none',
                            tooltip: {trigger: 'none'}
                        }}>
                    </Chart>
                </Grid>
                <Grid item>
                        <h4>Height</h4>
                        <p>{lastPitchHeight}in</p>
                        <h4>Horizontal Movement</h4>
                        <p>{lastPitchMovement}in</p>
                </Grid>
            </Grid>
        </Paper>
    )
} 

export default PitchMovementGridItemComponent;