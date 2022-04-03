import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IFilm} from "../../models/IFilm";
import {IToken} from "../../models/IAuth";


export const fetchFilms = createAsyncThunk(
    'films',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IFilm[]>('https://api.themoviedb.org/3/movie/popular')
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
            const response = await axios.get<IToken>('https://api.themoviedb.org/3/authentication/token/new')
            return response.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('Ошибка запроса')
        }
    }
)
