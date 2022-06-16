import React from 'react';
import  { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function CreateEvent() {
    const [event, setEvent] = useState({});
    const [validated, setValidated] = useState(false);
    const [dbResponded, setDbResponded] = useState(false);
    const [succeeded, setSucceeded] = useState(false);
    const [loggedIn, setLoggedIn] = React.useState(true);

    const navigate = useNavigate();

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

    async function setLatLong(postcode) {
        await fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + postcode.replace(" ", "") + '&key=AIzaSyCV1xLSpdplVb0nDpJJl1KDkpgjN6rSQ7k')
            .then(response => response.json())
            .then(data => {
                event.lat = data.results[0].geometry.location.lat;
                event.long = data.results[0].geometry.location.lng;
            })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            await setLatLong(event.postcode);
            console.log(event.long);
            console.log(event.lat);
    
            const request = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: event.title,
                    description: event.description,
                    date: event.date,
                    starttime: event.starttime,
                    endtime: event.endtime,
                    postcode: event.postcode,
                    address: event.address,
                    long: event.long,
                    lat: event.lat
                })
            };
    
            fetch('/api/addEvent', request)
                .then(res => {
                    if (res.ok) {
                        setSucceeded(true);
                    } else {
                        setSucceeded(false);
                    }
                    setDbResponded(true);
                });
        }

        setValidated(true);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({
            ...event,
            [name]: value
        });
    }

    if (!loggedIn) {
        navigate('/login')
    } else if (!dbResponded) {
        return (
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group controlId="validationCustom01" as={Col}>
                        <FloatingLabel label="Event Name">
                            <Form.Control
                                required
                                type="text"
                                name="title"
                                placeholder="Enter Title"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback>Cool Title!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a title.</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group controlId="validationCustom02" as={Col}>
                        <FloatingLabel label="Description">
                            <Form.Control
                                required
                                type="text"
                                name='description'
                                placeholder="Enter Description"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback>Nice Description!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a description.</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Col sm={4}>
                        <Form.Group controlId="validationCustom03" as={Col}>
                            <FloatingLabel label="Postcode">
                                <Form.Control
                                    required
                                    type="text"
                                    name="postcode"
                                    placeholder="Enter Postcode"
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback>Nice Postcode!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a Postcode.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Col sm={8}>
                        <Form.Group controlId="validationCustom04" as={Col}>
                            <FloatingLabel label="Address">
                                <Form.Control
                                    required
                                    type="text"
                                    name='address'
                                    placeholder="Enter Address"
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback>Nice Address!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide an Address.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="validationCustom05" as={Col}>
                            <FloatingLabel label="Date">
                                <Form.Control
                                    required
                                    type="date"
                                    name='date'
                                    placeholder="Enter Date"
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback>Nice Date!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a Date.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="validationCustom06" as={Col}>
                            <FloatingLabel label="Start Time">
                                <Form.Control
                                    required
                                    type="time"
                                    name='starttime'
                                    placeholder="Enter Start Time"
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback>Nice Start Time!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a Start Time.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="validationCustom07" as={Col}>
                            <FloatingLabel label="End Time">
                                <Form.Control
                                    required
                                    type="time"
                                    name='endtime'
                                    placeholder="Enter End Time"
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback>Nice End Time!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a End Time.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Row>
            </Form>

        )
    } else if (dbResponded && !succeeded) {
        return (
            <Container>
                <Row>
                    <Col style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <h1>Error!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <h4>Something went wrong, please try again</h4>
                    </Col>
                </Row>
                <Row>
                    <Col style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <Button variant="primary" type="success" onClick={
                            () => { 
                                window.location.reload(false) // Reload the page
                            }
                        }>Retry</Button>
                    </Col>
                </Row>
            </Container>
        )
    } else if (dbResponded && succeeded) {
        return (
            <Container>
                <Row>
                    <Col style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <h1>Success!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <h4>Your event is now live</h4>
                    </Col>
                </Row>
                <Row>
                    <Col style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <Link to="/">
                            <Button variant="primary" type="success">Back to Home</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CreateEvent;
