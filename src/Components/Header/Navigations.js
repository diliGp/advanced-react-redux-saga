import React from 'react';
import { Link } from 'react-router-dom';

const Navigations = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/counters">Counters</Link>
                </li>
                <li>
                    <Link to="/pure-components">Pure Components</Link>
                </li>
                <li>
                    <Link to="/comments">Comments</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigations;
