import apiClient from "../../config/api-client.js";

const getByProjectQuery = (projectId) => (
    {
        queryKey: ['backlog', projectId],
        queryFn: () => apiClient.get(`projects/${projectId}/backlog`).then(resp => resp.data.cards)
    }
)

const getPointByProjectQuery = (projectId) => ({
    queryKey: ['backlog', projectId, 'point'],
    queryFn: () => apiClient.get(`projects/${projectId}/point`).then(resp => resp.data)
})

const BacklogService = {
    getByProjectQuery,
    getPointByProjectQuery
}

export default BacklogService;