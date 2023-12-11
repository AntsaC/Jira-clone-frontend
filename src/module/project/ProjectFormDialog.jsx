import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl, InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import {useMutation, useQuery} from "@tanstack/react-query";
import ProjectService from "./Service.js";
import FormDataUtil from "../../lib/utils/FormDataUtil.jsx";
import queryClient from "../../config/query-client.js";

const ProjectFormDialog = ({project, onCancel}) => {
    const {data} = useQuery(ProjectService.allTypeQuery);
    const mutation = useMutation({
        mutationFn: (event) => ProjectService.submitProject(FormDataUtil.extractFromEvent(event)),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['projects']});
            onCancel();
        }
    });

  return (
      <Dialog fullWidth={true} maxWidth={'md'} open={project} >
          <DialogTitle>Create a new project</DialogTitle>
          <form onSubmit={mutation.mutate}>
              <input type={'hidden'} name={'id'} defaultValue={project?.id} />
              <DialogContent>
                  <Box display={'flex'} gap={3} marginTop={2} flexDirection={'column'}>
                      <TextField
                          label={'Name'}
                          name={'name'}
                          defaultValue={project?.name}
                      />
                      <TextField
                          label={'Key'}
                          name={'key'}
                          defaultValue={project?.key}
                      />
                      <FormControl>
                          <InputLabel>Project type</InputLabel>
                          <Select
                              name={'type.id'}
                              label={'Project type'}
                              defaultValue={project?.type?.id}
                          >
                              {
                                  data && data.map(type => (
                                      <MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>
                                  ))
                              }
                          </Select>
                      </FormControl>
                  </Box>
              </DialogContent>
              <DialogActions>
                  <Box display={'flex'} gap={2}>
                      <Button onClick={onCancel}>Cancel</Button>
                      <Button type={'submit'}>Create</Button>
                  </Box>
              </DialogActions>
          </form>
      </Dialog>
  )
}

ProjectFormDialog.propTypes = {
    project: PropTypes.any,
    onCancel: PropTypes.func
}

export default ProjectFormDialog;