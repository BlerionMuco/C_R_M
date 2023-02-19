import React from "react";

import absenceColumns from "../../../Contains/Table/AbsenceTable";
import Table from "../../../Components/Table";

const MyAbsencesComponent = ({ absenceList }) => {
  return (
    <div style={{ width: "100%", marginTop: "30px" }}>
      {absenceList && (
        <Table
          rows={absenceList}
          columns={absenceColumns}
          boxHeight="400px"
          tableHeight="314px"
          pageSize={4}
        />
      )}
    </div>
  );
};

export default MyAbsencesComponent;
