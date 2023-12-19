import { Checkbox, MenuItem, Select, TableCell, TableRow } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import StoryService from "../story/StoryService";
import queryClient from "../../config/query-client";
import EditableCell from "../common/EditableCell";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import KeyContext from "../common/KeyContext";
import {
  useSelected,
  useSelectedDispatch,
} from "../common/provider/SelectionProvider";

const StoryCardItem = ({ card }) => {
  const { key } = useParams();
  const queryKey = useContext(KeyContext);

  const mutation = useMutation({
    mutationFn: (partialStory) =>
      StoryService.partialUpdateStory(card.id, partialStory),
    onSuccess: (updatedStory) => {
      const cards = queryClient.getQueryData(queryKey);
      const updatedCards = cards.map((story) => {
        if (story.id === updatedStory.id) {
          if (
            story.storyPoint !== updatedStory.storyPoint ||
            story.status?.id !== updatedStory.status.id
          ) {
            queryClient.invalidateQueries([queryKey, "point"]);
          }
          return updatedStory;
        }
        return story;
      });
      queryClient.setQueryData(queryKey, updatedCards);
    },
  });

  const [status, setStatus] = useState(card.status?.id);
  const { data: statuses } = useQuery(StoryService.getAllStatusQuery);

  function handleOnStatusChange(e) {
    setStatus(e.target.value);
    mutation.mutate({
      property: "status",
      value: Number(e.target.value),
    });
  }

  const selectionDispatch = useSelectedDispatch();
  const selected = useSelected();
  const isSelected = selected.includes(card.id);

  const handleOnSelected = () => {
    selectionDispatch({
      type: isSelected ? "unselected" : "selected",
      item: card.id,
    });
  };

  return (
    <TableRow>
      <TableCell width={50}>
        <Checkbox onClick={handleOnSelected} checked={isSelected} />
      </TableCell>
      <TableCell width={100}>
        {key}-{card.id}
      </TableCell>
      <EditableCell
        intialValue={card.summary}
        onFinished={(value) =>
          mutation.mutate({ property: "summary", value: value })
        }
      />
      <TableCell width={150}>
        <Select
          size="small"
          value={status}
          onChange={handleOnStatusChange}
          fullWidth
        >
          {statuses &&
            statuses.map((s) => (
              <MenuItem key={s.id} value={s.id}>
                {s.name}
              </MenuItem>
            ))}
        </Select>
      </TableCell>
      <EditableCell
        intialValue={card.storyPoint ?? "_"}
        onFinished={(value) =>
          mutation.mutate({ property: "storyPoint", value: value })
        }
        width={100}
        type={"number"}
      />
      <TableCell width={200}>Assigned</TableCell>
    </TableRow>
  );
};

StoryCardItem.propTypes = {
  card: PropTypes.object,
};

export default StoryCardItem;
