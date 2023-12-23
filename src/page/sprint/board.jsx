import { Box, CircularProgress } from "@mui/material";
import Title from "../../module/common/Title";
import BoardContainer from "../../module/board/BoardsContainer";
import { useQuery } from "@tanstack/react-query";
import BoardService from "../../module/board/BoardService";
import { useParams } from "react-router-dom";
import StoryService from "../../module/story/StoryService";
import queryClient from "../../config/query-client";

export default function BoardPage() {
  const { id } = useParams();
  const { data: board } = useQuery(BoardService.boardBySprint(id));

  const handleOnDrop = (column, item) => {
    StoryService.partialUpdateStory(item.story.id, {
      property: "status",
      value: column.id,
    }).then(() => {
      queryClient.setQueryData(
        BoardService.boardBySprint(id).queryKey,
        (prevBoard) => {
          let newColumns = prevBoard.columns.map((c) => {
            if (c.id === column.id) {
              return {
                ...c,
                cards: [...c.cards, item.story],
              };
            } else if (c.id === item.column.id) {
              return {
                ...c,
                cards: c.cards.filter((s) => s.id !== item.story.id),
              };
            }
            return c;
          });
          return {
            columns: newColumns,
          };
        }
      );
      queryClient.invalidateQueries({
        queryKey: ["sprint", id],
      });
    });
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
