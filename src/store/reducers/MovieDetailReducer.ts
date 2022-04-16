import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DetailMovie, IMovieDetail} from "../../models/IFilm";
import {movieDetail} from "../ActionCreators/DetailActions";

const initialState: IMovieDetail = {
    detail: {
        adult: false,
        backdrop_path: '',
        belongs_to_collection: 0,
        budget: 0,
        genres: [],
        homepage: '',
        id: 0,
        imdb_id: '',
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0.5,
        poster_path: null,
        production_companies: [],
        production_countries: [],
        release_date: '',
        revenue: 0,
        runtime: 0,
        spoken_languages: [],
        status: '',
        tagline: '',
        title: '',
        video: false,
        vote_average: 0,
        vote_count: 0
    },
    isLoading: false

}

export const movieDetailReducer = createSlice({
    name: 'movieDetail',
    initialState,
    reducers: {},
    extraReducers: {
        [movieDetail.pending.type]: (state) => {
            state.isLoading = true
        },
        [movieDetail.fulfilled.type]: (state, action: PayloadAction<DetailMovie>) => {
            state.detail = action.payload
            state.isLoading = false
        },

    }
})

export default movieDetailReducer.reducer
