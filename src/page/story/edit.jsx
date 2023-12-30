import { Box, Stack } from "@mui/material";
import Title from "../../module/common/Title";
import StoryForm from "../../module/backlog/StoryForm";
import { useQuery } from "@tanstack/react-query";
import StoryService from "../../module/story/StoryService";
import { useParams } from "react-router-dom";
import StoryCriteriaList from "../../module/backlog/StoryCriteriaList";
import CriteriaService from "../../module/story/CriteriaService";

export default function EditStoryPage() {
  const { key, id } = useParams();
  const { data: story } = useQuery(StoryService.getOneByIdQuery(key, id));
  const { data: criteria } = useQuery(
    CriteriaService.getAllCriteriaByStoryQuery(id)
  );

  return (
    <Box>
      <Title title={"Edit story " + story?.id} />
      <Stack direction={"row"} gap={4}>
        {story && <StoryForm story={story} />}
        <StoryCriteriaList criteria={criteria} />
      </Stack>
    </Box>
  );
}
