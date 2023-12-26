import { useParams } from "react-router-dom";
import ProjectService from "../../module/project/Service";
import { useQuery } from "@tanstack/react-query";

export default function useProject() {
    const {key} = useParams();
    const {data: project} = useQuery(ProjectService.oneByKeyQuery(key));
    return project ?? {};
}