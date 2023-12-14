import apiClient from "../../config/api-client";

const createStory = (projectId, cards) => {
    const lastStory = getLastStory(cards);
    const newStory = {
        summary: '',
        previous: lastStory
    }
    return apiClient.post(`projects/${projectId}/user-stories`, newStory).then(resp => resp.data);
}

const partialUpdateStory = (storyId, partialStory) => 
apiClient.patch(`user-stories/${storyId}`, partialStory).then(resp => resp.data);

const getLastStory = (cards) => {
    return cards[cards.length - 1];
}

const StoryService = {
    createStory,
    partialUpdateStory
}

export default StoryService;