import React from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const UserData = ({ loggedUser, allRoles }) => {

    const fields = [
        { type: "text", id: "name", label: "Name", name: "name", defaultValue: loggedUser.first_name },
        { type: "text", id: "surname", label: "Surname", name: "surname", defaultValue: loggedUser.last_name },
        { type: "text", id: "username", label: "Username", name: "username", defaultValue: loggedUser.username },
        { type: "text", id: "email", label: "Email", name: "email", defaultValue: loggedUser.email },
        { type: "text", id: "age", label: "Age", name: "age", defaultValue: loggedUser.age },
        { type: "text", id: "phone_number", label: "Phone Number", name: "phone_number", defaultValue: loggedUser.phone_number },
    ]

    return (
        <div>
            <Box sx={{ flexGrow: 2, width: "70%", margin: '0 auto', }}>
                <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "baseline" }} spacing={2}>

                    {fields && fields.map((field, index) => {
                        return (
                            <Grid item xs={12} md={4}>
                                <TextField
                                    required
                                    fullWidth
                                    disabled
                                    size='small'
                                    type={field.type}
                                    id={field.id}
                                    label={field.label}
                                    name={field.name}
                                    defaultValue={field.defaultValue}
                                />
                            </Grid>
                        )
                    })}

                    {allRoles.length > 0 &&
                        <FormControl sx={{ mt: 2, ml: "16px" }} size="small" fullWidth>
                            <InputLabel disabled id="demo-simple-select-label">Role</InputLabel>
                            <Select
                                disabled
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={loggedUser.role_id}
                                label="Age"
                            //onChange={handleChange}
                            >
                                {allRoles && allRoles.map((role, index) => {
                                    return (
                                        <MenuItem key={index} value={role.id}>{role.name}</MenuItem>
                                    )
                                })

                                }
                            </Select>
                        </FormControl>
                    }
                </Grid>
            </Box>
        </div>
    )
}

export default UserData