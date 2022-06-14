import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function CreateEvent() {
    const [item, setItem] = React.useState({
        condition: 50,
    });
    const [validated, setValidated] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        console.log(item.title);
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: item.title,
                description: item.description,
                image: item.image,
                age: item.age,
                condition: item.condition
            })
        };

        fetch('/api/addProduct', request);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setItem({
            ...item,
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
                                name='postcode'
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
                                name='start-time'
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
                                name='end-time'
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