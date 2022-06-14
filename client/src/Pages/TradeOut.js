import React from 'react';
// import SimpleFileUpload from 'react-simple-file-upload'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Badge from 'react-bootstrap/Badge';
import InputGroup from 'react-bootstrap/InputGroup';


function TradeOut() {
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

    function handleFile(url){
        setItem({
            ...item,
            image: url
        });
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group controlId="validationCustom01" as={Col}>
                    <FloatingLabel label="Name of Item">
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
                <input
                    type="file"
                    data-accepted="image/*"
                    data-maxFileSize="0.5"
                    apiKey="035d47aa53030d76819b63ab6ce9b05b"
                    onSuccess={handleFile}
                />
                    
                <Form.Group controlId="validationCustom04" as={Col}>
                    <Form.Label>Age</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            required
                            type="number"
                            name='age'
                            max={10}
                            min={0}
                            className="form-control"
                            aria-describedby="inputGroupPrepend"
                            onChange={handleChange}
                        />
                        <InputGroup.Text id="inputGroupPrepend">Year(s)</InputGroup.Text>
                        <Form.Control.Feedback type="invalid">Please provide an age.</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group controlId="validationCustom05" as={Col}>
                    <Form.Label>Condition</Form.Label>
                    <Row>
                        <Col lg={1}>
                            <Badge pill bg="danger">
                                Poor
                            </Badge>
                        </Col>
                        <Col>
                            <Form.Range
                                name='condition'
                                onChange={
                                    (event) => {
                                        setItem({
                                            ...item,
                                            condition: event.target.value
                                        });
                                    }
                                }
                            />
                        </Col>
                        <Col lg={1}>
                            <Badge pill bg="success">
                                Excellent
                            </Badge>
                        </Col>
                    </Row>
                </Form.Group>
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

export default TradeOut;