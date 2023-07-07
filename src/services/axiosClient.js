import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.response.use((res) => res.data);

export default axiosClient;
