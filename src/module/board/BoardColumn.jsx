import { Card, CardContent, Stack, Typography } from "@mui/material";
import BoardItem from "./BoardItem";
import { useDrop } from "react-dnd";

export default function BoardColumn({ column, onDrop }) {
  const [, drop] = useDrop({
    accept: "story",
    drop: (item) => onDrop(column, item),
  });

  return (
    <Card
      ref={drop}
      sx={{ width: "25%", minHeight: 300, backgroundColor: "#F4F5F7" }}
    >
      <CardContent>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            fontWeight={600}
            gutterBottom
          >
            {column.name}
          </Typography>
          <p>{column.cards?.length}</p>
        </Stack>

        <Stack mt={2} gap={2}>
          {column.cards?.map((story) => (
            <BoardItem key={story.id} story={story} currentColumn={column} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
