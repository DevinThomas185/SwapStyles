import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import SustainableAlternatives from '../Components/SustainableAlternatives';
import { useParams } from 'react-router-dom';

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`api/getProduct?q=${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    {product.title}
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col lg={4}>
                        <Card.Img variant="top" src={product.url} style={{height: '20rem', width: '20rem'}}/>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mt-2">
                                <Card>
                                    <Card.Body>
                                        <Card.Text>
                                            Age: {product.age}
                                        </Card.Text>
                                        <Card.Text>
                                            Condition:
                                            <Form.Range disabled value={product.condition}/>
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
                            From: {product.seller}
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

export default ProductPage;