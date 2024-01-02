import { Box, Button, Stack, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import AuthenticationService from "../module/authentication/Authenticationservice";
import FormDataUtil from "../lib/utils/FormDataUtil";
import { useNavigate } from "react-router-dom";

const defaultUser = {
  username: "john_doe",
  password: "securepass1",
};

export default function LoginPage() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (event) =>
      AuthenticationService.login(FormDataUtil.extractFromEvent(event)),
    onSuccess: (data) => {
      sessionStorage.setItem("token", data.token);
      navigate("/projects");
    },
  });

  return (
    <Box
      width={"30%"}
      position={"absolute"}
      left={"50%"}
      top={"50%"}
      sx={{ transform: "translate(-50%,-50%)" }}
    >
      <h1>Welcome back</h1>

      <form onSubmit={mutation.mutate}>
        <Stack gap={3}>
          <TextField
            label="Username"
            sx={{ marginTop: 2 }}
            name="username"
            defaultValue={defaultUser.username}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            defaultValue={defaultUser.password}
          />
          <Button
            type="submit"
            sx={{ marginTop: 4, width: "50%" }}
            variant="contained"
          >
            Sign in
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
