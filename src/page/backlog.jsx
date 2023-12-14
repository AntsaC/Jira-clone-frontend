import Title from "../module/common/Title.jsx";
import Box from "@mui/material/Box";
import BacklogDataList from "../module/backlog/BacklogDataList.jsx";
import {useQuery} from "@tanstack/react-query";
import BacklogService from "../module/backlog/Service.js";
import {CircularProgress} from "@mui/material";
import ProjectService from "../module/project/Service.js";
import { useParams } from "react-router-dom";
import useProject from "../lib/hook/useProject.js";

const BacklogPage = () => {
  const project = useProject();
  const {data} = useQuery((BacklogService.getByProjectQuery(project.id)));
    
  return (
    <Box>
      <Title title={'Product backlog'} />
      {
          data
          ? <BacklogDataList cards={data} />
          : <CircularProgress />
      }
    </Box>
  )
}

export default BacklogPage;