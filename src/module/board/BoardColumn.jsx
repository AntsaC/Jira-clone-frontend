import { Card, CardContent, Stack, Typography } from "@mui/material";
import BoardItem from "./BoardItem";
import { useDrop } from "react-dnd";

export default function BoardColumn({ column, onDrop }) {
  const [, drop] = useDrop({
    accept: "story",
    drop: (item) => onDrop(column, item),
  });

  return (
    <Card ref={drop} sx={{ width: "25%", minHeight: 300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {column.name}
        </Typography>
        <Stack mt={2} gap={2}>
          {column.cards?.map((story) => (
            <BoardItem key={story.id} story={story} currentColumn={column} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
