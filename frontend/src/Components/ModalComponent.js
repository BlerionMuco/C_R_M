import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { openUserModal } from '../redux/reducers/user';
import { useDispatch } from 'react-redux';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const ModalComponent = ({ modalData, setOpenModal, openModal, children }) => {
    const dispatch = useDispatch()
    const handleClose = () => {
        setOpenModal(false);
        dispatch(openUserModal({ editUserModal: false, userId: 0, deleteUserModal: false }))
    };

    const agree = () => {
        if (modalData.context === "clockIn" || modalData.context === "clockOut") {
            modalData.func(!modalData.dataFunc)
            handleClose();
        }
        else if (modalData.context === "deleteUser") {
            modalData.func()
            handleClose();
        }
        else if (modalData.context === "editUser") {
            modalData.func()
            handleClose();
        }
        else {
            if (!modalData.dataFunc.value) {
                modalData.func({ text: "Finish the Break", value: !modalData.dataFunc.value })
                handleClose();
            }
            else {
                modalData.func({ text: "Start the Break", value: !modalData.dataFunc.value })
                handleClose();
            }
        }
    }

    return (
        <div style={{ width: "350px" }} >
            <Dialog
                open={openModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{modalData.modalTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {modalData.modalContextText}
                        {children}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="error" onClick={handleClose}>Disagree</Button>
                    <Button variant="contained" color="success" onClick={agree}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ModalComponent