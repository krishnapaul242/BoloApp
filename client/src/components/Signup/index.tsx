import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import './Style.css';
import {apiCall} from '../../utility';

export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function userSignUp() {
        const payload = {email, password};
        const result = await apiCall('/api/signup',payload)

        console.log(result)

        if(result.status === 'ok'){
            alert("Your signup is successful.");
        } else alert(result.error);
    }

    return (
        <div className="form">
            <h1>Sign Up</h1>
            <form className="signup-fields">
                <TextField 
                    fullWidth 
                    placeholder="yourname@email.com" 
                    label="Email" 
                    variant="outlined"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)}
                    />
                <TextField 
                    fullWidth 
                    placeholder="P@$$w0rd" 
                    label="Password" 
                    variant="outlined"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value)}
                    />
                <Button 
                    color="primary" 
                    variant="contained"
                    onClick={userSignUp}    
                >Sign Up</Button>
            </form>
        </div>
    )
};