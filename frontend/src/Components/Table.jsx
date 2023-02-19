import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const Table = ({ rows, columns, boxHeight, tableHeight, pageSize }) => {
  return (
    <div>
      <Box sx={{ height: boxHeight, width: "100%" }}>
        <DataGrid
          initialState={{
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
          sx={{ height: tableHeight }}
          rows={rows}
          columns={columns}
          checkboxSelection={false}
          pageSize={pageSize}
          rowsPerPageOptions={[pageSize]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
};

export default Table;
