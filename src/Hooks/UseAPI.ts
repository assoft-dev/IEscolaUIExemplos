import axios from "axios";
import { LoginToken } from "../Types/Security/LoginToken";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

// api.interceptors.request.use(
//    (config) => {
//      const user = localStorage.getItem('AuthToken');
//      config.headers.Authorization = user;

//      return config;
//    },
//    (error) => {
//     return Promise.reject(Error);
//    }
// );

export const useAPI = () => ({
    validateToken: async (token: string) =>{
       const response = await api.post('/usuarios/refresh-token', {token});
       return response.data as LoginToken;
    },

    loginEntrar: async (Email:string, Password: string) => {
        const response = await api.post('/usuarios/auth', { Email, Password });
        return response.data as LoginToken;
    },

    loginSair: async () => {
        const response = await api.post('/logout');
        return response.data;
    }
})