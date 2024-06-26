import axios from 'axios';

let headers = {
    'Content-Type': 'application/json',    
};

const axiosInstance = axios.create({
    headers: headers,    
});

axios.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosInstance;
