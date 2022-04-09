import React, {FC, useState} from 'react';
import ContainerDef from "../components/ContainerDef";
import {Route, Routes} from "react-router-dom";
import FilmsContainer from "../components/FilmsContainer";

const MainStack: FC = () => {
    return (
        <div className='main'>
            <ContainerDef>
                <Routes>
                    <Route path={'/'} element={<FilmsContainer/>}/>
                    <Route path={'/account'} element={<>Account</>}/>
                </Routes>
            </ContainerDef>
        </div>
    );
};

export default MainStack;
