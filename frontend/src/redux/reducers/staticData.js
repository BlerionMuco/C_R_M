import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    roles: {},
    reasons: {},
    loading: false,
    message: "",
};

export const getAllRoles = createAsyncThunk(
    'GET_ALL_ROLES_REQUEST',
    async () => {
        const { data } = await axios.get(process.env.REACT_APP_BACKEND_URL + "/api/roles");
        if (!data) return
        return data;
    }
)

export const getAllReasons = createAsyncThunk(
    'GET_ALL_REASONS_REQUEST',
    async () => {
        const { data } = await axios.get(process.env.REACT_APP_BACKEND_URL + "/api/reasons");
        if (!data) return
        return data;
    }
)

const StaticData = createSlice({
    name: "staticData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllRoles.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getAllRoles.rejected, (state, action) => {
            state.loading = false;
            state.message = "Oops something goes wrong... :("
        });
        builder.addCase(getAllRoles.fulfilled, (state, action) => {
            state.loading = false;
            state.roles = action.payload
        });

        builder.addCase(getAllReasons.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getAllReasons.rejected, (state, action) => {
            state.loading = false;
            state.message = "Oops something goes wrong... :("
        });
        builder.addCase(getAllReasons.fulfilled, (state, action) => {
            state.loading = false;
            state.reasons = action.payload
        });
    },
});

export default StaticData.reducer;