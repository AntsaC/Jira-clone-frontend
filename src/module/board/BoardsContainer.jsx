import { Stack } from "@mui/material";
import BoardColumn from "./BoardColumn";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function BoardContainer({ board, onDrop }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Stack direction={"row"} gap={3} marginTop={2}>
        {board.columns.map((column) => (
          <BoardColumn key={column.name} column={column} onDrop={onDrop} />
        ))}
      </Stack>
    </DndProvider>
  );
}
