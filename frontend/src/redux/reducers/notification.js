import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notifications: {
        message: "",
        variant: ""
    }
};

const Nofitications = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        showNotification: (state, action) => {
            state.notifications.message = action.payload.message
            state.notifications.variant = action.payload.variant
        },
        clearNotifications: (state) => {
            state.notifications.message = ""
            state.notifications.variant = ''
        }
    }
})

export const { showNotification, clearNotifications } = Nofitications.actions
export default Nofitications.reducer