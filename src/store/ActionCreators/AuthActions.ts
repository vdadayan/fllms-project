import {createAsyncThunk} from "@reduxjs/toolkit";
import {FilmsAPI} from "../../api/api";
import {ISession, IToken} from "../../models/IAuth";

export const authFilm = createAsyncThunk(
    'authFilm',
    async (_, thunkAPI) => {
        try {
            const response = await FilmsAPI.get<IToken>('/authentication/token/new')
            localStorage.setItem('tokenGet', 'true')
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

export const accountFilm = createAsyncThunk(
    'accountFilm',
    async (request_token: string, thunkAPI) => {
        try {
            const response = await FilmsAPI.get<ISession>('/account',{params:{session_id: request_token}})
            localStorage.setItem('tokenCorrect',request_token )
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка запроса')
        }
    }
)

