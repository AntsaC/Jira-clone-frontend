import apiClient from "../../config/api-client.js";

const allQuery = {
    queryKey: ['projects'],
    queryFn: () => apiClient.get('projects').then(resp => resp.data)
}

const allTypeQuery = {
    queryKey: ['project-types'],
    queryFn: () => new Promise((resolve) => {
        resolve([
            {
                id: 1,
                name: 'Type 1'
            },
            {
                id: 2,
                name: 'Type 2'
            },
            {
                id: 3,
                name: 'Type 3'
            }
        ])
    })
}

const submitProject = (project) =>
    apiClient.post('projects', project);

const ProjectService = {
    allQuery,
    allTypeQuery,
    submitProject
}

export default ProjectService;