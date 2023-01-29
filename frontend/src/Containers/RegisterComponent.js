import React, { useState } from 'react'
import BackGround from '../Components/BackGround'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUserAsync } from '../redux/reducers/user';
import { useNavigate } from 'react-router-dom';
import NewUserComponent from '../Components/User/NewUserComponent';

const RegisterComponent = () => {
    const dispatch = useDispatch();
    const [dataForm, setDataForm] = useState({ first_name: "", last_name: "", username: "", user_password: "", user_verification_password: "", email: "", age: "", phone_number: "", role_id: 3 });
    const navigate = useNavigate();

    const createUser = () => {
        dispatch(createUserAsync({
            dataForm, callThunk: () => {
                navigate("/")
            }
        }))
    }

    return (
        <div>
            <BackGround>
                <Box sx={{ backgroundColor: "white", maxWidth: "600px", margin: "0 auto", p: "25px", borderRadius: "8px", }}>
                    <div><NewUserComponent dataForm={dataForm} setDataForm={setDataForm} /></div>
                    <Grid sx={{ mt: 1 }} container spacing={2}>
                        <Grid item xs={12}>
                            <Button onClick={createUser} className="btn-grad" sx={{ width: "100%" }} variant="contained">Sign Up</Button>
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