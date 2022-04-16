import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {accountFilm} from "../ActionCreators/AuthActions";
import {IAccount, IAccountReducer} from "../../models/IAuth";

const initialState: IAccountReducer = {
    account: {
        avatar: {
            gravatar: {
                hash: ''
            },
            tmdb: {
                avatar_path: ''
            }
        },
        id: '',
        iso_639_1: '',
        iso_3166_1: '',
        name: '',
        include_adult: false,
        username: '',
    },
    isLoading: false,
    error: ''
}


export const accountReducer = createSlice({
    name: 'accountFilm',
    initialState,
    reducers: {},
    extraReducers: {
        [accountFilm.pending.type]: (state) => {
            state.isLoading = true
        },
        [accountFilm.fulfilled.type]: (state, action: PayloadAction<IAccount>) => {
            state.isLoading = false
            state.account = action.payload
        },
        [accountFilm.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})


export default accountReducer.reducer
