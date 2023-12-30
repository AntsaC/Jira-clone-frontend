import {
  Box,
  CircularProgress,
  List,
  ListItem,
  ListSubheader,
  Checkbox,
  Stack,
  Button,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import CriteriaService from "../story/CriteriaService";
import { useParams } from "react-router-dom";
import EditableListItemText from "../common/EditableListItemText";
import queryClient from "../../config/query-client";

export default function StoryCriteriaList({ criteria }) {
  const { id: storyId } = useParams();
  const mutation = useMutation({
    mutationFn: () => CriteriaService.newCriteria(storyId),
    onSuccess: (newCriteria) => {
      queryClient.setQueryData(
        CriteriaService.getAllCriteriaByStoryQuery(storyId).queryKey,
        (criterias) => {
          return [...criterias, newCriteria];
        }
      );
    },
  });

  return (
    <Box flex={1}>
      {criteria ? (
        <List
          subheader={
            <Stack direction={"row"} justifyContent={"space-between"}>
              <ListSubheader>Criteria acceptances</ListSubheader>
              <Button size="small" onClick={() => mutation.mutate()}>
                Add
              </Button>
            </Stack>
          }
        >
          {criteria.map((c) => (
            <CriteriaItem key={c.id} c={c} />
          ))}
        </List>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
}

function CriteriaItem({ c }) {
  const { id: storyId } = useParams();
  const mutation = useMutation({
    mutationFn: (criteria) =>
      CriteriaService.updateCriteria(storyId, c.id, criteria),
    onSuccess: (criteria) => CriteriaService.replaceCriteria(storyId, criteria),
  });

  return (
    <ListItem
      secondaryAction={
        <Checkbox
          checked={c.checked}
          onChange={() => mutation.mutate({ ...c, checked: !c.checked })}
        />
      }
    >
      <EditableListItemText
        primary={c.criteria}
        onEdited={(value) => mutation.mutate({ ...c, criteria: value })}
      />
    </ListItem>
  );
}
