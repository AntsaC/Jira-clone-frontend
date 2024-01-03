import { KeyboardArrowDown } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";

export default function ToolbarLink() {
  return (
    <Stack marginLeft={5} direction={"row"} alignItems={"center"} gap={1}>
      <Button endIcon={<KeyboardArrowDown />}>Projects</Button>
      <Button endIcon={<KeyboardArrowDown />}>Teams</Button>
    </Stack>
  );
}
