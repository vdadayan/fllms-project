import React, {FC} from 'react';
import ContainerDef from "../components/ContainerDef";
import {Route, Routes} from "react-router-dom";
import {useAppSelector} from "../hooks/redux";
import {$CombinedState} from "redux";

const MainStack: FC = () => {
    return (
        <div className='main'>
            <ContainerDef>
                <Routes>
                    <Route path={'/topRated'} element={<>Top Rated</>}/>
                    <Route path={'/account'} element={<>Account</>}/>
                </Routes>
                main
            </ContainerDef>
        </div>
    );
};

export default MainStack;
