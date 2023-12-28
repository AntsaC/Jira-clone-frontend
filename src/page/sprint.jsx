import { Box, CircularProgress, Stack } from "@mui/material";
import Title from "../module/common/Title.jsx";
import { useQuery } from "@tanstack/react-query";
import SprintService from "../module/sprint/service.js";
import SprintDataTable from "../module/sprint/SprintDataTable.jsx";
import { useState } from "react";
import NewItemButton from "../module/common/NewItemButton.jsx";
import SprintDialog from "../module/sprint/SprintFormDialog.jsx";
import { useParams } from "react-router-dom";
import { addDays, format } from "date-fns";

export default function SprintPage() {
  const { data } = useQuery(SprintService.allByProjectQuery(useParams().key));
  const [sprint, setSprint] = useState();

  const handleOnShowSprintFormDialog = (currentSprint) => {
    setSprint({
      ...currentSprint,
      duration: 14,
    });
  };

  const handleOnChange = (property, value) => {
    let updatedSprint = {
      ...sprint,
      [property]: value,
    };
    if (updatedSprint.startDate) {
      updatedSprint.endDate = format(
        addDays(new Date(updatedSprint.startDate), updatedSprint.duration),
        "yyyy-MM-dd"
      );
    }

    setSprint(updatedSprint);
  };

  return (
    <Box>
      <Title title={"Sprints"} />
      <Stack flexDirection={"row"} justifyContent={"flex-end"}>
        <NewItemButton
          onClick={() => handleOnShowSprintFormDialog({})}
          primary="Create sprint"
        />
      </Stack>
      {data ? (
        <SprintDataTable sprints={data} onEdit={handleOnShowSprintFormDialog} />
      ) : (
        <CircularProgress />
      )}
      <SprintDialog
        sprint={sprint}
        onCancel={() => setSprint(null)}
        onChange={handleOnChange}
      />
    </Box>
  );
}
