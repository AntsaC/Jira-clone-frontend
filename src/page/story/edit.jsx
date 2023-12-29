import { Box, Stack } from "@mui/material";
import Title from "../../module/common/Title";
import StoryForm from "../../module/backlog/StoryForm";
import { useQuery } from "@tanstack/react-query";
import StoryService from "../../module/story/StoryService";
import { useParams } from "react-router-dom";

export default function EditStoryPage() {
  const { key, id } = useParams();
  const { data: story } = useQuery(StoryService.getOneByIdQuery(key, id));
  return (
    <Box>
      <Title title={"Edit story " + story?.id} />
      <Stack direction={"row"} gap={4}>
        {story && <StoryForm story={story} />}
        <Box flex={1}>CRITERIA LIST</Box>
      </Stack>
    </Box>
  );
}
