import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllReasons } from '../../../redux/reducers/staticData';

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

const CalendarComponent = () => {
  const [dataForm, setDataForm] = useState({ startData: null, endDate: null, reason: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReasons());
  }, [dispatch]);
  const allReasons = useSelector(state => state.staticData.reasons)

  const handleChange = (e) => {
    setDataForm({ ...dataForm, reason: e.target.value })
  }

  console.log({ dataForm });

  return (
    <div>
      <Box>
        {/* <div className="container">
          <p className="typed">Take a day off, belive me you need this !</p>
        </div> */}
        <Grid sx={{ width: "90%", m: "0 auto" }} container spacing={2}>
          <Grid sx={{ textAlign: "center" }} xs={12} md={6} item>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ width: "100%" }}
                label="Start Date"
                size="meduim"
                inputFormat='DD/MM/YYYY'
                value={dataForm.startData}
                onChange={(newValue) => {
                  let startDataValue = dayjs(newValue)
                  setDataForm({ ...dataForm, startData: startDataValue.format("YYYY-MM-DD") });
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
              <InputLabel disabled id="demo-simple-select-label">Reason</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name='reason'
                value={dataForm.reason}
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
        </Grid>
      </Box>
    </div>
  )
}

export default CalendarComponent