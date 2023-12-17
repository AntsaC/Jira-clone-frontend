import { Box, CircularProgress } from "@mui/material";
import Title from "../module/common/Title.jsx";
import { useQuery } from "@tanstack/react-query";
import SprintService from "../module/sprint/service.js";
import useProject from "../lib/hook/useProject.js";
import SprintDataTable from "../module/sprint/SprintDataTable.jsx";


export default function SprintPage() {
    const {data} = useQuery(SprintService.allByProjectQuery(useProject().id))

    return (
        <Box>
            <Title title={'Sprints'} />
            {
                data
                ? <SprintDataTable sprints={data} />
                : <CircularProgress />
            }
        </Box>
    )
}