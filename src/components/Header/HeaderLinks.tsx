import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";

const HeaderLinks: FC = () => {
    const {token} = useAppSelector(state => state.authReducer)
    return (
        <div className='header__links'>
            {token.success ? <Link to='/account'>Личный кабинет</Link> : <Link to='/account'>Авторизоваться</Link>}
        </div>
    );
};

export default HeaderLinks;
