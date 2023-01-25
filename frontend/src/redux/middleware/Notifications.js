import { showNotification } from '../reducers/notification';

const NotificationsMiddleware = ({ dispatch, getState }) => next => action => {
    const { type } = action;
    const thunckStatus = type.split('/')[1];
    const actionRequest = type.split('_')[0];

    let actionFullfilledKeys = ['LOGIN', "LOGOUT", " CREATE", "DELETE", "UPDATE", "POST", " ADD", "PUT", "AUTH"]
    let ignoreActionRejectedKey = ["GET"]

    switch (thunckStatus) {
        case 'fulfilled':
            if (actionFullfilledKeys.includes(actionRequest)) {
                const statusRequest = action.payload.status
                const messageRequest = action.payload.message
                let variant = "";
                if (statusRequest === "success") variant = 'success'
                if (statusRequest === "rejected") variant = 'error'
                dispatch(showNotification({ message: messageRequest, variant: variant }))
            }
            break;

        case 'rejected': {
            if (!ignoreActionRejectedKey.includes(actionRequest)) {
                dispatch(showNotification({ message: "Error", variant: "error" }))
            }
            break;
        }

        default: break;

    }
    next(action)
}

export default NotificationsMiddleware