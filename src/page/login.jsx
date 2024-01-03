import {
  Box,
  Button,
  Card,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import AuthenticationService from "../module/authentication/Authenticationservice";
import FormDataUtil from "../lib/utils/FormDataUtil";
import { Link, useNavigate } from "react-router-dom";

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
    <div>
      <Box
        width={"30%"}
        position={"absolute"}
        left={"50%"}
        top={"50%"}
        sx={{ transform: "translate(-50%,-50%)" }}
      >
        <Card sx={{ padding: 4, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
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
                sx={{ marginTop: 4, width: "70%", alignSelf: "center" }}
                variant="contained"
              >
                {mutation.isPending ? (
                  <CircularProgress size={20} />
                ) : (
                  "Sign in"
                )}
              </Button>
              <Typography sx={{ alignSelf: "center" }}>
                New here ? <Link>Create new account</Link>
              </Typography>
            </Stack>
          </form>
        </Card>
      </Box>
    </div>
  );
}
