import React, { useState, useEffect } from "react"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Notifications from './Notifications';
import Container from 'react-bootstrap/Container';
import { FaHome } from "react-icons/fa";


function Navigation(props) {
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        if (props.loggedIn) {
            fetch('/api/getUserBalance')
                        .then(resp => resp.json())
                        .then(data => setBalance(data.balance))
        }
    }, [])

    return (
        <div key={props.loggedIn}>
            <Navbar variant='light' expand="lg">
                <Container>
                    <Navbar.Brand href="/"><FaHome style={{ color: '#90c2ae' }} />SwapStyles</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/tradein">Available Items</Nav.Link>
                            <Nav.Link href="/tradeout">List an Item</Nav.Link>
                            <Nav.Link href="/createEvent">Create an Event</Nav.Link>
                            <Nav.Link href="/searchEvents">Search Events</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {(props.loggedIn ? (
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>You have {balance} {(balance === 1) ? "Swap Token" : "Swap Tokens"}</Navbar.Text>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <Nav.Link href="/profile/messages">Messages</Nav.Link>
                            <Notifications />
                        </Navbar.Collapse>
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

export default Navigation;
