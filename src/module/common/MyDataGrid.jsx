import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import "./MyDataGrid.css";

const MyDataGrid = ({ rows, cols, onSelectedRow, getRowId }) => {
  cols.forEach((col) => {
    if (!col.width) {
      col.flex = 1;
    }
    if (!col.sortable) {
      col.sortable = false;
    }
    if (!col.filterable) {
      col.filterable = false;
    }
    col.headerClassName = "header";
  });

  return (
    <Box marginTop={2}>
      {rows ? (
        <DataGrid
          columns={cols}
          rows={rows}
          getRowId={getRowId}
          onRowSelectionModelChange={onSelectedRow}
        />
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

MyDataGrid.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.any),
  cols: PropTypes.arrayOf(PropTypes.any),
};

export default MyDataGrid;
