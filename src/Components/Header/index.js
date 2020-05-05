import React from 'react';
import Logo from './Logo';
import Navigations from './Navigations';
import './Header.scss';

const Header = () => {
    return (
        <header className="theme-light" data-test="Header">
            <div className="container">
                <Logo data-test="LogoComponent" />
                <Navigations data-test="NavComponent" />
            </div>
        </header>
    )
}

export default Header
