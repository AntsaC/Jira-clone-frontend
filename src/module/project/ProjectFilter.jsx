import { Search } from "@mui/icons-material";
import { InputAdornment, Stack, TextField } from "@mui/material";

export default function ProjectFilter() {
  return (
    <Stack direction={"row"} alignItems={"center"} marginTop={2}>
      <form>
        <TextField
          placeholder="Search projects"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </form>
    </Stack>
  );
}
