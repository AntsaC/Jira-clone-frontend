import { useParams } from "react-router-dom";
import ProjectService from "../../module/project/Service";

export default function useProject() {
    const {key} = useParams();
    let project = ProjectService.getCurrentProject();
    if(!project) {
        project = ProjectService.getProjectByKey(key);
        ProjectService.setCurrentProject(project);
    }
    return project;
}