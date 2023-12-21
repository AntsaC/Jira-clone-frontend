import { Stack } from "@mui/material";
import BoardColumn from "./BoardColumn";

export default function BoardContainer({ board }) {
  return (
    <Stack direction={"row"} gap={3}>
      {board.columns.map((column) => (
        <BoardColumn key={column.name} column={column} />
      ))}
    </Stack>
  );
}
