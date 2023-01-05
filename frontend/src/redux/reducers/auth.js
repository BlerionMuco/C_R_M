import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    data: {},
    loading: false,
    message: "",
};

export const authUserAsync = createAsyncThunk(
    'AUTH_USER_REQUEST',
    async ({ dataForm }) => {
        const { data } = await axios.post(process.env.REACT_APP_BACKEND_URL + "/api/signIn", dataForm);
        if (!data) return
        localStorage.setItem('token', data.token)
        return data
    }
)

const UserSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authUserAsync.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(authUserAsync.rejected, (state, action) => {
            state.loading = false;
            state.message = "Oops something goes wrong... :("
        });
        builder.addCase(authUserAsync.fulfilled, (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.data = action.payload.data
        });
    },
});

export default UserSlice.reducer;