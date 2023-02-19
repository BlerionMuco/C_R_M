import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const NewUserComponent = ({ dataForm, setDataForm }) => {
  const handleChange = (e) => {
    setDataForm({ ...dataForm, ...{ [e.target.name]: e.target.value } });
  };
  console.log({ dataForm });
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
            <Grid item xs={6}>
              <TextField
                onChange={handleChange}
                name="first_name"
                size="small"
                required
                label="Firstname"
                sx={{ width: "100%" }}
                value={dataForm.first_name}
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
        <Grid item xs={12}>
          <TextField
            onChange={handleChange}
            name="user_password"
            sx={{ width: "100%" }}
            size="small"
            required
            label="Password"
            type="password"
            autoComplete="new-password"
            value={dataForm.user_password}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handleChange}
            name="user_verification_password"
            sx={{ width: "100%" }}
            size="small"
            required
            label="Verify Password"
            type="password"
            autoComplete="new-password"
            value={dataForm.user_verification_password}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default NewUserComponent;
