import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reducers/user"
import AuthSlice from "./reducers/auth"
import StaticData from "./reducers/staticData";
import AbsenceSlice from "./reducers/absence"
import AuthMiddleware from "./middleware/Authenticate";
import notifications from "./reducers/notification";
import NotificationsMiddleware from "./middleware/Notifications";

const composeEnhancers = {
    features: {
        pause: true,
        lock: true,
        persist: false,
        export: false,
        import: "custom",
        jump: false,
        skip: false,
        reorder: true,
        dispatch: true,
        test: false,
    },
}

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(NotificationsMiddleware).concat(AuthMiddleware),
    reducer: {
        notification: notifications,
        user: UserSlice,
        auth: AuthSlice,
        staticData: StaticData,
        absence: AbsenceSlice
    },
    devTools: composeEnhancers,
});