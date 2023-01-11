import React from 'react'
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const WorkComponent = ({open}) => {
  return (
    <div style={{height:"calc(100vh - 130px)"}}>
      <Grid container sx={open ? { textAlign: "center", position: "absolute", margin: "0 auto", top: "30%", width: "calc(100% - 264px)" } : { textAlign: "center", position: "absolute", margin: "0 auto", top: "30%", width: "calc(100 % - 24px)" }} spacing={2}>
        <Grid item xs={12} > <Button startIcon={<LoginIcon />} sx={{ background: "#475498", width: "350px", height: "80px", color: "white", ':hover': {color: 'black'}}}>Clock In</Button></Grid>
        <Grid item xs={12} > <Button startIcon={<FreeBreakfastIcon />} sx={{ background: "#222222", width: "350px", height: "80px", color: "white", ':hover': { color: 'black' } }}>Break In && Break Out</Button></Grid>
        <Grid item xs={12} > <Button startIcon={<LogoutIcon />} sx={{ background: "#A51A1A", width: "350px", height: "80px", color: "white", ':hover': { color: 'black' } }}>Clock Out</Button></Grid>
      </Grid>
    </div>
  )
}

export default WorkComponent