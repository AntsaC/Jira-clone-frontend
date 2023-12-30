import apiClient from "../../config/api-client";
import queryClient from "../../config/query-client";

const getAllCriteriaByStoryQuery = (storyId) => ({
  queryKey: ['stories', storyId, 'criteria'],
  queryFn: () => apiClient.get(`user-stories/${storyId}/criteria`).then(resp => resp.data)  
})

const updateCriteria = (storyId, id, criteria) => 
apiClient.put(`user-stories/${storyId}/criteria/${id}`, criteria)
.then(resp => resp.data);

const replaceCriteria = (storyId, criteria) => {
  queryClient.setQueryData(
  getAllCriteriaByStoryQuery(storyId).queryKey,
  (criterias) => {
    return criterias.map(c => {
      if(c.id === criteria.id) {
        return criteria;
      }
      else
        return c
    })
  })
}

const CriteriaService = {
    updateCriteria,
    replaceCriteria,
    getAllCriteriaByStoryQuery
}

export default CriteriaService;