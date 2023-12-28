import { Box, Chip, Stack } from "@mui/material";
import BasicMenu from "../common/BasicMenu";
import { useQuery } from "@tanstack/react-query";
import SprintService from "../sprint/service";
import StoryService from "../story/StoryService";
import {
  useSelected,
  useSelectedDispatch,
} from "../common/provider/SelectionProvider";
import { useContext } from "react";
import KeyContext from "../common/KeyContext";
import { useParams } from "react-router-dom";

const storyPointChipColor = [undefined, "info", "success"];

const StoryCardsToolBar = ({ cards, score }) => {
  const selected = useSelected();

  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <h5>
        <span style={{ fontWeight: "bold" }}>Total stories: </span>{" "}
        {cards.length}
      </h5>
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <span style={{ fontWeight: "bold" }}>Story points</span>
        <Stack direction={"row"} spacing={1}>
          {score?.map((s, index) => (
            <Chip
              key={s.status}
              label={s.point ?? "_"}
              color={storyPointChipColor[index]}
            />
          ))}
        </Stack>
        {selected && <MoveOnButton />}
      </Stack>
    </Box>
  );
};

function MoveOnButton() {
  const { key } = useParams();
  const { data } = useQuery(
    SprintService.allByProjectQuery(key, "status=ongoing")
  );
  const selected = useSelected();
  const selectedDispatch = useSelectedDispatch();
  const queryKey = useContext(KeyContext);

  const mapSprintsData = () => {
    if (data) {
      return data.map((item) => {
        return {
          label: item.sprint.name,
          onClick: () => {
            StoryService.moveOn({
              sprint: item.sprint.id,
              stories: selected,
              queryKey: queryKey,
            }).then(() => {
              selectedDispatch({
                type: "init",
              });
            });
          },
        };
      });
    }
  };

  return (
    <BasicMenu
      id={"move"}
      primary={"Move on"}
      items={mapSprintsData()}
      props={{
        disabled: selected.length === 0,
      }}
    />
  );
}

export default StoryCardsToolBar;
