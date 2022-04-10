import axios, {AxiosInstance} from "axios";
export const api_key = 'd0bdef49e793d75e3f23d69e1ad233b3'


export const FilmsAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key
    }
})
