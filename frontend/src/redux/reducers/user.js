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

export const getAllRoles = createAsyncThunk(
    'GET_ALL_ROLES_REQUEST',
    async () => {
        console.log("here");
        const { data } = await axios.get(process.env.REACT_APP_BACKEND_URL + "/api/roles");
        if (!data) return
        return data;
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
    },
});

export default UserSlice.reducer;