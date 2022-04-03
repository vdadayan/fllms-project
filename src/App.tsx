import React, {FC} from 'react';
import Header from "./components/Header/Header";
import AuthStack from "./stacks/AuthStack";
import {useAppSelector} from "./hooks/redux";
import MainStack from "./stacks/MainStack";

const App: FC = () => {
    const {token: isAuth} = useAppSelector(state => state.authReducer)
    return (
        <>
            <Header/>
            {!isAuth && <AuthStack/>}
            {isAuth && <MainStack/>}
        </>
    );
};

export default App;
