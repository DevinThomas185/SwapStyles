import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Badge from 'react-bootstrap/Badge'


function Filters(props) {


    const handleChange = (event) => {
        const { name, value } = event.target;
        props.setFilters({
            ...(props.getFilters()),
            [name]: value
        });
        console.log(props.getFilters())
    }

    return (
        <Accordion className="mb-3">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Filters</Accordion.Header>
                <Accordion.Body>
                    <Form>
                        <Row>
                            <Col lg={1}>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Online" onChange={
                                        (event) => {
                                            props.setFilters({
                                                ...(props.getFilters()),
                                                online: event.target.checked
                                            });
                                        }
                                    } />
                                    <Form.Check type="checkbox" label="Event" onChange={
                                        (event) => {
                                            props.setFilters({
                                                ...(props.getFilters()),
                                                event: event.target.checked
                                            });
                                        }
                                    } />
                                </Form.Group>
                            </Col>
                            <Col>
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
                                                name='minCondition'
                                                onChange={
                                                    (event) => {
                                                        props.setFilters({
                                                            ...(props.getFilters()),
                                                            minCondition: event.target.value
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
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={2}>
                                <Form.Group controlId="formBasicRange">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control name='maxAge' type="number" min="0" max="10" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group controlId="formControlsSelect" as={Col}>
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="category"
                                        placeholder="Select a category"
                                        onChange={handleChange}
                                    >
                                        <option>Select a category</option>
                                        <option value="shoe">Shoe</option>
                                        <option value="t-shirt">T-shirt</option>
                                        <option value="shirt">Shirt</option>
                                        <option value="trouser">Trouser</option>
                                        <option value="jeans">Jeans</option>
                                        <option value="jacket">Jacket</option>
                                        <option value="coat">Coat</option>
                                        <option value="hoodie">Hoodie</option>
                                        <option value="shorts">Shorts</option>
                                        <option value="sports">Sports</option>
                                        <option value="other">Other</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Cool Category!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Please provide a Category.</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );

}

export default Filters;