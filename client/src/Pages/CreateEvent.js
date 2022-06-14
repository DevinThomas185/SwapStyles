import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function CreateEvent() {
    const [event, setEvent] = React.useState({});
    const [validated, setValidated] = React.useState(false);

    async function setLatLong(postcode) {
        await fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + postcode.replace(" ", "") + '&key=AIzaSyCV1xLSpdplVb0nDpJJl1KDkpgjN6rSQ7k')
            .then(response => response.json())
            .then(data => {
                console.log(data);
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
        }

        setValidated(true);

        setLatLong(event.postcode)

        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: event.name,
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

        // fetch('/api/addProduct', request);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({
            ...event,
            [name]: value
        });
    }


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

    );

}

export default CreateEvent;