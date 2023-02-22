import React from "react";
import { GridActionsCellItem } from "@mui/x-data-grid";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import DoDisturbAltRoundedIcon from "@mui/icons-material/DoDisturbAltRounded";
import { useDispatch } from "react-redux";
import { updateAbsenceStatus } from "../../redux/reducers/absence";
import { getAllAbsences, getUserAbsences } from "../../redux/reducers/absence";

const AbsencesActions = ({ id }) => {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const dispatch = useDispatch();
  const absenceApproved = () => {
    dispatch(updateAbsenceStatus({ id: id, status: 1 })).then((data) => {
      if (data.payload.status === "success") {
        if (user.role_id === 1) {
          dispatch(getAllAbsences());
        } else {
          dispatch(getUserAbsences(user.id));
        }
      }
    });
  };

  const absenceDenied = () => {
    dispatch(updateAbsenceStatus({ id: id, status: 0 })).then((data) => {
      if (data.payload.status === "success") {
        if (user.role_id === 1) {
          dispatch(getAllAbsences());
        } else {
          dispatch(getUserAbsences(user.id));
        }
      }
    });
  };

  return (
    <div>
      <GridActionsCellItem
        sx={{ display: "flex", justifyContent: "center" }}
        label="Approve"
        showInMenu
        icon={<DoneRoundedIcon sx={{ color: "green" }} />}
        onClick={absenceApproved}
      />
      <GridActionsCellItem
        sx={{ display: "flex", justifyContent: "center" }}
        label="Deny"
        showInMenu
        icon={<DoDisturbAltRoundedIcon sx={{ color: "red" }} />}
        onClick={absenceDenied}
      />
    </div>
  );
};

export default AbsencesActions;
