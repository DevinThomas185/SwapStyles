import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Notifications from './Notifications';
import Container from 'react-bootstrap/Container';


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
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                <b>
                                    {this.state.balance} Trades
                                </b>
                            </Navbar.Text>
                            <Notifications />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;