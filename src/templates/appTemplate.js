import React, { useState } from 'react';
import AppBarComponent from '../components/appBarComponent';
import NewSessionDashboardComponent from '../components/newSessionDashboardComponent';
import SelectPreviousSessionComponent from '../components/selectPreviousSessionComponent';
import DashboardComponent from '../components/dashboardComponent';
import ProfileComponent from '../components/profileComponent';
import { Container, Fab } from '@material-ui/core';

function DashboardTemplate() {
    const [page, setPage] = useState('Home');
    const [tab, setTab] = useState(0);
    const [previousSession, setPreviousSession] = useState();
    let pageToRender;
    if(page === 'Profile') {
        pageToRender = <ProfileComponent/>;
    } else {
        if(tab === 0){
            if(!previousSession){
            pageToRender = <SelectPreviousSessionComponent state={{ previousSession: [previousSession, setPreviousSession]}}/>;
            } else {
                pageToRender = <DashboardComponent pitchData={previousSession}/>
            }
        } else {
            pageToRender = <NewSessionDashboardComponent/>;
        }
    }
    
    return (
        <React.Fragment>
            <AppBarComponent state={{ page: [page,setPage], tab: [tab,setTab] }}></AppBarComponent>
            <Container maxWidth="lg">
            {pageToRender}
            </Container>
        </React.Fragment>
    );
} 

export default DashboardTemplate