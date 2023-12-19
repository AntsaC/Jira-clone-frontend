import { Box, Chip, Stack } from "@mui/material";
import BasicMenu from "../common/BasicMenu";

const StoryCardsToolBar = ({ cards, score }) => {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <h5>
        <span style={{ fontWeight: "bold" }}>Total stories: </span>{" "}
        {cards.length}
      </h5>
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <span style={{ fontWeight: "bold" }}>Story points</span>
        <Stack direction={"row"} spacing={1}>
          <Chip label={score?.todo} />
          <Chip label={score?.in_progress} color="info" />
          <Chip label={score?.done} color="success" />
        </Stack>
        <MoveOnButton />
      </Stack>
    </Box>
  );
};

function MoveOnButton() {
  return (
    <BasicMenu
      id={"move"}
      primary={"Move on"}
      items={[
        {
          label: "Sprint 1",
        },
        {
          label: "Sprint 2",
        },
        {
          label: "Sprint 3",
        },
      ]}
    />
  );
}

export default StoryCardsToolBar;
