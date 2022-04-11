import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISession, IToken} from "../../models/IAuth";
import {authFilm, sessionFilm} from "./ActionCreator";

interface AuthTokenState {
    token: IToken
    isLoading: boolean
    error: string
    session: ISession
}

const initialState: AuthTokenState = {
    token: {
        success: false,
        request_token: '',
        expires_at: ''
    },
    session: {
        success: false,
        session_id: ''
    },
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
        [sessionFilm.fulfilled.type]: (state, action:PayloadAction<ISession>) => {
            state.session = action.payload
        }

    }
})

export default authSlice.reducer
