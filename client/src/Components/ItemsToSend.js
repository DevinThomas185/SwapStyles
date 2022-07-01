import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { timeSince } from '../Components/RecentItems';
import { Link } from 'react-router-dom';


function ItemsToSend(props) {

    const [toSend, setToSend] = useState([]);

    const confirmed = (id) => {
        fetch(`/api/confirmSent?id=${id}`)
        getToSend();
    }

    const getToSend = () => {
        fetch(`/api/getToSendFrom?id=${props.user.id}`)
            .then(res => res.json())
            .then(data => setToSend(data));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            getToSend();
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <Container>
            <Row>
                <h2>Items to Send</h2>
            </Row>
            <Row>
                {toSend.map(item => (
                    <Card key={item.id}>
                        <Card.Header>
                            <Card.Title>
                                {item.title}
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col lg={4}>
                                    <Card.Img variant="top" src={item.url} style={{ height: 'auto', width: '20rem' }} />
                                </Col>
                                <Col>
                                    <Row>
                                        <h4>
                                            Send to <Link to={"/profile/" + item.userid}>{item.username}</Link> at
                                        </h4>
                                    </Row>
                                    <Row>
                                        <Card.Text>{item.address}</Card.Text>
                                    </Row>
                                    <Row>
                                        <Card.Text>{item.postcode}</Card.Text>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <Card.Text>
                                        Listed {timeSince(item.submitted)}
                                    </Card.Text>
                                </Col>
                                <Col lg={2}>
                                    {item.fromconfirmsent ?
                                        <Button variant="primary" disabled>Already Sent</Button> :
                                        <Button variant="warning" onClick={() => confirmed(item.id)}>I've sent this!</Button>
                                    }
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                ))}
            </Row>
        </Container>
    );
}

export default ItemsToSend;