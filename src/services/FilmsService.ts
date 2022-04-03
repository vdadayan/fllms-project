import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IFilm} from "../models/IFilm";
import {api_key} from "./AuthService";


export const filmsApi = createApi({
    reducerPath: 'films',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
    endpoints: (build) => ({
        getTopRated: build.query<IFilm, IFilm>({
            query: () => ({
                url: '/movie/popular',
                params: {
                    api_key: api_key
                }
            })
        })
    })
})
