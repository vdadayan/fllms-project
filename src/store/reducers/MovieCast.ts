import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICredits} from "../../models/IFilm";
import {movieCastAction} from "./ActionCreator";


const initialState: ICredits = {
    isLoading: false,
    id: 0,
    cast: []

}

export const movieCast = createSlice({
    name: 'movieCast',
    initialState,
    reducers: {},
    extraReducers: {
        [movieCastAction.pending.type]: (state) => {
            state.isLoading = true
        },
        [movieCastAction.fulfilled.type]: (state, action: PayloadAction<ICredits>) => {
            state.isLoading = false
            state.cast = action.payload.cast
        }
    }
})

export default movieCast.reducer
