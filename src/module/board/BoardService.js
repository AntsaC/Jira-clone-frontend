import apiClient from "../../config/api-client";


const boardBySprint = (sprint) => ({
  queryKey: ['sprints',sprint,'board'],
  queryFn: () =>  apiClient.get(`sprints/${sprint}/board`).then(resp =>resp.data) 
})

const BoardService = {
    boardBySprint
};

export default BoardService;