import { Avatar, Card, CardContent, Stack, Typography } from "@mui/material";

export default function BoardColumn({ column }) {
  return (
    <Card sx={{ width: "25%", minHeight: 300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {column.name}
        </Typography>
        <Stack mt={2} gap={2}>
          {column.cards?.map((story) => (
            <BoardItem key={story.id} story={story} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

function BoardItem({ story }) {
  return (
    <Card>
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
