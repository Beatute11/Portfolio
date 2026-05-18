import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Component.css';

function Header () {
    return (
        <>
        <div className="header-top position-relative text-center">
            <svg width="100%" height="50">
                <line
                x1="0"
                y1="30"
                x2="35%"
                y2="30"
                stroke="#00f2ff"
                strokeWidth="2"
                />
                <line
                x1="65%"
                y1="30"
                x2="100%"
                y2="30"
                stroke="#00f2ff"
                strokeWidth="2"
                />
            </svg>

            <div className="logo-container position-absolute top-50 start-50 translate-middle">
                <img src="/static/logo.png" alt="Logo" className="logo"/>
            </div>
        </div>
        </>
    );
}

export default Header;