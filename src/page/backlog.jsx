import Title from "../module/common/Title.jsx";
import Box from "@mui/material/Box";
import CardsDataTable from "../module/backlog/CardsDataTable.jsx";
import { useQuery } from "@tanstack/react-query";
import BacklogService from "../module/backlog/Service.js";
import { CircularProgress } from "@mui/material";
import StoryCardsToolBar from "../module/backlog/StoryCardsToolBar.jsx";
import KeyContext from "../module/common/KeyContext.js";
import SelectionProvider from "../module/common/provider/SelectionProvider.jsx";
import { useParams } from "react-router-dom";

const BacklogPage = () => {
  const { key } = useParams();
  const { data } = useQuery(BacklogService.getByProjectQuery(key));
  const { data: score } = useQuery(BacklogService.getPointByProjectQuery(key));

  let renderedElement;
  if (data) {
    renderedElement = (
      <SelectionProvider>
        <KeyContext.Provider value={["backlog", key]}>
          <StoryCardsToolBar cards={data} score={score} />
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
