import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 0
        };
    }

    render() {
        return (
            <div >
                <Navbar variant='dark' expand="lg">
                    <Container>
                        <Navbar.Brand href="/">SwapSearch</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/tradein">Trade In</Nav.Link>
                                <Nav.Link href="/tradeout">Trade Out</Nav.Link>
                                <Nav.Link href="/createEvent">New Event</Nav.Link>
                                <Nav.Link href="/searchEvents">Search Events</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        {(false ? (
                            <Nav.Link href="/profile">Profile</Nav.Link>
                        ) : (
                            <Navbar.Collapse className="justify-content-end">
                                <Nav.Link href="/signup">Sign Up</Nav.Link>
                                <Nav.Link href="/login">Log in</Nav.Link>
                            </Navbar.Collapse>
                        ))}
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;