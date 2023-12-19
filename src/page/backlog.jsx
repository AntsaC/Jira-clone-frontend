import Title from "../module/common/Title.jsx";
import Box from "@mui/material/Box";
import CardsDataTable from "../module/backlog/CardsDataTable.jsx";
import { useQuery } from "@tanstack/react-query";
import BacklogService from "../module/backlog/Service.js";
import { CircularProgress } from "@mui/material";
import useProject from "../lib/hook/useProject.js";
import StoryCardsToolBar from "../module/backlog/StoryCardsToolBar.jsx";
import KeyContext from "../module/common/KeyContext.js";
import SelectionProvider from "../module/common/provider/SelectionProvider.jsx";

const BacklogPage = () => {
  const project = useProject();
  const { data } = useQuery(BacklogService.getByProjectQuery(project.id));
  const { data: score } = useQuery(
    BacklogService.getPointByProjectQuery(project.id)
  );

  let renderedElement;
  if (data) {
    renderedElement = (
      <SelectionProvider>
        <StoryCardsToolBar cards={data} score={score} />
        <KeyContext.Provider value={["backlog", project.id]}>
          <CardsDataTable cards={data} />
        </KeyContext.Provider>
      </SelectionProvider>
    );
  } else {
    <CircularProgress />;
  }

  return (
    <Box>
      <Title title={"Product backlog"} />
      {renderedElement}
    </Box>
  );
};

export default BacklogPage;
