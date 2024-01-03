import Title from "../common/Title";
("../../module/common/Title");
import { Button, Stack, Typography } from "@mui/material";

export default function SprintHeader({ sprint }) {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Title title={sprint?.sprint.name + " board"} />
      <Stack direction={"row"} alignItems={"center"} gap={2}>
        <Typography variant="h6">1 day remaining</Typography>
        <Button variant="contained" color="secondary">
          Edit sprint
        </Button>
      </Stack>
    </Stack>
  );
}
