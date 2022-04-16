import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import {Avatar} from "@mui/material";

const HeaderLinks: FC = () => {
    const {isLoading, account} = useAppSelector(state => state.accountReducer)
    return (
        <div className='header__links'>
            {account.name ?
                <Link to='/account'> <Avatar sx={{width: 56, height: 56}} alt={account.name}
                                             src={'https://image.tmdb.org/t/p/w500' + account.avatar.tmdb?.avatar_path}/>
                </Link>
                : <Link to='/account'>Личный кабинет</Link>}
        </div>
    );
};

export default HeaderLinks;
