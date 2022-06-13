import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                id: 1,
                name: "Product 1",
                description: "This is a product",
                image: "https://picsum.photos/200/300/?random",
                seller: "Adam"
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
                            <Button variant="primary" align="center" href="/product/1">Trade In</Button>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <Card.Text>
                        From: {this.state.product.seller}
                    </Card.Text>
                </Card.Footer>
            </Card>
        );
    }
}

export default ProductPage;