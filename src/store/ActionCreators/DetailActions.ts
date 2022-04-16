import {createAsyncThunk} from "@reduxjs/toolkit";
import {FilmsAPI} from "../../api/api";

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
