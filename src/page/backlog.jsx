import Title from "../module/common/Title.jsx";
import Box from "@mui/material/Box";
import BacklogDataList from "../module/backlog/BacklogDataList.jsx";
import {useQuery} from "@tanstack/react-query";
import BacklogService from "../module/backlog/Service.js";
import {CircularProgress} from "@mui/material";
import useProject from "../lib/hook/useProject.js";
import StoryCardsToolBar from "../module/backlog/StoryCardsToolBar.jsx";

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
              <BacklogDataList cards={data} />
            </>
          : <CircularProgress />
      }
    </Box>
  )
}

export default BacklogPage;