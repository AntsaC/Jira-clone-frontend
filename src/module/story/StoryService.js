import apiClient from "../../config/api-client";
import queryClient from "../../config/query-client";

const createStory = (projectId, cards, sprintId) => {
    const lastStory = getLastStory(cards);
    const newStory = {
        summary: '',
        previous: lastStory,
        sprint: {
            id: Number(sprintId)
        }
    }
    return apiClient.post(`projects/${projectId}/user-stories`, newStory).then(resp => resp.data);
}

const partialUpdateStory = (storyId, partialStory) => 
apiClient.patch(`user-stories/${storyId}`, partialStory).then(resp => resp.data);

const getLastStory = (cards) => {
    return cards[cards.length - 1];
}

const getAllStatusQuery = {
    queryKey: ['stories-status'],
    queryFn: () => apiClient.get('api/story_statuses').then(resp => resp.data['hydra:member'])
}

const moveOn = async ({sprint, stories, queryKey}) => {
    const resp = await apiClient.put('user-stories/move', {sprint, stories});
    if(resp.status == 204) {
        let currentStories = queryClient.getQueryData(queryKey);
        currentStories = currentStories.filter(story => !stories.includes(story.id));
        queryClient.setQueryData(queryKey, currentStories);
        queryClient.invalidateQueries([queryKey, 'point'])
        queryClient.invalidateQueries(['sprint', sprint,'stories']);
        queryClient.invalidateQueries(['sprint', sprint,'point']);
    }
}

const getAllBySprintQuery = (sprint) => ({
  queryKey: ['sprint', sprint, 'stories'],
  queryFn: () => apiClient.get(`sprints/${sprint}/stories`).then(resp => resp.data)  
})

const getColorByStatus = (storyStatus) => {
    switch (storyStatus) {
        case 'TODO':
            return "grey"
        case 'IN PROGRESS':
            return "blue"
        case 'DONE':
            return "green"
        default:
            break;
    }
};

const StoryService = {
    createStory,
    partialUpdateStory,
    getAllStatusQuery,
    moveOn,
    getAllBySprintQuery,
    getColorByStatus
}

export default StoryService;