import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { newUser } from "../../Contains/User/NewUser";

const NewUserComponent = ({ dataForm, setDataForm }) => {
  const handleChange = (e) => {
    setDataForm({ ...dataForm, ...{ [e.target.name]: e.target.value } });
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid sx={{ textAlign: "center" }} item xs={12}>
          <div style={{ fontSize: "17px", fontWeight: "600" }}>
            {" "}
            {window.location.pathname === "register"
              ? "Sign Up"
              : "Create New User"}
          </div>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {newUser.length > 0 &&
              newUser.map((userField, index) => (
                <Grid key={index} item xs={userField.xs}>
                  <TextField
                    onChange={handleChange}
                    name={userField.name}
                    size={userField.size}
                    required={userField.required}
                    label={userField.label}
                    sx={{ width: "100%" }}
                    value={dataForm[userField.name]}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewUserComponent;
