import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';

function TheirListings(props) {
    const [available, setAvailable] = useState([]);

    useEffect(() => {
        fetch(`/api/getAvailableProductsFromSeller?id=${props.id}`)
        .then(res => res.json())
        .then(data => {
            setAvailable(data);
        });
    }, []);

    return (
        <Container>
            <Row>
                {available.map(item => (
                    <Col key={item.id}>
                        <Product product={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default TheirListings;