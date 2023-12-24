import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { useMutation, useQuery } from "@tanstack/react-query";
import ProjectService from "./Service.js";
import FormDataUtil from "../../lib/utils/FormDataUtil.jsx";
import queryClient from "../../config/query-client.js";
import FormDialog from "../common/FormDialog.jsx";

const ProjectFormDialog = ({ project, onCancel }) => {
  const { data } = useQuery(ProjectService.allTypeQuery);
  const mutation = useMutation({
    mutationFn: (event) =>
      ProjectService.submitProject(FormDataUtil.extractFromEvent(event)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      onCancel();
    },
  });

  return (
    <FormDialog
      type={"project"}
      mutation={mutation}
      item={project}
      onCancel={onCancel}
    >
      <Box display={"flex"} gap={3} flexDirection={"column"}>
        <input defaultValue={project?.id} name="id" type="hidden" />
        <TextField label={"Name"} name={"name"} defaultValue={project?.name} />
        <TextField label={"Key"} name={"key"} defaultValue={project?.key} />
        <FormControl>
          <InputLabel>Project type</InputLabel>
          <Select
            name={"type.id"}
            label={"Project type"}
            defaultValue={project?.type?.id}
          >
            {data &&
              data.map((type) => (
                <MenuItem key={type.id} value={type.id}>
                  {type.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    </FormDialog>
  );
};

ProjectFormDialog.propTypes = {
  project: PropTypes.any,
  onCancel: PropTypes.func,
};

export default ProjectFormDialog;
