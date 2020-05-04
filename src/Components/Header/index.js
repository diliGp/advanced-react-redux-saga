import React from 'react';
import Logo from './Logo';
import Navigations from './Navigations';
import './Header.scss';

const Header = () => {
    return (
        <header className="theme-light">
            <div className="container">
                <Logo />
                <Navigations />
            </div>
        </header>
    )
}

export default Header
