import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from './reducers/AuthReducer'
import filmReducer from './reducers/FilmReducer'

const rootReducer = combineReducers({
    authReducer,
    filmReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
