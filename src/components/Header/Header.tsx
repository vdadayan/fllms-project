import React, {FC} from 'react';
import ContainerDef from "../ContainerDef";
import HeaderLinks from "./HeaderLinks";
import {Link} from "react-router-dom";

const Header: FC = () => {
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
                    <HeaderLinks/>
                </div>
            </ContainerDef>
        </header>
    );
};

export default Header;
