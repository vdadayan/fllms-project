import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from './reducers/AuthReducer'
import filmReducer from './reducers/FilmReducer'
import movieReducer from './reducers/MovieDetailReducer'
import movieCast from './reducers/MovieCast'
import accountReducer from './reducers/AccountReducer'

const rootReducer = combineReducers({
    authReducer,
    filmReducer,
    movieReducer,
    movieCast,
    accountReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
