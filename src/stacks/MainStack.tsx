import React, {FC} from 'react';
import ContainerDef from "../components/ContainerDef";
import {Route, Routes} from "react-router-dom";
import FilmsContainer from "../components/FilmsContainer";
import DetailMovePage from "../components/Pages/Detail/DetailMovePage";

const MainStack: FC = () => {

    return (
        <div className='main'>
            <ContainerDef>
                <Routes>
                    <Route path={'/'} element={<FilmsContainer/>}/>
                    <Route path={'/account'} element={<>Account</>}/>
                    <Route path={'/movieDetail/:id'} element={<DetailMovePage/>}/>
                </Routes>
            </ContainerDef>
        </div>
    );
};

export default MainStack;
