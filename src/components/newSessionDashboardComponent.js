import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Fab, CircularProgress } from '@material-ui/core';
import DashboardComponent from './dashboardComponent';

function NewSessionDashboardComponent() {
    const { remote, ipcRenderer } = window.require('electron');
    const [pitchData, setPitchData] = useState();
    const [response, setResponse] = useState();

    useEffect(() => {
        ipcRenderer.on('sendingRowsToDashboard', (event, arg) => {
            setPitchData(arg);
        })
        ipcRenderer.on('savingSessionResult', (event, arg)=> {
            if(arg.includes('error')) {
                setResponse(arg)
            } else {
                setResponse(arg)
                setPitchData();
                setPlayer({ firstName: "", lastName: "", team: ""} )
            }
        })
    }, []
    );
    const [player, setPlayer] = useState({ firstName: "", lastName: "", team: ""})
    const handlePlayerChange = e => {
        const { name, value } = e.target;
        setPlayer(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleSave = () => {
        ipcRenderer.send('saveSession', player)
    }
    return (
        <>
            {pitchData ?
                <>
                    <h1>{response}</h1>
                    <DashboardComponent pitchData={pitchData}></DashboardComponent>
                    <form>
                        <TextField style={{ marginRight: "1em" }} label="First Name" name="firstName" value={player.firstName} onChange={(event) => handlePlayerChange(event)}></TextField>
                        <TextField style={{ marginRight: "1em" }} label="Last Name" name="lastName" value={player.lastName} onChange={(event) => handlePlayerChange(event)}></TextField>
                        <TextField style={{ marginRight: "1em" }} label="Team" name="team" value={player.team} onChange={(event) => handlePlayerChange(event)}></TextField>
                        <Fab variant="extended" onClick={()=> handleSave()}>
                            Save Session
                        </Fab>
                    </form> </> : <div style={{ display: "flex", flexDirection: "row", alignItems: "center", height: "100%", justifyContent: "center" }}><h3 style={{color: "green", marginRight: "1em"}}>{response}</h3><CircularProgress style={{ marginRight: "1em" }} /><div>Waiting For Pitch Data</div></div>}
        </>
    );
}

export default NewSessionDashboardComponent;