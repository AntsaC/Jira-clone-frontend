import { Chip } from "@mui/material";
import ActionBar from "../common/ActionBar";
import MyDataGrid from "../common/MyDataGrid";
import { useNavigate, useParams } from "react-router-dom";

export default function SprintDataTable({ sprints }) {
  const { key } = useParams();
  const navigate = useNavigate();

  const cols = [
    {
      field: "name",
      valueGetter: (params) => params.row.sprint.name,
      headerName: "Name",
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
      renderCell: () => <ActionBar />,
      width: 150,
    },
  ];

  const handleOnSelected = (row) => {
    const id = row[0];
    navigate(`/project/${key}/sprint/${id}`);
  };

  return (
    <MyDataGrid
      cols={cols}
      rows={sprints}
      getRowId={(row) => row.sprint.id}
      onSelectedRow={handleOnSelected}
    />
  );
}
