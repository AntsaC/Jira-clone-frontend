import Title from "../module/common/Title.jsx";
import Box from "@mui/material/Box";
import CardsDataTable from "../module/backlog/CardsDataTable.jsx";
import {useQuery} from "@tanstack/react-query";
import BacklogService from "../module/backlog/Service.js";
import {CircularProgress} from "@mui/material";
import useProject from "../lib/hook/useProject.js";
import StoryCardsToolBar from "../module/backlog/StoryCardsToolBar.jsx";
import KeyContext from "../module/common/KeyContext.js";

const BacklogPage = () => {
  const project = useProject();
  const {data} = useQuery((BacklogService.getByProjectQuery(project.id)));
  const {data: score} = useQuery(BacklogService.getPointByProjectQuery(project.id));
    
  return (
    <Box>
      <Title title={'Product backlog'} />
      {
          data
          ? <>
              <StoryCardsToolBar cards={data} score={score} />
              <KeyContext.Provider value={['backlog', project.id]}>
                <CardsDataTable cards={data}  />
              </KeyContext.Provider>
            </>
          : <CircularProgress />
      }
    </Box>
  )
}

export default BacklogPage;