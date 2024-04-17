import axios from "axios";

// axios 인스턴스
const AxiosInstance = axios.create({
    baseURL:'http://localhost:8080/'
});

// 서버통신
export const AXIOS = (url, data, type) => {
    if(type == 'GET') {
        return AxiosInstance.get(url, data);
    } else if(type == 'POST') {
        return AxiosInstance.post(url, data);
    } else {
        return false;
    }
};