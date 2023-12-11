import Box from "@mui/material/Box";
import Title from "../module/common/Title.jsx";
import {useQuery} from "@tanstack/react-query";
import ProjectService from "../module/project/Service.js";
import ProjectDataGrid from "../module/project/ProjectDataGrid.jsx";



const ProjectPage = () => {
    const {data} = useQuery(ProjectService.allQuery);

  return (
      <Box>
        <Title title={"All your projects"} />
          <ProjectDataGrid project={data} />
      </Box>
  )
}

export default ProjectPage;