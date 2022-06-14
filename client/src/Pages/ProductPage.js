import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import SustainableAlternatives from '../Components/SustainableAlternatives';

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
                        {this.state.product.name}
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col lg={4}>
                            <Card.Img variant="top" src={this.state.product.image} style={{height: '20rem', width: '20rem'}}/>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <Card.Text>
                                        {this.state.product.description}
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mt-2">
                                    <Card>
                                        <Card.Body>
                                            <Card.Text>
                                                Age: {this.state.product.age}
                                            </Card.Text>
                                            <Card.Text>
                                                Condition:
                                                <Form.Range disabled value={this.state.product.condition}/>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mt-2">
                                    <SustainableAlternatives />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col>
                            <Card.Text>
                                From: {this.state.product.seller}
                            </Card.Text>
                        </Col>
                        <Col lg={2}>
                            <Button variant="primary" align="center" href="/product/1">Trade In</Button>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        );
    }
}

export default ProductPage;