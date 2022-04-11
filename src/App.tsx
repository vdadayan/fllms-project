import React, {FC, useEffect} from 'react';
import Header from "./components/Header/Header";
import MainStack from "./stacks/MainStack";
import {useAuth} from "./hooks/useAuth";

const App: FC = () => {
    const url = new URL(window.location.href)
    const request_token = url.searchParams.get('request_token')
    console.log(request_token)
    const {fetch} = useAuth()
    useEffect(() => {
        if (request_token) fetch(request_token)
    }, [])
    return (
        <>
            <Header/>
            <MainStack/>
        </>
    );
};

export default App;
