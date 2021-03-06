import {createAsyncThunk} from "@reduxjs/toolkit";
import {IFilm, IFilmResult} from "../../models/IFilm";
import {FilmsAPI} from "../../api/api";


export const fetchFilms = createAsyncThunk(
    'films',
    async (page: string, thunkAPI) => {
        try {
            const response = await FilmsAPI.get<IFilmResult>('movie/popular', {
                params: {page}
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
