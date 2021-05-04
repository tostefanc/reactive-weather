import {Link} from "react-router-dom";
import Search from "./search";
import React from "react";
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from "react-bootstrap";


export default function Navigation() {
return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //     <div className="collapse navbar-collapse">
    //
    //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //             <ul className="navbar-nav mr-auto">
    //                <li className="nav-item">
    //                     <Link className="nav-link" to={"/"}>Home</Link>
    //                </li>
    //                 <li className="nav-item">
    //                      <Link className="nav-link" to={"/city/bucharest,ro"}>Bucharest</Link>
    //                  </li>
    //                 <li className="nav-item">
    //                      <Link className="nav-link" to={"/city/warsaw,pl"}>Warsaw</Link>
    //                  </li>
    //                  <li className="nav-item">
    //                     <Link className="nav-link" to={"/city/budapest,hu"}>Budapest</Link>
    //                  </li>
    //             </ul>
    //             <Search></Search>
    //          </div>
    //     </div>
    //  </nav>


    <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link>
                    <Link className="nav-link" to={"/"}>Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link className="nav-link" to={"/city/bucharest,ro"}>Bucharest</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link className="nav-link" to={"/city/warsaw,pl"}>Warsaw</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link className="nav-link" to={"/city/budapest,hu"}>Budapest</Link>
                </Nav.Link>
            </Nav>
            <Search></Search>
        </Navbar.Collapse>
    </Navbar>
)
}

