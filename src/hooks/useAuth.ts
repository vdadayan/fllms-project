import {useAppDispatch, useAppSelector} from "./redux";
import {IToken} from "../models/IAuth";
import {accountFilm, authFilm, sessionFilm} from "../store/ActionCreators/AuthActions";
import {useEffect} from "react";

export const useAuth = () => {
    const dispatch = useAppDispatch()
    const {token, isLoading, error, session} = useAppSelector(state => state.authReducer)
    const requestApproved = localStorage.getItem('requestApproved')
    const acceptToken = (token: IToken) => {
        const backUrl = window.location.origin
        window.location.href = `https://www.themoviedb.org/authenticate/${token.request_token}?redirect_to=${backUrl}`
    }
    const tokenCorrect = localStorage.getItem('tokenCorrect')
    useEffect(() => {
        if (!localStorage.getItem('tokenGet')) dispatch(authFilm())
        if (requestApproved && !tokenCorrect) dispatch(sessionFilm(requestApproved))
    }, [])

    useEffect(() => {
        if (session.session_id ) dispatch(accountFilm(session.session_id))
    }, [session.session_id])
    useEffect(()=> {
        if (tokenCorrect) dispatch(accountFilm(tokenCorrect))
    },[tokenCorrect])
    return {acceptToken, token}
}
