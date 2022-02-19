import React from 'react';
import logo from '../../assets/logo_atizapan.png';
import './Header.css';

export const Header = () => {
    return (
        <div className="headerContainer">
            <img src={logo} alt="logo" />
        </div>
    )
}