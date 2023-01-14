import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reducers/user"
import AuthSlice from "./reducers/auth"
import StaticData from "./reducers/staticData";
import AbsenceSlice from "./reducers/absence"

export const store = configureStore({
    reducer: {
        user: UserSlice,
        auth: AuthSlice,
        staticData: StaticData,
        absence: AbsenceSlice
    },
});