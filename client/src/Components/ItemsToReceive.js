import React, { useState, useEffect } from 'react';
import Product from './Product';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ItemsToReceive(props) {


    const [toReceive, setToReceive] = useState([]);

    const confirmed = (id) => {
        fetch(`/api/confirmReceived?id=${id}`)
        getToReceive();
    }

    const getToReceive = () => {
        fetch(`/api/getToReceiveFor?id=${props.user.id}`)
            .then(res => res.json())
            .then(data => setToReceive(data));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getToReceive();
          }, 1000);
          return () => clearInterval(interval);
    }, []);

    return (
        <Container>
            <Row>
                <h2>Items to Receive</h2>
            </Row>
            <Row>
                {toReceive.map(item => (
                    <Col key={item.id} className="d-grid gap-1" lg={3}>
                        <Product product={item} />
                        {item.toconfirmreceived ?
                            <Button variant="primary" block disabled style={{ height: 40 }}>
                                Already Received
                                <p style={{ fontSize: 15 }}> Waiting for Sender confirmation</p>
                            </Button> :
                            <Button style={{ height: 40 }} block variant="warning" onClick={() => confirmed(item.id)}>I've received this!</Button>
                        }
                    </Col>
                ))}
            </Row>
        </Container >
    );
}

export default ItemsToReceive;