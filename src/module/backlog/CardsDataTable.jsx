import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import StoryCardItem from "./StoryCardItem.jsx";
import { Add } from "@mui/icons-material";
import queryClient from "../../config/query-client.js";
import { useMutation } from "@tanstack/react-query";
import StoryService from "../story/StoryService.js";
import { useContext } from "react";
import KeyContext from "../common/KeyContext.js";
import { useParams } from "react-router-dom";

const CardsDataTable = ({ cards }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {cards.map((card) => (
            <StoryCardItem key={card.id} card={card} />
          ))}
          <BacklogAddButton cards={cards} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

function BacklogAddButton({ cards }) {
  const { key: projectId } = useParams();
  const key = useContext(KeyContext);

  const mutation = useMutation({
    mutationFn: () => StoryService.createStory(projectId, cards),
    onSuccess: (story) => {
      queryClient.setQueryData(key, [...cards, story]);
    },
  });

  return (
    <TableRow>
      <TableCell colSpan={5} sx={{ textAlign: "center" }}>
        <Button
          startIcon={<Add />}
          onClick={mutation.mutate}
          variant="contained"
        >
          New story
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default CardsDataTable;
