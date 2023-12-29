import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import StoryService from "../story/StoryService";
import FormDataUtil from "../../lib/utils/FormDataUtil";
import queryClient from "../../config/query-client";
import BacklogService from "./Service";
import { useParams } from "react-router-dom";

export default function StoryForm({ story }) {
  const { key } = useParams();
  const { data: status } = useQuery(StoryService.getAllStatusQuery);
  const mutation = useMutation({
    mutationFn: (event) =>
      StoryService.updateStory(
        key,
        story.id,
        FormDataUtil.extractFromEvent(event)
      ),
    onSuccess: (story) => {
      queryClient.invalidateQueries({ queryKey: ["stories", story.id] });
      if (story.sprint) {
        queryClient.invalidateQueries({
          queryKey: StoryService.getAllBySprintQuery(story.sprint.id),
        });
      } else {
        queryClient.invalidateQueries({
          queryKey: BacklogService.getByProjectQuery(key).queryKey,
        });
      }
    },
  });

  return (
    <Box flex={1}>
      <form onSubmit={mutation.mutate}>
        <Stack gap={3}>
          <TextField
            label="Summary"
            name="summary"
            defaultValue={story.summary}
          />
          <TextField
            rows={4}
            label="Description"
            name="description"
            defaultValue={story.description}
            multiline
          />
          <FormControl>
            <InputLabel>Status</InputLabel>
            <Select name="status.id" defaultValue={story.status.id}>
              {status?.map((s) => (
                <MenuItem key={s.id} value={s.id}>
                  {s.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Story point"
            type="number"
            name="storyPoint"
            defaultValue={story.storyPoint}
          />
          <Button
            sx={{ alignSelf: "flex-start", marginTop: 2 }}
            variant="contained"
            type="submit"
          >
            {mutation.isPending ? <CircularProgress /> : "Save change"}
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
