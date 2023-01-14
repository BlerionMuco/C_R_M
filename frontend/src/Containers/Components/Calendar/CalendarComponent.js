import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllReasons } from '../../../redux/reducers/staticData';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import dayjs from 'dayjs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createAbsence } from '../../../redux/reducers/absence';
import { getUserAbsences } from '../../../redux/reducers/absence';
import MyAbsencesComponent from './MyAbsencesComponent';

const CalendarComponent = () => {
  const [dataForm, setDataForm] = useState({ startDate: null, endDate: null, reasonId: '', approve: false });
  const user = JSON.parse(localStorage.getItem('loggedUser'))
  const userId = user.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReasons());
    if (userId) {
      dispatch(getUserAbsences(userId))
    }
  }, [dispatch, userId]);

  const allReasons = useSelector(state => state.staticData.reasons)
  const absenceList = useSelector(state => state.absence.absencesList)

  const handleChange = (e) => {
    setDataForm({ ...dataForm, reasonId: e.target.value })
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

  const createAbsenceFunc = () => {
    dispatch(createAbsence({ absenceData: { userId: userId, ...dataForm } })).then((data) => {
      if (data.payload.status === "fullfilled") {
        setDataForm({ startDate: null, endDate: null, reasonId: '', approve: false })
        showMessage({ color: "green", message: "Absence Created!" })
        if (userId) {
          dispatch(getUserAbsences(userId))
        }
      } else {
        showMessage({ color: "red", message: "Error!" })
      }
    })
  }

  return (
    <div>
      <Box>
        <Grid sx={{ width: "90%", m: "0 auto" }} container spacing={2}>
          <div style={{ width: "100%" }}>
            <div className="container">
              <p className="typed">Manage your days here.</p>
            </div>
          </div>
          <Box sx={{ border: "1px solid gray", width: "100%", padding: "16px", borderRadius: "8px", mt: "10px" }}>
            <Grid container spacing={2}>
              <Grid sx={{ textAlign: "center" }} xs={12} md={6} item>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{ width: "100%" }}
                    label="Start Date"
                    size="meduim"
                    inputFormat='DD/MM/YYYY'
                    value={dataForm.startDate}
                    onChange={(newValue) => {
                      let startDataValue = dayjs(newValue)
                      setDataForm({ ...dataForm, startDate: startDataValue.format("YYYY-MM-DD") });
                    }}
                    renderInput={(params) => <TextField sx={{ width: "100%" }} {...params} />}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid sx={{ textAlign: "center" }} xs={12} md={6} item>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{ width: "100%" }}
                    inputFormat='DD/MM/YYYY'
                    label="End Date"
                    size="small"
                    value={dataForm.endDate}
                    onChange={(newValue) => {
                      let endDateValue = dayjs(newValue)
                      setDataForm({ ...dataForm, endDate: endDateValue.format("YYYY-MM-DD") });
                    }}
                    renderInput={(params) => <TextField sx={{ width: "100%" }} {...params} />}
                  />
                </LocalizationProvider>
              </Grid>

              {allReasons.length > 0 &&
                <FormControl sx={{ mt: 2, ml: "16px" }} size="small" fullWidth>
                  <InputLabel id="demo-simple-select-label">Reason</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name='reason'
                    value={dataForm.reasonId}
                    label="Reason"
                    onChange={handleChange}
                  >
                    {allReasons && allReasons.map((reason, index) => {
                      return (
                        <MenuItem key={index} value={reason.id}>{reason.reason}</MenuItem>
                      )
                    })

                    }
                  </Select>
                </FormControl>
              }
              <Grid container mt={1}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', }}>
                  <div id="showMessage" style={{ fontSize: "17px", fontFamily: "monospace", marginLeft: "18px", marginTop: "5px" }}></div>
                  <Button
                    buttontype="loading"
                    variant="contained"
                    color="success"
                    onClick={createAbsenceFunc}
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
          {absenceList.length > 0 && <MyAbsencesComponent absenceList={absenceList} />}
        </Grid>
      </Box>
    </div>
  )
}

export default CalendarComponent