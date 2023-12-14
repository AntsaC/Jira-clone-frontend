import apiClient from "../../config/api-client";

const createStory = (projectId, cards) => {
    const lastStory = getLastStory(cards);
    const newStory = {
        summary: '',
        previous: lastStory
    }
    return apiClient.post(`projects/${projectId}/user-stories`, newStory);
}

const getLastStory = (cards) => {
    return cards[cards.length - 1];
}

const StoryService = {
    createStory
}

export default StoryService;