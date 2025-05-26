import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // ajuste se necessário
});

// Adiciona o token automaticamente em todas as requisições
axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;