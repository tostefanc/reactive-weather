import {Link} from "react-router-dom";
import Search from "./search";
import React from "react";



export default function Navigation() {
return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={"/"}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/city/bucharest,ro"}>Bucharest</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/city/warsaw,pl"}>Warsaw</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/city/budapest,hu"}>Budapest</Link>
                </li>
            </ul>
            <Search></Search>
        </div>
    </nav>
)
}

