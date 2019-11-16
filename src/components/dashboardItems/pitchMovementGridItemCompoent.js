import React from 'react'
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme =>({
    movementTitle: {
        fontSize: '1em',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    section: {
        height: '100%'
    }
}))
function PitchMovementGridItemComponent() {
    const classes = useStyles();
    return (
       <Paper className = {classes.section}>
           <Grid container>
               <Grid className = {classes.movementTitle} item xs={12}>
                   Pitch Movement
               </Grid>
               <Grid container justify='space-around' direction='row' item xs={12}>
                   <Grid item>
                       <h3>
                           Vertical Break
                       </h3>
                       <p>
                           29 In
                       </p>
                       <h3>
                           Horizontal Break
                       </h3>
                       <p>
                           7.2 In
                       </p>
                   </Grid>
                   <Grid item>
                   </Grid>
               </Grid>
           </Grid>
       </Paper>

   ) 
}

export default PitchMovementGridItemComponent;