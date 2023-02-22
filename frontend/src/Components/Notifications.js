import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { clearNotifications } from "../redux/reducers/notification";

const Notifications = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const snackbarData = useSelector((state) => state.notification.notifications);
  const message = snackbarData.message;
  const variant = snackbarData.variant;

  useEffect(() => {
    if (message) {
      enqueueSnackbar(message, { variant });
      dispatch(clearNotifications());
    }
  }, [message, variant, dispatch, enqueueSnackbar]);
};

export default Notifications;
