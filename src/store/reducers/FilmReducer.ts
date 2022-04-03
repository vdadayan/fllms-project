import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFilm} from "../../models/IFilm";
import {fetchFilms} from "./ActionCreator";

interface FilmState {
    films: IFilm[]
    isLoading: boolean
    error: string
}

const initialState: FilmState =  {
    films: [],
    isLoading: false,
    error: ''

}

export const filmSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        getFilms: (state, action:PayloadAction<IFilm[]>) => {
            state.films = action.payload
        }
    },
    extraReducers: {
        [fetchFilms.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchFilms.fulfilled.type]: (state, action: PayloadAction<IFilm[]>) => {
            state.isLoading = false
            state.films = action.payload
        },
        [fetchFilms.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default filmSlice.reducer
