import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function SignUp() {
    const [details, setDetails] = React.useState({});
    const [validated, setValidated] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault()

        const form = e.currentTarget

        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        }
        setValidated(true)

        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: details.username,
                email: details.email,
                age: details.age,
                postcode: details.postcode,
                password: details.password,
            })
        }


        fetch('/api/signup', request)
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setDetails({
            ...details,
            [name]: value
        });
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <h1>Sign up!</h1>
            <br></br>

            <h4> Credentials: </h4>

            <Row className="mb-3">
                <Col sm={6}>
                    <Form.Group controlId="validationCustom01" as={Col}>
                        <FloatingLabel label="Email">
                            <Form.Control
                                required
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback>Cool Email!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide an Email.</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group controlId="validationCustom02" as={Col}>
                        <FloatingLabel label="Password">
                            <Form.Control
                                required
                                type="password"
                                name='password'
                                placeholder="Enter password"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback>Nice password!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
            </Row>

            <h4> Details: </h4>

            <Row className="mb-3">
                <Col sm={8}>
                    <Form.Group controlId="validationCustom01" as={Col}>
                        <FloatingLabel label="Username">
                            <Form.Control
                                required
                                type="text"
                                name="username"
                                placeholder="Enter Username"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback>Cool Username!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide an Username.</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col sm={2}>
                    <Form.Group controlId="validationCustom01" as={Col}>
                        <FloatingLabel label="Postcode">
                            <Form.Control
                                required
                                type="text"
                                name="postcode"
                                placeholder="Enter Postcode"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback>Cool Postcode!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide an Postcode.</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col sm={2}>
                    <Form.Group controlId="validationCustom01" as={Col}>
                        <FloatingLabel label="Age">
                            <Form.Control
                                required
                                type="number"
                                name="age"
                                placeholder="Enter Age"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback>Cool Age!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide an Age.</Form.Control.Feedback>
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

export default SignUp
