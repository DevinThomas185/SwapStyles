import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form';
import SustainableAlternatives from '../Components/SustainableAlternatives';
import Map from '../Components/Map';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                id: 1,
                name: "Product 1",
                description: "This is a product",
                image: "https://picsum.photos/300/300/?random",
                seller: "Adam",
                age: "10",
                condition: "50"
            }
        };
    }

    render() {
        return (
            <Card>
                <Card.Header>
                    <Card.Title>
                        Event Name:
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col lg={4}>
                            <Map />
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <Card.Text>
                                        Description:
                                    </Card.Text>
                                    <Card.Text>
                                        Address:
                                    </Card.Text>
                                    <Card.Text>
                                        Tags
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4}>
                            <Card.Text>
                                Who's coming:
                                <ListGroup as="ol" numbered>
                                    <ListGroup.Item as="li">Person 1</ListGroup.Item>
                                    <ListGroup.Item as="li">Person 2</ListGroup.Item>
                                    <ListGroup.Item as="li">Person 3</ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                            Item previews:
                            <SustainableAlternatives />
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col>
                            <Card.Text>
                                Organiser:
                            </Card.Text>
                        </Col>
                        <Col lg={2}>
                            <Button variant="primary" align="center" href="/product/1">I'm Going!</Button>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        );
    }
}

export default ProductPage;