import MyDataGrid from "../common/MyDataGrid.jsx";
import PropTypes from "prop-types";
import ActionBar from "../common/ActionBar.jsx";
import { Link } from "react-router-dom";
import { Avatar, Stack } from "@mui/material";

const ProjectDataGrid = ({ project, onEditProject }) => {
  const cols = [
    {
      field: "key",
      headerName: "KEY",
      width: 150,
    },
    {
      field: "name",
      headerName: "Name",
      filterable: true,
      renderCell: (params) => (
        <Link to={`/project/${params.row.id}/backlog`}>{params.row.name}</Link>
      ),
    },
    {
      field: "type",
      valueGetter: (params) => params.row.type.name,
      headerName: "Type",
    },
    {
      field: "lead",
      renderCell: (params) => (
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <Avatar />
          <div>{params.row.lead?.username}</div>
        </Stack>
      ),
      headerName: "Lead",
    },
    {
      field: "action",
      headerName: "",
      renderCell: (params) => (
        <ActionBar
          onEdit={() => onEditProject(params.row)}
          onDelete={() => alert("Delete")}
        />
      ),
      width: 150,
    },
  ];

  return <MyDataGrid rows={project} cols={cols} />;
};

ProjectDataGrid.propTypes = {
  project: PropTypes.arrayOf(PropTypes.any),
  onEditProject: PropTypes.func,
};

export default ProjectDataGrid;
