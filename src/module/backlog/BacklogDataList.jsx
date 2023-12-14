import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import BacklogItem from "./BacklogItem.jsx";
import { Add } from "@mui/icons-material";
import queryClient from "../../config/query-client.js";
import { useMutation, useQuery } from "@tanstack/react-query";
import BacklogService from "./Service.js";
import StoryService from "../story/StoryService.js";

const BacklogDataList = ({cards}) => {

  return (
      <TableContainer component={Paper}>
          <Table>
              <TableBody>
                  {cards.map(card => (
                    <BacklogItem key={card.id} card={card} />
                  ))}
                  <BacklogAddButton />
              </TableBody>
          </Table>
      </TableContainer>
  )
}

function BacklogAddButton() {
    const data = queryClient.getQueryData(['backlog', 1]);

    const mutation = useMutation({
        mutationFn: () => StoryService.createStory(1, data),
        onSuccess: (story) => {
            queryClient.setQueryData(['backlog', 1], [...data, story]) 
        }
    })
    
    return (
        <TableRow>
            <TableCell colSpan={5} sx={{textAlign: 'center'}}>
                <Button startIcon={<Add/>} onClick={mutation.mutate} variant="contained">New story</Button>
            </TableCell>
        </TableRow>
    )
}


export default BacklogDataList;