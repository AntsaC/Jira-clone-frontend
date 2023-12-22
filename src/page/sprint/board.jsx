import { Box, CircularProgress } from "@mui/material";
import Title from "../../module/common/Title";
import BoardContainer from "../../module/board/BoardsContainer";
import { useQuery } from "@tanstack/react-query";
import BoardService from "../../module/board/BoardService";
import { useParams } from "react-router-dom";
import queryClient from "../../config/query-client";

export default function BoardPage() {
  const { id } = useParams();
  const { data: board } = useQuery(BoardService.boardBySprint(id));

  const handleOnDrop = (column, item) => {
    const newBoard = { ...board };
    column = newBoard.columns.find((c) => column.id === c.id);
    column.cards.push(item.story);
    const prevColumn = newBoard.columns.find((c) => c.id === item.column.id);
    prevColumn.cards = prevColumn.cards.filter(
      (story) => story.id != item.story.id
    );
    queryClient.setQueryData(BoardService.boardBySprint(id).queryKey, newBoard);
  };

  return (
    <Box>
      <Title title={"Sprint board"} />
      {board ? (
        <BoardContainer board={board} onDrop={handleOnDrop} />
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
}
