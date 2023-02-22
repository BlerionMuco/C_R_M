import dayjs from "dayjs";
import AbsencesActions from "./AbsencesActions";

const absenceColumns = [
  { field: "id", headerName: "ID", width: 90, hideable: true },
  {
    field: "reason",
    headerName: "Reason",
    minWidth: 150,
    headerAlign: "center",
    align: "center",
    flex: 1,
  },
  {
    field: "start_date",
    headerName: "Start Date",
    minWidth: 150,
    headerAlign: "center",
    align: "center",
    flex: 1,
    renderCell: (params) => {
      return dayjs(params.row.start_date).format("DD/MM/YYYY");
    },
  },
  {
    field: "end_date",
    headerName: "End Date",
    minWidth: 150,
    headerAlign: "center",
    align: "center",
    flex: 1,
    renderCell: (params) => {
      return dayjs(params.row.end_date).format("DD/MM/YYYY");
    },
  },
  {
    field: "approve",
    headerName: "Status",
    maxWidth: 150,
    headerAlign: "center",
    align: "center",
    flex: 1,
    renderCell: (params) => {
      return (
        <>
          {params.row.approve === 1 ? (
            <div style={{ color: "green" }}> Approve </div>
          ) : (
            <>
              {params.row.approve === 2 ? (
                <div style={{ color: "orange" }}> Pending </div>
              ) : (
                <div style={{ color: "red" }}> Denied </div>
              )}
            </>
          )}
        </>
      );
    },
  },
  {
    type: "actions",
    field: "Actions",
    headerName: "Actions",
    maxWidth: 100,
    getActions: (params) => [
      <AbsencesActions
        showInMenu
        id={params.row.id}
        //absenceId={params.row.id}
      />,
    ],
  },
];

export default absenceColumns;
