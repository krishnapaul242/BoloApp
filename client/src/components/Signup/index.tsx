import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import './Style.css';

export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function userSignUp() {
        const result = await fetch('http://localhost:1221/api/signup', {
            method: 'POST',
            body: JSON.stringify({
                email, password
            })
        }).then((t) => t.json())

        console.log(result)
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
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <TextField 
                    fullWidth 
                    placeholder="P@$$w0rd" 
                    label="Password" 
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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