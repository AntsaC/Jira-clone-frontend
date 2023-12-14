import {TableCell, TableRow} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import PropTypes from "prop-types";
import StoryService from "../story/StoryService";
import queryClient from "../../config/query-client";
import EditableCell from "../common/EditableCell";

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
              PROJ-{card.id}
          </TableCell>
          <EditableCell intialValue={card.summary} onFinished={(value) => mutation.mutate({property: 'summary', value: value})} />
          <TableCell width={150}>
              {card.status?.name}
          </TableCell>
          <EditableCell 
            intialValue={card.storyPoint} 
            onFinished={(value) => mutation.mutate({property: 'storyPoint', value: value})} 
            width={100}
            type={"number"}
          />
          <TableCell width={200}>Assigned</TableCell>
      </TableRow>
  )
}

BacklogItem.propTypes = {
    card: PropTypes.object
}

export default BacklogItem;