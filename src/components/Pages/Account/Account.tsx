import React, {FC, useEffect} from 'react';
import axios from "axios";
import {FilmsAPI} from "../../../api/api";
import {useAppSelector} from "../../../hooks/redux";
import {useAuth} from "../../../hooks/useAuth";
import Loader from "../../Loader";

const Account: FC = () => {
    const {acceptToken, token} = useAuth()
    const {account, isLoading} = useAppSelector(state => state.accountReducer)
    if (isLoading) return <Loader/>
    return (
        <div>
            {!account.name && <button onClick={() => acceptToken(token)}>Авторизоваться</button>}
            {account.username}
        </div>
    );
};

export default Account;
