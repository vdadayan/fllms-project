import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFilmResult, IVideo} from "../../models/IFilm";
import {fetchFilms, fetchFilmsSearch, getVideo} from "./ActionCreator";


const initialState: IFilmResult = {
    page: 1,
    results: [],
    isLoading: false,
    isLoadingVideo: false,
    total_pages: 0,
    total_results: 0,
    video_id: 0,
    video: [],
    error: ''
}

export const filmSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchFilms.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchFilms.fulfilled.type]: (state, action: PayloadAction<IFilmResult>) => {
            state.isLoading = false
            state.page = action.payload.page
            state.results = action.payload.results
            state.total_pages = action.payload.total_pages
            state.total_results = action.payload.total_results
        },
        [fetchFilms.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
        [getVideo.pending.type]: (state) => {
            state.isLoadingVideo = true
        },
        [getVideo.fulfilled.type]: (state, action: PayloadAction<IVideo>) => {
            state.isLoadingVideo = false
            state.video = action.payload.results
            state.video_id = action.payload.id
        },
        [fetchFilmsSearch.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchFilmsSearch.fulfilled.type]: (state, action: PayloadAction<IFilmResult>) => {
            state.isLoading = false
            state.page = action.payload.page
            state.results = action.payload.results
            state.total_pages = action.payload.total_pages
            state.total_results = action.payload.total_results
        },


    }
})

export default filmSlice.reducer
