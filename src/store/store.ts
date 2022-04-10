import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from './reducers/AuthReducer'
import filmReducer from './reducers/FilmReducer'
import movieReducer from './reducers/MovieDetailReducer'
import movieCast from './reducers/MovieCast'

const rootReducer = combineReducers({
    authReducer,
    filmReducer,
    movieReducer,
    movieCast
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
