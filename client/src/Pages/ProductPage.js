import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                id: 1,
                name: "Product 1",
                description: "This is a product",
                image: "https://picsum.photos/200/300/?random",
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
                        <Col>
                            <Card.Img variant="top" src={this.state.product.image} style={{height: '20rem', width: '20rem'}}/>
                        </Col>
                        <Col>
                            <Card.Text>
                                {this.state.product.description}
                            </Card.Text>
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