import { Chip } from "@mui/material";
import ActionBar from "../common/ActionBar";
import MyDataGrid from "../common/MyDataGrid";
import { Link, useParams } from "react-router-dom";

export default function SprintDataTable({ sprints, onEdit }) {
  const { key } = useParams();

  const cols = [
    {
      field: "name",
      headerName: "Name",
      onClick: () => alert("AIZA"),
      renderCell: (params) => (
        <Link to={`/project/${key}/sprint/${params.row.sprint.id}`}>
          {params.row.sprint.name}
        </Link>
      ),
    },
    {
      field: "startDate",
      valueGetter: (params) => params.row.sprint.startDate,
      headerName: "Start date",
    },
    {
      field: "endDate",
      valueGetter: (params) => params.row.sprint.endDate,
      headerName: "End Date",
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => (
        <Chip label={params.row.status} sx={{ width: 100 }} />
      ),
    },
    {
      field: "action",
      headerName: "",
      renderCell: (params) => (
        <ActionBar onEdit={() => onEdit(params.row.sprint)} />
      ),
      width: 150,
    },
  ];

  return (
    <MyDataGrid cols={cols} rows={sprints} getRowId={(row) => row.sprint.id} />
  );
}
