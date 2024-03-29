import React, { useState, useCallback } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createAbsence } from "../../../redux/reducers/absence";
import { getUserAbsences } from "../../../redux/reducers/absence";

const CreateAbsenceComponent = () => {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const userId = user.id;
  const allReasons = useSelector((state) => state.staticData.reasons);
  const dispatch = useDispatch();
  const [dataForm, setDataForm] = useState({
    startDate: null,
    endDate: null,
    reasonId: "",
    approve: false,
  });
  const handleChange = (e) => {
    setDataForm({ ...dataForm, reasonId: e.target.value });
  };

  const createAbsenceFunc = () => {
    dispatch(
      createAbsence({ absenceData: { userId: userId, ...dataForm } })
    ).then((data) => {
      if (data.payload.status === "success") {
        setDataForm({
          startDate: null,
          endDate: null,
          reasonId: "",
          approve: false,
        });
        if (userId) {
          dispatch(getUserAbsences(userId));
        }
      }
    });
  };

  return (
    <Box
      sx={{
        border: "1px solid gray",
        width: "100%",
        padding: "16px",
        borderRadius: "8px",
        mt: "10px",
      }}
    >
      <Grid container spacing={2}>
        <Grid sx={{ textAlign: "center" }} xs={12} md={6} item>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ width: "100%" }}
              label="Start Date"
              name="startDate"
              size="meduim"
              inputFormat="DD/MM/YYYY"
              value={dataForm.startDate}
              onChange={(newValue) => {
                let startDataValue = dayjs(newValue);
                setDataForm({
                  ...dataForm,
                  startDate: startDataValue.format("YYYY-MM-DD"),
                });
              }}
              renderInput={(params) => (
                <TextField sx={{ width: "100%" }} {...params} />
              )}
            />
          </LocalizationProvider>
        </Grid>

        <Grid sx={{ textAlign: "center" }} xs={12} md={6} item>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ width: "100%" }}
              inputFormat="DD/MM/YYYY"
              label="End Date"
              name="endDate"
              size="small"
              value={dataForm.endDate}
              onChange={(newValue) => {
                let endDataValue = dayjs(newValue);
                setDataForm({
                  ...dataForm,
                  endDate: endDataValue.format("YYYY-MM-DD"),
                });
              }}
              renderInput={(params) => (
                <TextField sx={{ width: "100%" }} {...params} />
              )}
            />
          </LocalizationProvider>
        </Grid>

        {allReasons && allReasons.length > 0 && (
          <FormControl sx={{ mt: 2, ml: "16px" }} size="small" fullWidth>
            <InputLabel id="demo-simple-select-label">Reason</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="reason"
              value={dataForm.reasonId}
              label="Reason"
              onChange={handleChange}
            >
              {allReasons &&
                allReasons.map((reason, index) => {
                  return (
                    <MenuItem key={index} value={reason.id}>
                      {reason.reason}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        )}
        <Grid container mt={1}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              buttontype="loading"
              variant="contained"
              color="success"
              onClick={createAbsenceFunc}
              sx={{
                "&.MuiButtonBase-root": {
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
  );
};

export default CreateAbsenceComponent;
