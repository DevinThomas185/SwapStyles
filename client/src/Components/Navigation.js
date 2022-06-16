import React, { useState, useEffect } from "react"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Notifications from './Notifications';
import Container from 'react-bootstrap/Container';


function Navigation() {
      const [balance, setBalance] = useState(0)
      const [loggedIn, setLoggedIn] = useState(false)
      
      useEffect(() => {
        checkLoggedIn()
      }, [])

      function checkLoggedIn() {
        fetch('/api/isLoggedIn')
          .then(resp => resp.json())
          .then(loggedIn => {
            setLoggedIn(loggedIn)
          })
      }

      return (
          <div >
              <Navbar variant='light' expand="lg">
                  <Container>
                      <Navbar.Brand href="/">SwapStyles</Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="me-auto">
                              <Nav.Link href="/tradein">Avaliable Items</Nav.Link>
                              <Nav.Link href="/tradeout">Swap Away</Nav.Link>
                              <Nav.Link href="/createEvent">New Event</Nav.Link>
                              <Nav.Link href="/searchEvents">Search Events</Nav.Link>
                          </Nav>
                      </Navbar.Collapse>
                      {(loggedIn ? (
                          <Nav.Link href="/profile">Profile</Nav.Link>
                      ) : (
                          <Navbar.Collapse className="justify-content-end">
                              <Nav.Link href="/signup">Sign Up</Nav.Link>
                              <Nav.Link href="/login">Log in</Nav.Link>
                          </Navbar.Collapse>
                      ))}
                      <Notifications />
                  </Container>
              </Navbar>
          </div>
      );
}

export default Navigation;
