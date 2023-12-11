import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.SYMFONY_API_URL
});

export default apiClient;