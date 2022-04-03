import React, {FC, useEffect} from 'react';
import {authApi} from "../services/AuthService";
import {IToken} from "../models/IAuth";
import ContainerDef from "../components/ContainerDef";
import Loader from "../components/Loader";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {authSlice} from "../store/reducers/AuthReducer";

const AuthStack: FC = () => {
    const {token} = useAppSelector(state => state.authReducer)
    const {data, isLoading, error} = authApi.useGetTokenQuery('')
    const [postSession, {data: test,}] = authApi.usePostSessionMutation()
    const dispatch = useAppDispatch()
    const acceptToken = (token: IToken) => {
        const backUrl = window.location.origin
        window.location.href = `https://www.themoviedb.org/authenticate/${token.request_token}?redirect_to=${backUrl}`
    }
    const sessionRequest = () => {
        postSession(localStorage.getItem('requestTokenApproved') || '')
    }
    useEffect(() => {
        if (test) dispatch(authSlice.actions.isAuth(test))

    }, [test])
    useEffect(()=> {
        if (!token) {
            localStorage.removeItem('requestTokenApproved')
            localStorage.removeItem('endToken')
        }
    }, [])
    useEffect(() => {
        const requestUrl = new URL(window.location.href)
        const token = requestUrl.searchParams.get('request_token')
        if (token) {
            localStorage.setItem('requestTokenApproved', token)
        }
    }, [])
    if (isLoading) return <Loader/>
    return (
        <div className="auth">
            <ContainerDef>
                {data && !localStorage.getItem('requestTokenApproved') &&
                <button onClick={() => acceptToken(data)}>Авторизоваться</button>}
                {localStorage.getItem('requestTokenApproved') && <button onClick={sessionRequest}>Запрос </button>}
            </ContainerDef>
        </div>

    );
};

export default AuthStack;
