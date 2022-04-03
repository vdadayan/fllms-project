import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authApi} from "../services/AuthService";
import authReducer from './reducers/AuthReducer'
import filmReducer from './reducers/FilmReducer'
import {filmsApi} from "../services/FilmsService";

const rootReducer = combineReducers({
    authReducer,
    filmReducer,
    [authApi.reducerPath]: authApi.reducer,
    [filmsApi.reducerPath]: filmsApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(authApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
