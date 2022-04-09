import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISession, IToken} from "../../models/IAuth";
import {authFilm} from "./ActionCreator";

interface AuthTokenState {
    token: IToken | ISession | null
    isLoading: boolean
    error: string
}

const initialState: AuthTokenState = {
    token: null,
    isLoading: false,
    error: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [authFilm.pending.type]: (state) => { // ожидание
            state.isLoading = true
        },
        [authFilm.fulfilled.type]: (state, action: PayloadAction<IToken>) => { //success
            state.isLoading = false
            state.error = ''
            state.token = action.payload
        },
        [authFilm.rejected.type]: (state, action: PayloadAction<string>) => { //error
            state.isLoading = false
            state.error = action.payload
        },

    }
})

export default authSlice.reducer
