import { Avatar, Stack } from "@mui/material";
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
        <h4>{user?.username}</h4>
      </Stack>
    );
  }
}
