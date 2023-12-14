import apiClient from "../../config/api-client.js";

const getByProjectQuery = (projectId) => (
    {
        queryKey: ['backlog', projectId],
        queryFn: () => apiClient.get(`projects/${projectId}/backlog`).then(resp => resp.data.cards)
    }
)

const BacklogService = {
    getByProjectQuery
}

export default BacklogService;