import apiClient from "../../config/api-client.js";
import queryClient from "../../config/query-client.js";

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

const createKeyByProject = (key) => 
[key, getCurrentProject().id];

const getProjectByKey = (projectKey) => {
    const data = queryClient.getQueryData(['projects']);
    if(data) {
        return data.find(p => p.key == projectKey);
    }  else {
        return {
            id: 1,
            key: 'PD1'
        }
    }
}

const setCurrentProject = (project) => {
    queryClient.setQueryData(['current-project'], project);
}

const getCurrentProject = () => 
queryClient.getQueryData(['current-project'])

const submitProject = (project) =>
    project.id
        ? apiClient.put('projects/'+project.id, project)
        : apiClient.post('projects', project);

const ProjectService = {
    allQuery,
    allTypeQuery,
    submitProject,
    getProjectByKey,
    setCurrentProject,
    getCurrentProject,
    createKeyByProject
}

export default ProjectService;