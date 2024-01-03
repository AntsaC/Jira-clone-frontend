import Box from "@mui/material/Box";
import Title from "../module/common/Title.jsx";
import { useQuery } from "@tanstack/react-query";
import ProjectService from "../module/project/Service.js";
import ProjectDataGrid from "../module/project/ProjectDataGrid.jsx";
import NewItemButton from "../module/common/NewItemButton.jsx";
import { useState } from "react";
import ProjectFormDialog from "../module/project/ProjectFormDialog.jsx";
import { Stack } from "@mui/material";
import ProjectFilter from "../module/project/ProjectFilter.jsx";

const initialProject = {
  name: "Test",
  key: "KEY",
  type: {
    id: 1,
  },
};

const ProjectPage = () => {
  const { data } = useQuery(ProjectService.allQuery);
  const [project, setProject] = useState();

  return (
    <Box marginTop={1}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginBottom={1}
      >
        <Title title={"Your projects"} />
        <NewItemButton
          onClick={() => setProject(initialProject)}
          primary={"New project"}
        />
      </Stack>
      <ProjectFilter />
      <ProjectDataGrid project={data} onEditProject={setProject} />
      <ProjectFormDialog project={project} onCancel={() => setProject(null)} />
    </Box>
  );
};

export default ProjectPage;
