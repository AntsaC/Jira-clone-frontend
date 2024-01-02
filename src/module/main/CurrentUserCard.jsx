import { Avatar, Stack } from "@mui/material";

export default function CurrentUserCard() {
  return (
    <Stack direction={"row"} gap={2} alignItems={"center"} marginLeft={"auto"}>
      <Avatar />
      <h4>Antsa</h4>
    </Stack>
  );
}
