import { Avatar, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import AuthenticationService from "../authentication/Authenticationservice";

export default function CurrentUserCard() {
  const { data: user } = useQuery(AuthenticationService.getCurrentUserQuery);

  if (user) {
    return (
      <Stack
        direction={"row"}
        gap={2}
        alignItems={"center"}
        marginLeft={"auto"}
      >
        <Avatar />
        <Typography variant="h6" component="div">
          {user?.username}
        </Typography>
      </Stack>
    );
  }
}
