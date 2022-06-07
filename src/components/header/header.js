import React from 'react';
// import styled from 'styled-components';
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <h3 className="header-title">
                <Link className="header-title" to="/">Game of Thrones DB</Link>
                {/* Game of Thrones DB     */}
            </h3>
            <ul className='header-ul'>
                <li className='header-li'>
                    <Link to="/characters/">Characters</Link>
                </li>
                <li className='header-li'>
                    <Link to="/books/">Books</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;