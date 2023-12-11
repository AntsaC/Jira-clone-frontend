import apiClient from "../../config/api-client.js";

const allQuery = {
    queryKey: ['projects'],
    queryFn: () => apiClient.get('projects').then(resp => resp.data)
}

const ProjectService = {
    allQuery
}

export default ProjectService;