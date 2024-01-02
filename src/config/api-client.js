import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.SYMFONY_API_URL,
});

apiClient.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default apiClient;