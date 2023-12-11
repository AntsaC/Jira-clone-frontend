import {DataGrid} from "@mui/x-data-grid";
import PropTypes from "prop-types";
import {CircularProgress} from "@mui/material";

const MyDataGrid = ({rows, cols}) => {

    cols.forEach(col => {
        if(!col.width) {
            col.flex = 1
        }
        if(!col.sortable) {
            col.sortable = false
        }
        if(!col.filterable) {
            col.filterable = false
        }
    })

  return (
      <div>
          {
           rows ? (<DataGrid columns={cols} rows={rows} />) : (<CircularProgress />)
          }
      </div>
  )
}

MyDataGrid.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.any),
    cols: PropTypes.arrayOf(PropTypes.any)
}

export default MyDataGrid;
