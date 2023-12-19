import apiClient from "../../config/api-client";

const allByProjectQuery = (project, query) => ({
    queryKey: ['sprints', project, query],
    queryFn: () => apiClient.get(`projects/${project}/sprints?${query}`).then(resp => resp.data)
})

const oneQuery = (projectId, id) => ({
    queryKey: ['sprint', id],
    queryFn: () => apiClient.get(`projects/${projectId}/sprints/${id}`)
    .then(resp => resp.data)
})

const scoreBySprint = (sprint) => ({
    queryKey: ['sprint', sprint, 'point'],
    queryFn: () => apiClient.get(`sprints/${sprint}/point`)
    .then(resp => resp.data)
})

const SprintService = {
    allByProjectQuery,
    oneQuery,
    scoreBySprint
}



export default SprintService;