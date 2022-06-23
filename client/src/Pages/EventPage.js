import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import SustainableAlternatives from '../Components/SustainableAlternatives';
import Map from '../Components/Map';

function ProductPage(props) {

    const { id } = useParams();
    const [event, setEvent] = useState({});
    const [organiser, setOrganiser] = useState("");
    const [attendees, setAttendees] = useState([]);

    useEffect(() => {
        fetch(`/api/getEvent?id=${id}`)
            .then(res => res.json())
            .then(data => {
                setEvent(data);
                console.log(data);
                fetch(`/api/getUser?id=${data.organiser}`)
                    .then(res => res.json())
                    .then(data => setOrganiser(data.username));
            });

        fetch(`/api/getAttendees?id=${id}`)
            .then(res => res.json())
            .then(data => setAttendees(data));
    }, []);

    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    Event Name: {event.name}
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col lg={4}>
                        <Map lat={event.latitude} long={event.longitude} />
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Card.Text>
                                    Description: {event.description}
                                </Card.Text>
                                <Card.Text>
                                    Postcode: {event.postcode}
                                </Card.Text>
                                <Card.Text>
                                    Address: {event.location}
                                </Card.Text>
                                <Card.Text>
                                    Tags
                                </Card.Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4}>
                        <Card.Text>
                            Who's coming:
                            <ListGroup as="ol" numbered>
                                {attendees.map(attendee => (
                                    <ListGroup.Item as="li">{attendee.username}</ListGroup.Item>
                                ))}
                                {/* <ListGroup.Item as="li">Person 1</ListGroup.Item>
                                <ListGroup.Item as="li">Person 2</ListGroup.Item>
                                <ListGroup.Item as="li">Person 3</ListGroup.Item> */}
                            </ListGroup>
                        </Card.Text>
                        Item previews:
                        <SustainableAlternatives />
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col>
                        <Card.Text>
                            Organiser: {organiser}
                        </Card.Text>
                    </Col>
                    <Col lg={2}>
                        <Button variant="primary" align="center" href="/product/1">I'm Going!</Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );

}

export default ProductPage;