import React from "react";

import absenceColumns from "../../../Contains/Table/AbsenceTable";
import Table from "../../../Components/Table";

const MyAbsencesComponent = ({ absenceList }) => {
  let columns = absenceColumns;
  const userLoggedIn = JSON.parse(localStorage.getItem("loggedUser"));
  if (userLoggedIn.role_id !== 1) {
    columns = columns.filter((columns) => columns.field !== "Actions");
  }
  return (
    <div style={{ width: "100%", marginTop: "30px" }}>
      {absenceList && (
        <Table
          rows={absenceList}
          columns={columns}
          boxHeight="fit-content"
          tableHeight="314px"
          pageSize={4}
        />
      )}
    </div>
  );
};

export default MyAbsencesComponent;
