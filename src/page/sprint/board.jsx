import { Box, CircularProgress } from "@mui/material";
import BoardContainer from "../../module/board/BoardsContainer";
import { useQuery } from "@tanstack/react-query";
import BoardService from "../../module/board/BoardService";
import { useParams } from "react-router-dom";
import StoryService from "../../module/story/StoryService";
import queryClient from "../../config/query-client";
import SprintService from "../../module/sprint/service";
import SprintHeader from "../../module/sprint/SprintHeader";

export default function BoardPage() {
  const { id, key } = useParams();
  const { data: board } = useQuery(BoardService.boardBySprint(id));
  const { data: sprint } = useQuery(SprintService.oneQuery(key, id));

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
      <SprintHeader sprint={sprint} />
      {board ? (
        <BoardContainer board={board} onDrop={handleOnDrop} />
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
}
