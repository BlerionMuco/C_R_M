import React from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'

const UserData = ({userData}) => {
  return (
    <div>
          <Box sx={{ flexGrow: 2, width: "70%", margin: '0 auto', }}>
              <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "baseline" }} spacing={2}>
                  <Grid item xs={12} md={4}>
                      <TextField
                          required
                          fullWidth
                          disabled
                          size='small'
                          type="text"
                          id="name"
                          label="Name"
                          name="name"
                      //defaultValue={userData.name}
                      // onChange={onChange}
                      //error={errorsList.nameError}
                      // helperText={errorsList.nameError}
                      />
                  </Grid>
                  <Grid item xs={12} md={4}>
                      <TextField
                          required
                          fullWidth
                          disabled
                          size='small'
                          width='100%'
                          type="text"
                          id="surname"
                          label="Surname"
                          name="surname"
                      // defaultValue={userData.surname}
                      //onChange={onChange}
                      //error={errorsList.surnameError}
                      //helperText={errorsList.surnameError}
                      />
                  </Grid>
                  <Grid item xs={12} md={4}>
                      <TextField
                          size='small'
                          disabled
                          required
                          fullWidth
                          type="text"
                          id="email"
                          label="Email"
                          name="email"
                          //defaultValue={userData.email}
                          //onChange={onChange}
                      />
                  </Grid>

                  {/* <Grid container mt={1}>
                      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', }}>
                          <Button
                              disabled={loading}
                              buttontype="loading"
                              loading={loading}
                              variant="contained"
                              color="success"
                              onClick={handleSubmit}
                              sx={{
                                  '&.MuiButtonBase-root': {
                                      textTransform: "none",
                                  },
                              }}
                              size="small"
                          >
                              {t("button_save")}
                          </Button>

                      </Grid>
                  </Grid> */}
              </Grid>
         </Box>
    </div>
  )
}

export default UserData