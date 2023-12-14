import {TableCell, TableRow, TextField} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import StoryService from "../story/StoryService";
import queryClient from "../../config/query-client";

const BacklogItem = ({card}) => {
  const mutation = useMutation({
    mutationFn: (partialStory) => StoryService.partialUpdateStory(card.id, partialStory),
    onSuccess: updatedStory => {
        const cards = queryClient.getQueryData(['backlog', 1]);
        const updatedCards = cards.map(story => {
            if(story.id === updatedStory.id)
                return updatedStory;
            return story;
        });
        queryClient.setQueryData(['backlog', 1], updatedCards);
    }
  })


  return (
      <TableRow>
          <TableCell width={100}>
              PROJ-1
          </TableCell>
          <EditableCell intialValue={card.summary} onFinished={(value) => mutation.mutate({property: 'summary', value: value})} />
          <TableCell width={150}>
              {card.status?.name}
          </TableCell>
          <TableCell width={100}>
              {card.storyPoint}
          </TableCell >
          <TableCell width={200}>Assigned</TableCell>
      </TableRow>
  )
}

const EditableCell = ({intialValue, onFinished}) => {
    const [isEdited, setIsEdited] = useState(false);
    const [currentValue, setCurrentValue] = useState(intialValue);

    return (
        <TableCell onClick={() => setIsEdited(true)}>
            {
                isEdited
                ? <TextField
                    autoFocus
                    size="small"
                    fullWidth
                    value={currentValue}
                    onChange={(e) => setCurrentValue(e.target.value)}
                    onBlur={() => {setIsEdited(false); onFinished(currentValue) }}
                  />
                : currentValue
            }
          </TableCell>   
    )
}

BacklogItem.propTypes = {
    card: PropTypes.object
}

export default BacklogItem;