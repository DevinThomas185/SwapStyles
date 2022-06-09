import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import CreateEvent from "./CreateEvent";
import Event from "./Event";
import ProductListing from "./ProductListing";
import Home from "./Home";

class NavigationBar extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand as={Link} to={"/home"}>SwapSearch</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                                    <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                                    <NavDropdown title="Events" id="basic-nav-dropdown">
                                        <NavDropdown.Item as={Link} to={"/createEvent"}>Create</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to={"/findEvent"}>Search</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Clothes" id="basic-nav-dropdown">
                                        <NavDropdown.Item as={Link} to={"/listClothes"}>List</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to={"/findClothes"}>Find</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<Home />} />
                        <Route path="/createEvent" element={<CreateEvent />} />
                        <Route path="/findEvent" element={<Event />} />
                        <Route path="/listClothes" element={<Home />} />
                        <Route path="/findClothes" element={<ProductListing />} />
                    </Routes>
                </div>
            </Router>
        )
    }

}

export default NavigationBar