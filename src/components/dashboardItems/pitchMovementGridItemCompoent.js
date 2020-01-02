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
function PitchMovementGridItemComponent() {
    const classes = useStyles();
    return (
        <Paper className={classes.section}>
            <Grid container direction='row'>
                <Grid item>
                    <Chart 
                        chartType="ScatterChart"
                        data={[
                            ['Break', 'Movement'], 
                            [3,-1]
                        ]}
                        width="80%"
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
                        <h4>Vertical Movement</h4>
                        <p>29in</p>
                        <h4>Horizontal Movement</h4>
                        <p>14in</p>
                </Grid>
            </Grid>
        </Paper>
    )
} 

export default PitchMovementGridItemComponent;