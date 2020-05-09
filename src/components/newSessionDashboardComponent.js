import React, { useState, useEffect } from 'react';
import { Container, Grid, } from '@material-ui/core';
import DashboardComponent from './dashboardComponent';

function NewSessionDashboardComponent() {
    const { remote, ipcRenderer } = window.require('electron');
    const [pitchData, setPitchData] = useState([]);
    
    useEffect(()=> {
        ipcRenderer.on('sendingRowsToDashboard', (event, arg) => {
            setPitchData(arg);
        })
    },[]   
    );
    return(
        <DashboardComponent pitchData={pitchData}></DashboardComponent>
    );
}

export default NewSessionDashboardComponent;