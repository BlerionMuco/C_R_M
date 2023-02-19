import React, { useState } from "react";
import Button from "@mui/material/Button";
import NewUserComponent from "../../../Components/User/NewUserComponent";
import { createUserAsync } from "../../../redux/reducers/user";
import { useDispatch } from "react-redux";
const CreateUserComponent = () => {
  const [dataForm, setDataForm] = useState({
    first_name: "",
    last_name: "",
    username: "",
    user_password: "",
    user_verification_password: "",
    email: "",
    age: "",
    phone_number: "",
    role_id: 3,
  });
  const dispatch = useDispatch();
  const createUser = () => {
    dispatch(
      createUserAsync({
        dataForm,
        callThunk: () => {
          setDataForm({
            first_name: "",
            last_name: "",
            username: "",
            user_password: "",
            user_verification_password: "",
            email: "",
            age: "",
            phone_number: "",
            role_id: 3,
          });
        },
      })
    );
  };
  return (
    <div>
      <div>
        <NewUserComponent dataForm={dataForm} setDataForm={setDataForm} />
      </div>
      <div
        style={{ display: "flex", marginTop: "14px", justifyContent: "end" }}
      >
        <Button onClick={createUser} color="success" variant="contained">
          Create
        </Button>
      </div>
    </div>
  );
};

export default CreateUserComponent;
