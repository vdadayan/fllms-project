import {useAppDispatch, useAppSelector} from "./redux";
import {IToken} from "../models/IAuth";
import {FilmsAPI} from "../api/api";
import {useEffect} from "react";
import {authFilm, sessionFilm} from "../store/reducers/ActionCreator";

export const useAuth = () => {
    const dispatch = useAppDispatch()
    const {token, isLoading, error} = useAppSelector(state => state.authReducer)
    console.log(token)
    const acceptToken = (token: IToken) => {
        const backUrl = window.location.origin
        window.location.href = `https://www.themoviedb.org/authenticate/${token.request_token}?redirect_to=${backUrl}`
    }
    const fetch = async (request_token: string) => {
      dispatch(sessionFilm(request_token))
    }
    useEffect(() => {
        if (token.request_token) return
        dispatch(authFilm())
    }, [])
    return {acceptToken, token, fetch}
}
