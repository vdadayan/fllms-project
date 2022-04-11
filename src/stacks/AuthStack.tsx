import React, {FC, useEffect} from 'react';
import {IToken} from "../models/IAuth";
import Loader from "../components/Loader";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {authFilm} from "../store/reducers/ActionCreator";
import {useParams} from "react-router-dom";

const AuthStack: FC = () => {

    return (
        <div className="auth"/>
    );
};

export default AuthStack;
