import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';

function PreviouslyReceived(props) {
    const [received, setReceived] = useState([]);


    useEffect(() => {
        const interval = setInterval(() => {
            fetch(`/api/getReceivedFor?id=${props.user.id}`)
            .then(res => res.json())
            .then(data => setReceived(data));
        }, 1000);
        return () => clearInterval(interval);      
    }, [])

    
    return (
        <Container>
            <Row>
                <h2>Previously Received</h2>
            </Row>
            <Row>
                {received.map(item => (
                    <Col key={item.id}>
                        <Product product={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default PreviouslyReceived;