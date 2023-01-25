import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loggedUser: {},
    data: {},
    loading: false,
    message: "",
};

export const authUserAsync = createAsyncThunk(
    'LOGIN_USER_REQUEST',
    async ({ dataForm }) => {
        const { data } = await axios.post(process.env.REACT_APP_BACKEND_URL + "/api/signIn", dataForm);
        if (!data) return
        localStorage.setItem('token', data.token)
        return data
    }
)

const AuthSlice = createSlice({
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
            state.loading = false;
            state.loggedUser = action.payload.user
            localStorage.setItem('loggedUser', JSON.stringify(action.payload.user))
        });
    },
});

export default AuthSlice.reducer;