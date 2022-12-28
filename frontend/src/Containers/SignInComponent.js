import React, { useState } from 'react'
import BackGround from '../Components/BackGround'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import "./style/SignIn.css"

const SignInComponent = () => {
    //const [dataForm, setDataForm] = useState({ username: "", password: "" });
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleChange = (event) => {
        if (event.target.name === "username") {
            setUsername(event.target.value)
        }
        else {
            setPassword(event.target.value)
        }
    }

    return (
        <div>
            <BackGround>
                <Box sx={{ backgroundColor: "#E0E1DD", maxWidth: "300px", margin: "0 auto", p: "25px", borderRadius: "10px", }}>
                    <Grid container spacing={2}>
                        <Grid sx={{ textAlign: "center" }} item xs={12}>
                            <div style={{ fontSize: "17px", fontWeight: "600" }}>Log In</div>
                            <div style={{ fontSize: "15px", fontWeight: "400" }}>Enter your credentials</div>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={handleChange}
                                name="username"
                                size='small'
                                required
                                id="outlined-required"
                                label="Username"
                                sx={{ width: "100%" }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={handleChange}
                                name="password"
                                sx={{ width: "100%" }}
                                size='small'
                                required
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button className="btn-grad" sx={{ width: "100%" }} variant="contained">Log In</Button>
                        </Grid>
                        <Grid className='signIn-signUp-text' item xs={12}>
                            Sign Up
                        </Grid>
                        <Grid item className='signIn-signUp-text' xs={12}>
                            Forget my password
                        </Grid>
                    </Grid>
                </Box>
            </BackGround>
        </div>
    )
}

export default SignInComponent