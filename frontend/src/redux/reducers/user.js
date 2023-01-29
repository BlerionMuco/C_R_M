import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    singleUser: {},
    users: {},
    data: {},
    roles: {},
    deleteUserModal: false,
    editUserModal: false,
    userId: 0,
    loading: false,
    message: "",
};

export const getAllUsersAsync = createAsyncThunk(
    'GET_USERS_REQUEST',
    async () => {
        const { data } = await axios.get(process.env.REACT_APP_BACKEND_URL + "/api/users");
        if (!data) return
        return data
    }
)

export const getUserByIdAsync = createAsyncThunk(
    'GET_SINGLE_USER_REQUEST',
    async (userId) => {
        const { data } = await axios.get(process.env.REACT_APP_BACKEND_URL + `/api/users/${userId}`);
        if (!data) return
        return data
    }
)



export const createUserAsync = createAsyncThunk(
    'POST_USER_REQUEST',
    async ({ dataForm, callThunk }) => {
        const { data } = await axios.post(process.env.REACT_APP_BACKEND_URL + "/api/users", dataForm);
        if (!data) return
        if (callThunk()) {
            callThunk();
        }
        return data
    }
)

export const updateUserPassword = createAsyncThunk(
    'UPDATE_USER_PASSWORD_REQUEST',
    async ({ userId, user_password }) => {
        const { data } = await axios.put(process.env.REACT_APP_BACKEND_URL + `/api/users/${userId}/updatePassword`, { user_password: user_password });
        if (!data) return
        return data
    }
)

export const updateUser = createAsyncThunk(
    'UPDATE_USER_REQUEST',
    async ({ userId, userData }) => {
        const { data } = await axios.put(process.env.REACT_APP_BACKEND_URL + `/api/users/${userId}`, userData);
        if (!data) return
        return data
    }
)

export const deleteUserAsync = createAsyncThunk(
    'DELETE_USER_REQUEST',
    async (userId) => {
        const { data } = await axios.delete(process.env.REACT_APP_BACKEND_URL + `/api/users/${userId}`);
        if (!data) return
        return data
    }
)



const UserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        openUserModal: (state, action) => {
            state.deleteUserModal = action.payload.deleteUserModal
            state.editUserModal = action.payload.editUserModal
            state.userId = action.payload.userId

        }
    },
    extraReducers: (builder) => {

        builder.addCase(getAllUsersAsync.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getAllUsersAsync.rejected, (state, action) => {
            state.loading = false;
            state.message = "Oops something goes wrong... :("
        });
        builder.addCase(getAllUsersAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload
        });

        builder.addCase(getUserByIdAsync.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getUserByIdAsync.rejected, (state, action) => {
            state.loading = false;
            state.message = "Oops something goes wrong... :("
        });
        builder.addCase(getUserByIdAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.singleUser = action.payload
        });

        builder.addCase(updateUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.message = "Oops something goes wrong... :("
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message
        });

        builder.addCase(createUserAsync.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createUserAsync.rejected, (state, action) => {
            state.loading = false;
            state.message = "Oops something goes wrong... :("
        });
        builder.addCase(createUserAsync.fulfilled, (state, action) => {
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

        builder.addCase(deleteUserAsync.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deleteUserAsync.rejected, (state, action) => {
            state.loading = false;
            state.message = "Oops something goes wrong... :("
        });
        builder.addCase(deleteUserAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message
        });
    },
});
export const { openUserModal } = UserSlice.actions
export default UserSlice.reducer;