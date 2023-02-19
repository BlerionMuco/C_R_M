import React, { useEffect, useState, useCallback } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import Table from "../../../Components/Table";
import userColumn from "../../../Contains/Table/UserTable";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAsync,
  getAllUsersAsync,
  updateUser,
} from "../../../redux/reducers/user";
import ModalComponent from "../../../Components/ModalComponent";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const ManageUsersComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalData, setModalData] = useState({
    modalTitle: "",
    modalContextText: "",
    context: "",
    dataFunc: {},
    func: null,
  });
  const [openModal, setOpenModal] = useState(false);
  const [dataForm, setDataForm] = useState({
    first_name: null,
    last_name: null,
    username: null,
    email: null,
    age: null,
    phone_number: null,
  });
  const allUsers = useSelector((state) => state.user.users);
  const deleteUser = useSelector((state) => state.user.deleteUserModal);
  const editUser = useSelector((state) => state.user.editUserModal);
  const userId = useSelector((state) => state.user.userId);
  const singleUser = useSelector((state) => state.user.singleUser);

  useEffect(() => {
    dispatch(getAllUsersAsync());
    if (singleUser[0]) {
      setDataForm(singleUser[0]);
    }
  }, [dispatch, singleUser]);

  const deleteUserFunc = useCallback(() => {
    dispatch(deleteUserAsync(userId)).then((data) => {
      if (data.payload.status === "success") {
        dispatch(getAllUsersAsync());
      }
    });
  }, [userId, dispatch]);

  const handleChange = useCallback(
    (e) => {
      setDataForm({ ...dataForm, ...{ [e.target.name]: e.target.value } });
    },
    [dataForm]
  );

  const goToCreateUser = () => {
    navigate("/createUser");
  };

  const editUserFunc = useCallback(() => {
    dispatch(updateUser({ userId: userId, userData: dataForm }));
    dispatch(getAllUsersAsync());
  }, [dispatch, userId, dataForm]);

  useEffect(() => {
    if (deleteUser) {
      setModalData({
        modalTitle: "Delete User",
        modalContextText: "Delete User?",
        context: "deleteUser",
        dataFunc: userId,
        func: deleteUserFunc,
      });
      setOpenModal(true);
    } else if (editUser) {
      setModalData({
        modalTitle: "Edit User",
        modalContextText: "Edit User?",
        context: "editUser",
        dataFunc: userId,
        func: editUserFunc,
      });
      setOpenModal(true);
    }
  }, [deleteUser, editUser, userId, deleteUserFunc, editUserFunc, dispatch]);

  console.log({ dataForm });

  return (
    <div>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
        spacing={2}
      >
        <Grid sx={{ display: "flex", justifyContent: "end" }} item xs={12}>
          <Button
            startIcon={<AddIcon />}
            buttontype="loading"
            //loading={loading}
            variant="contained"
            color="success"
            //onClick={handleSubmit}
            sx={{
              "&.MuiButtonBase-root": {
                textTransform: "none",
                width: "140px",
              },
            }}
            onClick={goToCreateUser}
            size="medium"
          >
            Create User
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ width: "100%" }}>
          <div style={{ width: "100%" }}>
            {allUsers.length > 0 && (
              <Table
                rows={allUsers}
                columns={userColumn}
                boxHeight="400px"
                tableHeight="530px"
                pageSize={8}
              />
            )}
          </div>
        </Grid>
      </Grid>
      <ModalComponent
        modalData={modalData}
        setOpenModal={setOpenModal}
        openModal={openModal}
      >
        {editUser && singleUser.length > 0 && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    onChange={handleChange}
                    name="first_name"
                    size="small"
                    required
                    label="Firstname"
                    sx={{ width: "100%" }}
                    value={dataForm?.first_name}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    onChange={handleChange}
                    name="last_name"
                    size="small"
                    required
                    label="Lastname"
                    sx={{ width: "100%" }}
                    value={dataForm.last_name}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    onChange={handleChange}
                    name="age"
                    size="small"
                    label="Age"
                    sx={{ width: "100%" }}
                    value={dataForm.age}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    onChange={handleChange}
                    name="phone_number"
                    size="small"
                    label="Phone number"
                    sx={{ width: "100%" }}
                    value={dataForm.phone_number}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                name="username"
                size="small"
                required
                label="Username"
                sx={{ width: "100%" }}
                value={dataForm.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                name="email"
                size="small"
                required
                label="Email"
                sx={{ width: "100%" }}
                value={dataForm.email}
              />
            </Grid>
          </Grid>
        )}
      </ModalComponent>
    </div>
  );
};

export default ManageUsersComponent;
