import React from 'react'
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';

const WorkComponent = () => {
  return (
    <div>
      <Grid container sx={{ textAlign: "center" }} spacing={2}>
        <Grid item xs={12} md={4} lg={4}> <Button sx={{ background: "red",  width: "150px",  height: "150px" }}>Clock In</Button></Grid>
        <Grid item xs={12} md={4} lg={4}> <Button sx={{ background: "blue",  width: "150px",  height: "150px" }}>Break In && Break Out</Button></Grid>
        <Grid item xs={12} md={4} lg={4}> <Button sx={{ background: "yellow",  width: "150px", height: "150px" }}>Clock Out</Button></Grid>
      </Grid>
    </div>

  )
}

export default WorkComponent