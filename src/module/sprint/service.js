import apiClient from "../../config/api-client";

const allByProjectQuery = (project, query) => ({
    queryKey: ['sprints', project, query],
    queryFn: () => apiClient.get(`projects/${project}/sprints?${query}`).then(resp => resp.data)
})

const SprintService = {
    allByProjectQuery
}



export default SprintService;