import dayjs from 'dayjs';

const absenceColumns = [
    { field: 'id', headerName: 'ID', width: 90, hideable: true },
    {
        field: 'reason',
        headerName: 'Reason',
        minWidth: 150,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
    {
        field: 'start_date',
        headerName: 'Start Date',
        minWidth: 150,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        renderCell: (params) => {
            return (dayjs(params.row.start_date).format("DD/MM/YYYY"))
        }
    },
    {
        field: 'end_date',
        headerName: 'End Date',
        minWidth: 150,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        renderCell: (params) => {
            return (dayjs(params.row.end_date).format("DD/MM/YYYY"))
        }
    },
    {
        field: 'approve',
        headerName: 'Approved',
        maxWidth: 150,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        renderCell: (params) => {
            return (params.row.approve ? <div style={{ color: "green" }}> Approve </div> : <div style={{ color: "red" }}> Not Approve </div>)
        }
    },
];

export default absenceColumns;