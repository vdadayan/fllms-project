import React, {FC} from 'react';
import {Link} from "react-router-dom";

const HeaderLinks:FC = () => {
    return (
        <div className='header__links'>
            <Link to='/account'>Account</Link>
        </div>
    );
};

export default HeaderLinks;
