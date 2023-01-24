import React from 'react'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useDispatch } from 'react-redux';
import { openUserModal } from '../../redux/reducers/user';
import { getUserByIdAsync } from '../../redux/reducers/user';

const UsersActions = ({ userId, icon, label, context = null }) => {
    const dispatch = useDispatch();

    const openModalForUser = () => {
        if (context === "editUser") {
            dispatch(getUserByIdAsync(userId))
            dispatch(openUserModal({ editUserModal: true, userId: userId }))
        }
        else {
            dispatch(openUserModal({ deleteUserModal: true, userId: userId }))
        }
    }
    return (
        <div>
            <GridActionsCellItem showInMenu icon={icon} label={label} onClick={openModalForUser} />
        </div>
    )
}

export default UsersActions