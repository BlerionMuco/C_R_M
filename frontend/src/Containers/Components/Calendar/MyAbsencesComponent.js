import React from 'react'

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import absenceColumns from '../../../Contains/Table/AbsenceTable';

const MyAbsencesComponent = ({ absenceList }) => {


    console.log({ absenceList });
    return (
        <div style={{ width: "100%", marginTop: "30px" }}>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    initialState={{
                        columns: {
                            columnVisibilityModel: {
                                id: false,
                            },
                        },
                    }}
                    sx={{ height: "317px", marginLeft: "16px" }}
                    rows={absenceList}
                    columns={absenceColumns}
                    checkboxSelection={false}
                    pageSize={4}
                    rowsPerPageOptions={[4]}
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        </div>
    )
}

export default MyAbsencesComponent