import React from 'react';
import AppBarComponent from '../components/appBarComponent';
import DashboardContainerComponent from '../components/dashboardContainerComponent';

function AppTemplate() {
    return (
        <React.Fragment>
            <AppBarComponent></AppBarComponent>
            <DashboardContainerComponent></DashboardContainerComponent>
        </React.Fragment>
    );
} 

export default AppTemplate