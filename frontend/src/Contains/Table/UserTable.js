import UsersActions from "./UsersActions";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { deleteUserAsync } from "../../redux/reducers/user";
const userColumn = [
    { field: 'id', headerName: 'ID', width: 90, hideable: true },
    {
        field: 'first_name',
        headerName: 'Firstname',
        minWidth: 120,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
    {
        field: 'last_name',
        headerName: 'Lastname',
        minWidth: 120,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
    {
        field: 'username',
        headerName: 'Username',
        minWidth: 120,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
    {
        field: 'email',
        headerName: 'Email',
        minWidth: 120,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },

    {
        field: 'phone_number',
        headerName: 'Phone number',
        minWidth: 120,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
    {
        field: 'age',
        headerName: 'Age',
        minWidth: 50,
        maxWidth: 100,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
    {
        type: 'actions',
        field: "Actions",
        headerName: "Actions",
        maxWidth: 100,
        getActions: (params) => [
            <UsersActions userId={params.row.id} label="Edit user" context="editUser" icon={<ModeEditOutlineIcon />} showInMenu />,
            <UsersActions userId={params.row.id} label="Delete user" context="deleteUser" action={deleteUserAsync} icon={<DeleteIcon sx={{ color: "red" }} />} showInMenu />
        ]
    }

];

export default userColumn;