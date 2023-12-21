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

const submitSprint = (project, sprint) => 
sprint.id
? apiClient.put(`projects/${project}/sprints/${sprint.id}`, sprint)
: apiClient.post(`projects/${project}/sprints`, sprint)

const renderStatusColor = (status) => {
    switch (status) {
        case 'complete':
            return 'success'
        case 'future':
            return 'info'
        default:
            break;
    }
}

const SprintService = {
    allByProjectQuery,
    oneQuery,
    scoreBySprint,
    submitSprint,
    renderStatusColor
}



export default SprintService;