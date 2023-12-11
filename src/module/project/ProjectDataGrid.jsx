import MyDataGrid from "../common/MyDataGrid.jsx";
import PropTypes from "prop-types";
import ActionBar from "../common/ActionBar.jsx";

const cols = [
    {
        field: 'key',
        headerName: 'KEY',
        width: 150
    },
    {
        field: 'name',
        headerName: 'Name',
        filterable: true
    },
    {
        valueGetter: (params) => params.row.type.name,
        headerName: 'Type'
    },
    {
        valueGetter: (params) => params.row.type.name,
        headerName: 'Lead'
    },
    {
        field: '',
        renderCell: () => (
            <ActionBar />
        ),
        width: 150
    }
]

const ProjectDataGrid = ({project}) => {
  return <MyDataGrid rows={project} cols={cols} />
}

ProjectDataGrid.propTypes = {
    project: PropTypes.arrayOf(PropTypes.any)
}

export default ProjectDataGrid;