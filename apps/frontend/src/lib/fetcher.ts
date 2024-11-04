import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL || '/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.defaults.headers.common['Authorization'] = "AUTH_TOKEN";

export default axiosInstance;
