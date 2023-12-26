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

const oneByKeyQuery = (key) => ({
  queryKey: ['projects', key],
  queryFn: () => apiClient.get(`projects/${key}`).then(resp => resp.data)  
})



const submitProject = (project) =>
    project.id
        ? apiClient.put('projects/'+project.id, project)
        : apiClient.post('projects', project);

const ProjectService = {
    allQuery,
    allTypeQuery,
    submitProject,
    oneByKeyQuery
}

export default ProjectService;