import React from 'react';
import { Chart } from 'react-google-charts';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    section: {
        height: '100%'
    }
}));
function GraphComponent() {
    const classes = useStyles();
    return (
        <Paper className={classes.section}>
            <Chart 
                chartType="ScatterChart"
                data={[['Break', 'Movement'], [3,-1],[-3,1]]}
                width="100%"
                height="100%">
            </Chart>
        </Paper>
    )

} 

export default GraphComponent;