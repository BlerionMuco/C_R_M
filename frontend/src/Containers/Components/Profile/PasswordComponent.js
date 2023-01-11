import React from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

const PasswordComponent = ({userData}) => {
  return (
    <div>
          <Box sx={{ flexGrow: 2, width: "50%", margin: '0 auto', }}>
              <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "baseline" }} spacing={2}>
                  <Grid item xs={12} md={12}>
                      <TextField
                          required
                          fullWidth
                          size='small'
                          type="text"
                          id="current_password"
                          label="Current Password"
                          name="current_password"
                      //defaultValue={userData.name}
                      // onChange={onChange}
                      //error={errorsList.nameError}
                      // helperText={errorsList.nameError}
                      />
                  </Grid>
                  <Grid item xs={12} md={12}>
                      <TextField
                          required
                          fullWidth
                          size='small'
                          width='100%'
                          type="text"
                          id="new_password"
                          label="New Password"
                          name="new_password"
                      // defaultValue={userData.surname}
                      //onChange={onChange}
                      //error={errorsList.surnameError}
                      //helperText={errorsList.surnameError}
                      />
                  </Grid>
                  <Grid item xs={12} md={12}>
                      <TextField
                          size='small'
                          required
                          fullWidth
                          type="text"
                          id="confirm_password"
                          label="Confirm Password"
                          name="confirm_password"
                      //defaultValue={userData.email}
                      //onChange={onChange}
                      />
                  </Grid>

                  <Grid container mt={1}>
                      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', }}>
                          <Button
                              buttontype="loading"
                              //loading={loading}
                              variant="contained"
                              color="success"
                              //onClick={handleSubmit}
                              sx={{
                               
                                  '&.MuiButtonBase-root': {
                                      textTransform: "none",
                                      width: "100px",
                                  },
                              }}
                              size="medium"
                          >
                              Save
                          </Button>

                      </Grid>
                  </Grid>
              </Grid>
          </Box>
    </div>
  )
}

export default PasswordComponent