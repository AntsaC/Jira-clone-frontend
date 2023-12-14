import Title from "../module/common/Title.jsx";
import Box from "@mui/material/Box";
import BacklogDataList from "../module/backlog/BacklogDataList.jsx";
import {useQuery} from "@tanstack/react-query";
import BacklogService from "../module/backlog/Service.js";
import {CircularProgress} from "@mui/material";
import { BacklogContext, BacklogDispatchContext } from "../module/backlog/TaskContext.js";
import { useEffect, useReducer } from "react";
import backlogReducer from "../module/backlog/TaskReducer.js";

const BacklogPage = () => {

  const {data} = useQuery((BacklogService.getByProjectQuery(1)));
    
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