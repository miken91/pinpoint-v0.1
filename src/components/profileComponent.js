import React from 'react';
import { Container, Grid } from '@material-ui/core';

function ProfileComponent(){
    return(
        <Container maxWidth='lg'>
            <Grid container>
                <Grid item>
                    <h1>Create Profile</h1>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProfileComponent;