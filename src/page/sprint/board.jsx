import { Box } from "@mui/material";
import Title from "../../module/common/Title";
import BoardContainer from "../../module/board/BoardsContainer";
import { useState } from "react";

const data = {
  columns: [
    {
      id: 1,
      name: "TODO",
      cards: [
        {
          id: 1,
          summary: "First",
        },
        {
          id: 2,
          summary: "First 2",
        },
        {
          id: 3,
          summary: "First 3",
        },
        {
          id: 4,
          summary: "First",
        },
        {
          id: 5,
          summary: "First",
        },
      ],
    },
    {
      id: 2,
      name: "IN PROGRESS",
      cards: [],
    },
    {
      id: 3,
      name: "DONE",
      cards: [],
    },
  ],
};

export default function BoardPage() {
  const [board, setBoard] = useState(data);

  const handleOnDrop = (column, item) => {
    const newBoard = { ...board };
    column = newBoard.columns.find((c) => column.id === c.id);
    column.cards.push(item.story);
    const prevColumn = newBoard.columns.find((c) => c.id === item.column.id);
    prevColumn.cards = prevColumn.cards.filter(
      (story) => story.id != item.story.id
    );
    setBoard(newBoard);
  };

  return (
    <Box>
      <Title title={"Sprint board"} />
      <BoardContainer board={board} onDrop={handleOnDrop} />
    </Box>
  );
}
