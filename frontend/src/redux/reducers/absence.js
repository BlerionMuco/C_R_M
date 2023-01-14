import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    absencesList: {},
    loading: false,
    message: "",
};


export const createAbsence = createAsyncThunk(
    'POST_ABSENCE_REQUEST',
    async ({ absenceData }) => {
        const { data } = await axios.post(process.env.REACT_APP_BACKEND_URL + "/api/absences", absenceData);
        if (!data) return
        return data
    }
)

export const getUserAbsences = createAsyncThunk(
    'GET_USER_ABSENCES_REQUEST',
    async (userId) => {
        const { data } = await axios.get(process.env.REACT_APP_BACKEND_URL + `/api/absences/${parseInt(userId)}`);
        if (!data) return
        return data;
    }
)

const AbsenceSlice = createSlice({
    name: "absence",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createAbsence.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createAbsence.rejected, (state, action) => {
            state.loading = false;
            state.message = "Oops something goes wrong... :("
        });
        builder.addCase(createAbsence.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message
        });

        builder.addCase(getUserAbsences.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getUserAbsences.rejected, (state, action) => {
            state.loading = false;
            state.message = "Oops something goes wrong... :("
        });
        builder.addCase(getUserAbsences.fulfilled, (state, action) => {
            state.loading = false;
            state.absencesList = action.payload
        });
    },
});

export default AbsenceSlice.reducer;