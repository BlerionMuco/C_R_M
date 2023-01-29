import React, { useState } from 'react'
import { Button, Grid } from '@mui/material';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ModalComponent from '../../../Components/ModalComponent';

const WorkComponent = ({ open }) => {
  const [clockIn, setClockIn] = useState(false);
  const [takeBreak, setTakeBreak] = useState({ text: "Start the Break ", value: false });
  const [modalData, setModalData] = useState({ modalTitle: '', modalContextText: '', context: '', dataFunc: {}, func: null, });
  const [openModal, setOpenModal] = useState(false);

  const clockInFunc = () => {
    setModalData({ modalTitle: 'Start work', modalContextText: 'Are you sure to start working ?', context: "clockIn", dataFunc: clockIn, func: setClockIn })
    setOpenModal(true)
  }

  const takeBreakFunc = () => {
    if (!takeBreak.value) {
      setModalData({ modalTitle: 'Start Break', modalContextText: 'Are you sure to take the break ?', context: "startBreak", dataFunc: takeBreak, func: setTakeBreak })
      setOpenModal(true)
    }
    else {
      setModalData({ modalTitle: 'Finish Break', modalContextText: 'Are you sure to finish the break ?', context: "finishBreak", dataFunc: takeBreak, func: setTakeBreak })
      setOpenModal(true)
    }
  }

  const clockOutFunc = () => {
    setModalData({ modalTitle: 'End Work', modalContextText: 'Are you sure to finish the day ?', context: "clockOut", dataFunc: clockIn, func: setClockIn })
    setOpenModal(true)
  }

  return (
    <div style={{ height: "calc(100vh - 130px)" }}>
      <Grid container sx={open ? { textAlign: "center", position: "absolute", margin: "0 auto", top: "30%", width: "calc(100% - 264px)" } : { textAlign: "center", position: "absolute", margin: "0 auto", top: "30%", width: "calc(100% - 70px)" }} spacing={2}>
        <Grid item xs={12} >
          <Button disabled={clockIn ? true : false} onClick={clockInFunc} startIcon={<LoginIcon />} sx={{ borderRadius: "8px", background: "#475498", width: "350px", height: "80px", color: "white", ':hover': { borderRadius: "10px", background: "#475498", width: "365px", height: "95px", transition: "0.3s" } }}>
            Clock In
          </Button>
        </Grid>

        <Grid item xs={12} >
          <Button onClick={takeBreakFunc} disabled={!clockIn ? true : false} startIcon={<FreeBreakfastIcon />} sx={{ borderRadius: "8px", background: "#6d6f76", width: "350px", height: "80px", color: "white", ':hover': { borderRadius: "10px", background: "#6d6f76", width: "365px", height: "95px", transition: "0.3s" } }}>
            {takeBreak.text}
          </Button>
        </Grid>

        <Grid item xs={12} >
          <Button onClick={clockOutFunc} disabled={!clockIn ? true : false} startIcon={<LogoutIcon />} sx={{ borderRadius: "8px", background: "#A51A1A", width: "350px", height: "80px", color: "white", ':hover': { borderRadius: "10px", background: "#A51A1A", width: "365px", height: "95px", transition: "0.3s" } }}>
            Clock Out
          </Button>
        </Grid>
      </Grid>
      <ModalComponent modalData={modalData} setOpenModal={setOpenModal} openModal={openModal} />
    </div>
  )
}

export default WorkComponent