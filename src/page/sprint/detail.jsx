import { Box, CircularProgress } from "@mui/material";
import Title from "../../module/common/Title";
import { useQuery } from "@tanstack/react-query";
import SprintService from "../../module/sprint/service";
import useProject from "../../lib/hook/useProject";
import { useParams } from "react-router-dom";
import StoryService from "../../module/story/StoryService";
import KeyContext from "../../module/common/KeyContext";
import StoryCardsToolBar from "../../module/backlog/StoryCardsToolBar";
import CardsDataTable from "../../module/backlog/CardsDataTable";

const SprintDetailPage = () => {
  const project = useProject();
  const { id } = useParams();
  const { data } = useQuery(SprintService.oneQuery(project.id, id));
  const { data: cards } = useQuery(StoryService.getAllBySprintQuery(id));
  const { data: score } = useQuery(SprintService.scoreBySprint(id));

  if (!data) return <CircularProgress />;

  return (
    <Box>
      <Title title={data.sprint.name} />
      {cards ? (
        <>
          <KeyContext.Provider
            value={StoryService.getAllBySprintQuery(id).queryKey}
          >
            <StoryCardsToolBar cards={cards} score={score} />
            <CardsDataTable cards={cards} />
          </KeyContext.Provider>
        </>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default SprintDetailPage;
