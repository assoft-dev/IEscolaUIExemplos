import axios from "axios";

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
       const response = await api.post('/validate', {token});
       return response.data;
    },

    loginEntrar: async (Email:string, Password: string) => {
        const response = await api.post('/usuarios/auth', { Email, Password });
        console.log(response.data);
        return response.data;
    },

    loginSair: async () => {
        const response = await api.post('/logout');
        return response.data;
    }
})