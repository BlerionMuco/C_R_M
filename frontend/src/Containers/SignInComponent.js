import React, { useState } from 'react'
import BackGround from '../Components/BackGround'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import "./style/SignIn.css"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authUserAsync } from '../redux/reducers/auth';
import { useNavigate } from "react-router-dom";


const SignInComponent = () => {
    const [dataForm, setDataForm] = useState({ username: "", user_password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setDataForm({ ...dataForm, ...{ [e.target.name]: e.target.value } });
    }

    const signInUser = () => {
        dispatch(authUserAsync({ dataForm })).then((res) => {
            if (res.payload.token) {
                navigate('/dashboard')
            }
        })
    }

    return (
        <div>
            <BackGround>
                <Box sx={{ backgroundColor: "#E0E1DD", maxWidth: "300px", margin: "0 auto", p: "25px", borderRadius: "8px", }}>
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
                                name="user_password"
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
                            <Button className="btn-grad" sx={{ width: "100%" }} onClick={signInUser} variant="contained">Log In</Button>
                        </Grid>

                        <Grid className='signIn-signUp-text' item xs={12}>
                            <Link className='signIn-signUp-text' to="/register" >
                                Sign Up
                            </Link>
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