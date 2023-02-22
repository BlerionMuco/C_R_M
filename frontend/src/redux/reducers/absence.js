import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allAbsences: {},
  absencesList: {},
  loading: false,
  message: "",
};

export const getAllAbsences = createAsyncThunk(
  "GET_ALL_ABSENCE_REQUEST",
  async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "/api/absences"
    );
    if (!data) return;
    return data;
  }
);

export const createAbsence = createAsyncThunk(
  "POST_ABSENCE_REQUEST",
  async ({ absenceData }) => {
    const { data } = await axios.post(
      process.env.REACT_APP_BACKEND_URL + "/api/absences",
      absenceData
    );
    if (!data) return;
    return data;
  }
);

export const updateAbsenceStatus = createAsyncThunk(
  "PUT_ABSENCE_REQUEST",
  async (absenceData) => {
    const { data } = await axios.put(
      process.env.REACT_APP_BACKEND_URL + "/api/absences",
      absenceData
    );
    if (!data) return;
    return data;
  }
);

export const getUserAbsences = createAsyncThunk(
  "GET_USER_ABSENCES_REQUEST",
  async (userId) => {
    const { data } = await axios.get(
      process.env.REACT_APP_BACKEND_URL + `/api/absences/${parseInt(userId)}`
    );
    if (!data) return;
    return data;
  }
);

const AbsenceSlice = createSlice({
  name: "absence",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllAbsences.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllAbsences.rejected, (state, action) => {
      state.loading = false;
      state.message = "Oops something goes wrong... :(";
    });
    builder.addCase(getAllAbsences.fulfilled, (state, action) => {
      state.loading = false;
      state.allAbsences = action.payload;
    });

    builder.addCase(createAbsence.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createAbsence.rejected, (state, action) => {
      state.loading = false;
      state.message = "Oops something goes wrong... :(";
    });
    builder.addCase(createAbsence.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });

    builder.addCase(updateAbsenceStatus.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateAbsenceStatus.rejected, (state, action) => {
      state.loading = false;
      state.message = "Oops something goes wrong... :(";
    });
    builder.addCase(updateAbsenceStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });

    builder.addCase(getUserAbsences.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUserAbsences.rejected, (state, action) => {
      state.loading = false;
      state.message = "Oops something goes wrong... :(";
    });
    builder.addCase(getUserAbsences.fulfilled, (state, action) => {
      state.loading = false;
      state.absencesList = action.payload;
    });
  },
});

export default AbsenceSlice.reducer;
