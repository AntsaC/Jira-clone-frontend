import { Box, TextField } from "@mui/material";
import FormDialog from "../common/FormDialog";
import { useMutation } from "@tanstack/react-query";
import SprintService from "./service";
import FormDataUtil from "../../lib/utils/FormDataUtil";
import queryClient from "../../config/query-client";
import { useParams } from "react-router-dom";

export default function SprintDialog({ sprint, onCancel }) {
  const { key } = useParams();
  const mutation = useMutation({
    mutationFn: (event) =>
      SprintService.submitSprint(key, FormDataUtil.extractFromEvent(event)),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sprints", key],
      });
      onCancel();
    },
  });

  return (
    <FormDialog
      type={"sprint"}
      item={sprint}
      onCancel={onCancel}
      mutation={mutation}
    >
      <Box display={"flex"} gap={3} flexDirection={"column"}>
        <input type="hidden" name="id" defaultValue={sprint?.id} />
        <TextField label="Name" name="name" defaultValue={sprint?.name} />
        <TextField
          label="Start date"
          name="startDate"
          defaultValue={sprint?.startDate}
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="End date"
          name="endDate"
          defaultValue={sprint?.endDate}
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          multiline
          rows={4}
          label="Goal"
          name="goal"
          defaultValue={sprint?.goal}
        />
      </Box>
    </FormDialog>
  );
}
