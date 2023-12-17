import apiClient from "../../config/api-client";

const allByProjectQuery = (project) => ({
    queryKey: ['sprints', project],
    queryFn: () => apiClient.get(`projects/${project}/sprints`).then(resp => resp.data)
})

const SprintService = {
    allByProjectQuery
}

export default SprintService;