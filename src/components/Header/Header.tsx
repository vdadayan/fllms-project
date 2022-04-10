import React, {FC, useState} from 'react';
import ContainerDef from "../ContainerDef";
import HeaderLinks from "./HeaderLinks";
import {Link} from "react-router-dom";
import Input from '@mui/material/Input';
import {useAppDispatch} from "../../hooks/redux";
import {fetchFilms, fetchFilmsSearch} from "../../store/reducers/ActionCreator";

const Header: FC = () => {
    const [valueInput, setValueInput] = useState<string>('')
    const dispatch = useAppDispatch()
    const searchHandler = (e: any) => {
        e.preventDefault()
        setValueInput(e.target.value)
        if (e.target.value === '') return dispatch(fetchFilms(''))
        dispatch(fetchFilmsSearch(e.target.value))
    }
    return (
        <header className='header'>
            <ContainerDef>
                <div className="header-wrapper">
                    <Link to='/'>
                        <div className="header__logo">
                            <img
                                src="https://png.pngtree.com/element_our/png_detail/20181022/movie-cinema-entertainment-logo-with-neon-sign-effect-vector-illustration-png_199458.jpg"
                                alt=""/>
                        </div>
                    </Link>
                    <Input value={valueInput} onChange={(e) => searchHandler(e)} placeholder='Введите название фильма'/>
                    <HeaderLinks/>
                </div>
            </ContainerDef>
        </header>
    );
};

export default Header;
