import { Box, CircularProgress, Stack } from "@mui/material";
import Title from "../module/common/Title.jsx";
import { useQuery } from "@tanstack/react-query";
import SprintService from "../module/sprint/service.js";
import useProject from "../lib/hook/useProject.js";
import SprintDataTable from "../module/sprint/SprintDataTable.jsx";
import { useState } from "react";
import NewItemButton from "../module/common/NewItemButton.jsx";
import SprintDialog from "../module/sprint/SprintFormDialog.jsx";

export default function SprintPage() {
  const { data } = useQuery(SprintService.allByProjectQuery(useProject().id));
  const [sprint, setSprint] = useState();

  return (
    <Box>
      <Title title={"Sprints"} />
      <Stack flexDirection={"row"} justifyContent={"flex-end"}>
        <NewItemButton onClick={() => setSprint({})} primary="Create sprint" />
      </Stack>
      {data ? (
        <SprintDataTable sprints={data} onEdit={setSprint} />
      ) : (
        <CircularProgress />
      )}
      <SprintDialog sprint={sprint} onCancel={() => setSprint(null)} />
    </Box>
  );
}
