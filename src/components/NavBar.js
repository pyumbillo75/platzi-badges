import React from "react";

import "./styles/Navbar.css";
import logo from "../images/badge-header.svg";

class NavBar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar__brand" href="/">
                        <img className="Navbar__brand" src={logo}></img>
                        <span className="font-weight-light">Platiz</span>
                        <span className="font-weight-bold">Conf</span>
                    </a>
                </div>
            </div>
        );
    }
}
export default NavBar;
