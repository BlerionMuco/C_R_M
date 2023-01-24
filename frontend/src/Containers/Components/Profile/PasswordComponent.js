import React, { useState } from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { updateUserPassword } from '../../../redux/reducers/user';
import { useDispatch } from 'react-redux';

const PasswordComponent = ({ userData }) => {
    const [password, setPassword] = useState({ current_password: '', new_password: '', confirm_password: '' });
    const dispatch = useDispatch()

    const onChange = (event) => {
        if (event.target.name) {
            setPassword({ ...password, [event.target.name]: event.target.value })
        }
    }

    const showMessage = ({ message, color }) => {
        setTimeout(function () {
            document.getElementById("showMessage").style.color = color;
            document.getElementById("showMessage").innerHTML = message;
        }, 200);
        setTimeout(function () {
            document.getElementById("showMessage").innerHTML = '';
        }, 3000);
    }

    const handleSubmit = () => {
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
        const userId = loggedUser.id
        if (userId && password.new_password && password.current_password && password.confirm_password) {
            if (password.new_password === password.confirm_password) {
                dispatch(updateUserPassword({ userId: userId, user_password: password.new_password })).then((data) => {
                    if (data.payload.status === "fullfilled") {
                        setPassword({ current_password: '', new_password: '', confirm_password: '' })
                        showMessage({ color: "green", message: "Password Updated!" })
                    } else {
                        showMessage({ color: "red", message: "Error!" })
                    }
                })
            }
            else {
                showMessage({ color: "red", message: "New password dosent match with confirm password!" })
            }
        } else {
            showMessage({ color: "red", message: "Some of the fields are empty!" })
        }

    }
    return (
        <div>
            <Box sx={{ flexGrow: 2, width: "70%", margin: '0 auto', }}>
                <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "baseline" }} spacing={2}>
                    <Grid item xs={12} md={12}>
                        <TextField
                            required
                            fullWidth
                            size='small'
                            type="password"
                            id="current_password"
                            label="Current Password"
                            name="current_password"
                            value={password.current_password}
                            onChange={onChange}
                        //error={errorsList.nameError}
                        // helperText={errorsList.nameError}
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField
                            required
                            fullWidth
                            size='small'
                            width='100%'
                            type="password"
                            id="new_password"
                            label="New Password"
                            name="new_password"
                            value={password.new_password}
                            onChange={onChange}
                        //error={errorsList.surnameError}
                        //helperText={errorsList.surnameError}
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField
                            type="password"
                            size='small'
                            required
                            fullWidth
                            id="confirm_password"
                            label="Confirm Password"
                            name="confirm_password"
                            value={password.confirm_password}
                            onChange={onChange}
                        />
                    </Grid>

                    <Grid container mt={1}>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', }}>
                            <div id="showMessage" style={{ fontSize: "13px", fontFamily: "monospace", marginLeft: "18px", marginTop: "5px" }}></div>
                            <Button
                                buttontype="loading"
                                //loading={loading}
                                variant="contained"
                                color="success"
                                onClick={handleSubmit}
                                sx={{

                                    '&.MuiButtonBase-root': {
                                        textTransform: "none",
                                        width: "100px",
                                    },
                                }}
                                size="medium"
                            >
                                Save
                            </Button>

                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default PasswordComponent