import { showNotification } from "../reducers/notification";
let enter = false;

const AuthMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    const { type } = action;

    const action_type = type.split("/")[0];
    const request_status = type.split("/")[1];

    switch (request_status) {
      case "rejected":
        let status = 200;

        if (action && action.error && action.error.message) {
          if (action.error.message.inculdes(401)) status = 401;
          if (action.error.message.inculdes(500)) status = 500;
          if (action.error.message.inculdes(419)) status = 419;
        }
        if (
          !["/"].includes(window.location.pathname) &&
          [401, 419].includes(status) &&
          !enter
        ) {
          enter = true;
          dispatch(
            showNotification({ message: "Hello World", variant: "warning" })
          );
          setTimeout(function () {
            window.location.href =
              window.location.protocol + "//" + window.location.host + "/";
          }, 800);
        }
        break;
      default:
        break;
    }
    next(action);
  };

export default AuthMiddleware;
