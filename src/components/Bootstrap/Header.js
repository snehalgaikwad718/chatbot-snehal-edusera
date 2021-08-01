import React from 'react'

const Header = ({ children, className, containerclass, dark }) => {
    dark = dark ? "dark" : "light";
    /* if dark then dark else light */
    return (
        <nav className={
            `navbar navbar-$[dark] bg-$[dark]` + (className ? " " + className : "")
            }>
            <div className={"container-fluid" + (containerclass ? " " + containerclass : "")}>
                <span className="navbar-brand mb-0 h1">{children}</span>
            </div>
        </nav>
    )
};

export default Header;
