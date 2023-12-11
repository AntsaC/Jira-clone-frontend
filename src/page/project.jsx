import Box from "@mui/material/Box";
import Title from "../module/common/Title.jsx";
import {useQuery} from "@tanstack/react-query";
import ProjectService from "../module/project/Service.js";
import ProjectDataGrid from "../module/project/ProjectDataGrid.jsx";
import NewItemButton from "../module/common/NewItemButton.jsx";
import {useState} from "react";
import ProjectFormDialog from "../module/project/ProjectFormDialog.jsx";

const initialProject = {
    name: 'Test',
    key: 'KEY',
    type: {
        id: 1
    }
};

const ProjectPage = () => {
    const {data} = useQuery(ProjectService.allQuery);
    const [project, setProject] = useState();

    return (
        <Box>
            <Title title={"All your projects"}/>
            <Box display={'flex'} justifyContent={'flex-end'}>
                <NewItemButton onClick={() => setProject(initialProject)} primary={'New project'}/>
            </Box>
            <ProjectDataGrid project={data}/>
            <ProjectFormDialog project={project} onCancel={() => setProject(null)} />
        </Box>
    )
}

export default ProjectPage;