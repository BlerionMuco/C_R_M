import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reducers/user"

export const store = configureStore({
    reducer: {
        user: UserSlice,
    },
});