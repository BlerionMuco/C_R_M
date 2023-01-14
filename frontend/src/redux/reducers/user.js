import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    data: {},
    roles: {},
    loading: false,
    message: "",
};

export const createUserAsync = createAsyncThunk(
    'POST_USER_REQUEST',
    async ({ dataForm, callThunk }) => {
        const { data } = await axios.post(process.env.REACT_APP_BACKEND_URL + "/api/users", dataForm);
        if (!data) return
        callThunk();
        return data
    }
)

export const updateUserPassword = createAsyncThunk(
    'UPDATE_USER_PASSWORD_REQUEST',
    async ({ userId, user_password }) => {
        console.log(userId, user_password);
        const { data } = await axios.put(process.env.REACT_APP_BACKEND_URL + `/api/users/${userId}/updatePassword`, { user_password: user_password });
        if (!data) return
        return data
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

        builder.addCase(updateUserPassword.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(updateUserPassword.rejected, (state, action) => {
            state.loading = false;
            state.message = "Oops something goes wrong... :("
        });
        builder.addCase(updateUserPassword.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message
        });
    },
});

export default UserSlice.reducer;