import { Avatar, Card, CardContent, Stack } from "@mui/material";
import { useDrag } from "react-dnd";
import useProject from "../../lib/hook/useProject";

export default function BoardItem({ currentColumn, story }) {
  const [, drag] = useDrag({
    type: "story",
    item: { column: currentColumn, story },
  });
  const project = useProject();

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
          <h4 style={{ margin: 0 }}>
            {project.key}-{story.id}
          </h4>
          <Avatar sx={{ width: 36, height: 36 }} alt="Avatar" />
        </Stack>
      </CardContent>
    </Card>
  );
}
