import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    data: {},
    loading: false,
    message: "",
};

export const createUserAsync = createAsyncThunk(
    'POST_USER_REQUEST',
    async (userData) => {
        console.log(process.env.REACT_APP_BACKEND_URL);
        const res = await axios.post(process.env.REACT_APP_BACKEND_URL, { ...userData });
        // Set the response to the state.
        return res.data
    }
)

const UserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createUserAsync.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createUserAsync.rejected, (state, action) => {
            state.loading = false;
            state.message = "Oops something goes wrong... :("
        });
        builder.addCase(createUserAsync.fulfilled, (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.data = action.payload.data
        });
    },
});

export default UserSlice.reducer;