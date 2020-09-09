import React from 'react';
import { Button, TextField } from '@material-ui/core';
import './Style.css';

export default function Login(){
    return (
        <div className="form">
            <h1>Login</h1>
            <form className="login-fields">
                <TextField fullWidth placeholder="yourname@email.com" label="Email" variant="outlined" />
                <br/>
                <TextField fullWidth placeholder="P@$$w0rd" label="Password" variant="outlined" />
                <br/>
                <Button color="primary" variant="contained">Login</Button>
            </form>
        </div>
    )
};