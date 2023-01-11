import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reducers/user"
import AuthSlice from "./reducers/auth"

export const store = configureStore({
    reducer: {
        user: UserSlice,
        auth: AuthSlice,
    },
});