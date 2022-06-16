import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Badge from 'react-bootstrap/Badge'


class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                online: false,
                event: false,
                minCondition: '',
                maxCondition: '',
                minAge: '',
                maxAge: '',
            }
        };
    }

    render() {
        return (
            <Accordion className="mb-3">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filters</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col lg={1}>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Online" checked />
                                        <Form.Check type="checkbox" label="Event" checked />
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
                                                    name='condition'
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
                                <Col lg={2}>
                                    <Form.Group controlId="formBasicRange">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control type="number" min="0" max="10" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
          </Accordion>
        );
    }
}

export default Filters;