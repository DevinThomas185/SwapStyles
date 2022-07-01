import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';


function PreviouslySent(props) {

    const [sent, setSent] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetch(`/api/getSentFrom?id=${props.user.id}`)
                .then(res => res.json())
                .then(data => setSent(data))
        }, 1000);
        return () => clearInterval(interval);        
    }, []);

    
    return (
        <Container>
            <Row>
                <h2>Previously Sent</h2>
            </Row>
            <Row>
                {sent.map(item => (
                    <Col key={item.id}>
                        <Product product={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default PreviouslySent;