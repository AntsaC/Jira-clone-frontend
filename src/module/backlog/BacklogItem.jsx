import {MenuItem, Select, TableCell, TableRow} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import StoryService from "../story/StoryService";
import queryClient from "../../config/query-client";
import EditableCell from "../common/EditableCell";
import ProjectService from "../project/Service";
import { useState } from "react";
import { useParams } from "react-router-dom";

const BacklogItem = ({card}) => {
  const {key} = useParams();  
  const mutation = useMutation({
    mutationFn: (partialStory) => StoryService.partialUpdateStory(card.id, partialStory),
    onSuccess: updatedStory => {
        const cards = queryClient.getQueryData(ProjectService.createKeyByProject('backlog'));
        const updatedCards = cards.map(story => {
            if(story.id === updatedStory.id) {
                console.log(story);
                if(story.storyPoint !== updatedStory.storyPoint || story.status?.id !== updatedStory.status.id ) {
                    queryClient.invalidateQueries(ProjectService.createKeyByProject('backlog-point'))
                }
                return updatedStory;
            }
            return story;
        });
        queryClient.setQueryData(ProjectService.createKeyByProject('backlog'), updatedCards);
        
    }
  })

  const [status, setStatus] = useState(card.status?.id);
  const {data: statuses} = useQuery(StoryService.getAllStatusQuery);

  function handleOnStatusChange(e) {
    setStatus(e.target.value)
    mutation.mutate({
        property: 'status',
        value: Number(e.target.value)
    })
  }

  return (
      <TableRow>
          <TableCell width={100}>
              {key}-{card.id}
          </TableCell>
          <EditableCell intialValue={card.summary} onFinished={(value) => mutation.mutate({property: 'summary', value: value})} />
          <TableCell width={150}>
              <Select
                size="small"
                value={status}
                onChange={handleOnStatusChange}
                fullWidth
              >
                {
                    statuses && 
                    statuses.map(s => (
                        <MenuItem  key={s.id} value={s.id}>{s.name}</MenuItem>
                    ))
                }
              </Select>
          </TableCell>
          <EditableCell 
            intialValue={card.storyPoint ?? '_'} 
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