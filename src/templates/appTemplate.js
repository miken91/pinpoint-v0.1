import React, { useState } from 'react';
import AppBarComponent from '../components/appBarComponent';
import NewSessionDashboardComponent from '../components/newSessionDashboardComponent';
import SelectPreviousSessionComponent from '../components/selectPreviousSessionComponent';
import DashboardComponent from '../components/dashboardComponent';
import ProfileComponent from '../components/profileComponent';
import { Container, Fab, TextField, CircularProgress } from '@material-ui/core';

function DashboardTemplate() {
    const { ipcRenderer } = window.require('electron');
    const [tab, setTab] = useState(0);
    const [previousSession, setPreviousSession] = useState();
    
    let pageToRender;
    if (tab === 0) {
        if (!previousSession) {
            pageToRender = <SelectPreviousSessionComponent state={{ previousSession: [previousSession, setPreviousSession] }} />;
        } else {
            pageToRender = 
            <>
                <DashboardComponent pitchData={previousSession} />
                <Fab variant="extended" onClick={()=> setPreviousSession()}>
                    Load Previous Session
                </Fab>
            </>
        }
    } else {
        pageToRender =
            <div style={{height: '90vh'}}>
                <NewSessionDashboardComponent />
            </div>
    }


    return (
        <React.Fragment>
            <AppBarComponent state={{ tab: [tab, setTab] }}></AppBarComponent>
            <Container maxWidth="lg">
                {pageToRender}
            </Container>
        </React.Fragment>
    );
}

export default DashboardTemplate