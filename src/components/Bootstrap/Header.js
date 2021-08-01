import React from 'react'

const Header = ({ children, className, containerclass }) => {
    return (
        <nav className={"navbar navbar-light bg-light" + (className ? " " + className : "")}>
            <div className={"container-fluid" + (containerclass ? " " + containerclass : "")}>
                <span className="navbar-brand mb-0 h1">{children}</span>
            </div>
        </nav>
    )
};

export default Header;
