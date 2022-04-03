import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IFilm, IFilmResult} from "../models/IFilm";
import {api_key} from "./AuthService";


export const filmsApi = createApi({
    reducerPath: 'films',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
    endpoints: (build) => ({
        getTopRated: build.query<IFilmResult, string>({
            query: (arg) => ({
                url: '/movie/popular',
                params: {
                    api_key: api_key
                }
            })
        })
    })
})
