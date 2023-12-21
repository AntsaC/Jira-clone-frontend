import { Box } from "@mui/material";
import Title from "../../module/common/Title";
import BoardContainer from "../../module/board/BoardsContainer";

const data = {
  columns: [
    {
      name: "TODO",
      cards: [
        {
          summary: "First",
        },
        {
          summary: "First",
        },
        {
          summary: "First",
        },
        {
          summary: "First",
        },
        {
          summary: "First",
        },
      ],
    },
    {
      name: "IN PROGRESS",
    },
    {
      name: "DONE",
    },
  ],
};

export default function BoardPage() {
  return (
    <Box>
      <Title title={"Sprint board"} />
      <BoardContainer board={data} />
    </Box>
  );
}
