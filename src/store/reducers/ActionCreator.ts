import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IFilm, IFilmResult} from "../../models/IFilm";
import {IToken} from "../../models/IAuth";
import {api_key} from "../../services/AuthService";


export const fetchFilms = createAsyncThunk(
    'films',
    async (page: string, thunkAPI) => {
        try {
            const response = await axios.get<IFilmResult>('https://api.themoviedb.org/3/movie/popular', {
                params: {
                    api_key,
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
            const response = await axios.get<IFilmResult>(`https://api.themoviedb.org/3//movie/${video}/videos`, {
                params: {
                    api_key,
                }
            })
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка запроса')
        }
    }
)

export const fetchFilmsSearch = createAsyncThunk(
    'filmsSearch',
    async (query:string, thunkAPI) => {
        try {
            const response = await axios.get<IFilm[]>('https://api.themoviedb.org/3/search/movie',{
                params: {
                    api_key,
                    query

                }
            })
            return response.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('Ошибка запроса')
        }
    }
)


export const authFilm = createAsyncThunk(
    'authFilm',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IToken>('https://api.themoviedb.org/3/authentication/token/new', {

                params: {
                    api_key: api_key
                }

            })
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка запроса')
        }
    }
)
