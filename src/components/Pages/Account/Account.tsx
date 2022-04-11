import React, {FC, useEffect} from 'react';
import axios from "axios";
import {FilmsAPI} from "../../../api/api";
import {useAppSelector} from "../../../hooks/redux";
import {useAuth} from "../../../hooks/useAuth";

const Account: FC = () => {
    const {acceptToken, token} = useAuth()
    const {session} = useAppSelector(state => state.authReducer)
    const fetch = async (session_id: string) => {
        const res = await FilmsAPI.get('/account', {params: {session_id}})
    }
    useEffect(() => {
        if (session.session_id) fetch(session.session_id)

    }, [])
    return (
        <div>
            <button onClick={() => acceptToken(token)}>Авторизоваться</button>
        </div>
    );
};

export default Account;
