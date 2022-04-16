import React, {FC, useEffect} from 'react';
import Header from "./components/Header/Header";
import MainStack from "./stacks/MainStack";
import {useNavigate} from "react-router-dom";

const App: FC = () => {
    const url = new URL(window.location.href)
    const requestApproved = url.searchParams.get('request_token')
    requestApproved && localStorage.setItem('requestApproved', requestApproved)
    const navigate = useNavigate()
    useEffect(() => {
        if (requestApproved) {
            navigate('/account')
        }
    }, [])
    return (
        <>
            <Header/>
            <MainStack/>
        </>
    );
};

export default App;
