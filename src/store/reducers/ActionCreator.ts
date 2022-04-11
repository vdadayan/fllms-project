import {createAsyncThunk} from "@reduxjs/toolkit";
import {IFilm, IFilmResult} from "../../models/IFilm";
import {ISession, IToken} from "../../models/IAuth";
import {FilmsAPI} from "../../api/api";


export const fetchFilms = createAsyncThunk(
    'films',
    async (page: string, thunkAPI) => {
        try {
            const response = await FilmsAPI.get<IFilmResult>('movie/popular', {
                params: {
                    page
                }
            })
            return response.data

        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка запроса')
        }
    }
)
export const getVideo = createAsyncThunk(
    'video',
    async (video: number, thunkAPI) => {
        try {
            const response = await FilmsAPI.get<IFilmResult>(`movie/${video}/videos`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка запроса')
        }
    }
)

export const fetchFilmsSearch = createAsyncThunk(
    'filmsSearch',
    async (query: string, thunkAPI) => {
        try {
            const response = await FilmsAPI.get<IFilm[]>('search/movie', {
                params: {
                    query
                }
            })
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка запроса')
        }
    }
)

export const authFilm = createAsyncThunk(
    'authFilm',
    async (_, thunkAPI) => {
        try {
            const response = await FilmsAPI.get<IToken>('/authentication/token/new')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка запроса')
        }
    }
)

export const sessionFilm = createAsyncThunk(
    'sessionFilm',
    async (request_token: string, thunkAPI) => {
        try {
            const response = await FilmsAPI.post<ISession>('/authentication/session/new',{request_token})
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка запроса')
        }
    }
)

export const movieDetail = createAsyncThunk(
    'movieDetail',
    async (movie_id: number, thunkAPI) => {
        try {
            const response = await FilmsAPI.get(`movie/${movie_id}`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка запроса')

        }
    }
)

export const movieCastAction = createAsyncThunk(
    'movieCast',
    async (movie_id: number, thunkAPI) => {
        try {
            const response = await FilmsAPI.get(`movie/${movie_id}/credits`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка запроса')

        }
    }
)
