import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import {useParams} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function TradeIn() {

    const {id} = useParams();

    const [dbResponded, setDbResponded] = useState(false);

    const [success, setSuccess] = useState(false);

    const [product, setProduct] = useState({});

    const handleConfirm = () => {
        fetch(`/api/tradein?id=${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fromUserID: product.sellerid,
            })})
            .then(res => {
                if (res.status === 200) {
                    setSuccess(true);
                } else {
                    setSuccess(false);
                }
                setDbResponded(true);
            })
    }

    useEffect(() => {
        fetch (`/api/getProduct?id=${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            });
    }, [])

    if (!dbResponded && !success) {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Please confirm you want to swap in a {product.title}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={handleConfirm}>
                            I want it!
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    } else if (dbResponded && !success) {
        return (
            <h1>
                Error
            </h1>
        );
    } else if (dbResponded && success) {
        return (
            <h1>
                Success
            </h1>
        );
    }
}

export default TradeIn;