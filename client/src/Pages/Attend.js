import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import {useParams} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Attend() {

    const {id} = useParams();

    const [dbResponded, setDbResponded] = useState(false);

    const [success, setSuccess] = useState(false);

    const [event, setEvent] = useState({});

    const handleConfirm = () => {
        fetch(`/api/attendEvent`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                eventID: id,
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
        fetch (`/api/getEvent?id=${id}`)
            .then(res => res.json())
            .then(data => {
                setEvent(data);
            });
    }, [])

    if (!dbResponded && !success) {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Please confirm you want to attend {event.name}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={handleConfirm}>
                            I am attending!
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    } else if (dbResponded && !success) {
        return (
            <Container>
                <h1>
                    Error! Please try again
                </h1>
                <Button href={"/event/" + event.id}>
                    Return to Event Page
                </Button>
            </Container>
        )
    } else if (dbResponded && success) {
        return (
            <Container>
                <h1>
                    Success!
                </h1>
                <Button href="/searchEvents">
                    Go to Event Search
                </Button>
            </Container>
        );
    }
}

export default Attend;