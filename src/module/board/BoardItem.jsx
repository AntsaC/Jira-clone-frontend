import { Avatar, Card, CardContent, Stack } from "@mui/material";
import { useDrag } from "react-dnd";

export default function BoardItem({ currentColumn, story }) {
  const [, drag] = useDrag({
    type: "story",
    item: { column: currentColumn, story },
  });

  return (
    <Card ref={drag}>
      <CardContent>
        {story.summary}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginTop={1}
        >
          <h4 style={{ margin: 0 }}>ID</h4>
          <Avatar sx={{ width: 36, height: 36 }} alt="Avatar" />
        </Stack>
      </CardContent>
    </Card>
  );
}
