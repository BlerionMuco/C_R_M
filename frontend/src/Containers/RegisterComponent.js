import React, { useState } from 'react'
import BackGround from '../Components/BackGround'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const RegisterComponent = () => {
    const [dataForm, setDataForm] = useState({ first_name: "", last_name: "", username: "", password: "", verification_password: "", email: "", age: "", phone_number: "" });
    const handleChange = (e) => {
        setDataForm({ ...dataForm, ...{ [e.target.name]: e.target.value } });
    }

    return (
        <div>
            <BackGround>
                <Box sx={{ backgroundColor: "#E0E1DD", maxWidth: "600px", margin: "0 auto", p: "25px", borderRadius: "8px", }}>
                    <Grid container spacing={2}>
                        <Grid sx={{ textAlign: "center" }} item xs={12}>
                            <div style={{ fontSize: "17px", fontWeight: "600" }}>Sign Up</div>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        onChange={handleChange}
                                        name="first_name"
                                        size='small'
                                        required
                                        id="outlined-required"
                                        label="Firstname"
                                        sx={{ width: "100%" }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        onChange={handleChange}
                                        name="last_name"
                                        size='small'
                                        required
                                        id="outlined-required"
                                        label="Lastname"
                                        sx={{ width: "100%" }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        onChange={handleChange}
                                        name="age"
                                        size='small'
                                        required
                                        id="outlined-required"
                                        label="Age"
                                        sx={{ width: "100%" }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        onChange={handleChange}
                                        name="phone_number"
                                        size='small'
                                        required
                                        id="outlined-required"
                                        label="Phone number"
                                        sx={{ width: "100%" }}
                                    />
                                </Grid>
                            </Grid>
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
                                name="email"
                                size='small'
                                required
                                id="outlined-required"
                                label="Email"
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
                            <TextField
                                onChange={handleChange}
                                name="verify_password"
                                sx={{ width: "100%" }}
                                size='small'
                                required
                                id="outlined-password-input"
                                label="Verify Password"
                                type="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button className="btn-grad" sx={{ width: "100%" }} variant="contained">Sign Up</Button>
                        </Grid>
                        <Grid className='signIn-signUp-text' item xs={12}>
                            <Link to="/" className='signIn-signUp-text'>Already have a Account</Link>
                        </Grid>
                    </Grid>
                </Box>
            </BackGround>
        </div>
    )
}

export default RegisterComponent