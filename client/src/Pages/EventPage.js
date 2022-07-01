import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import ItemPreviews from '../Components/ItemPreviews';
import Map from '../Components/Map';
import { Link } from "react-router-dom"

function EventPage(props) {

    const { id } = useParams();
    const [event, setEvent] = useState({});
    const [going, setGoing] = useState(false);
    const [userId, setUserId] = useState(0);
    const [organiser, setOrganiser] = useState("");
    const [attendees, setAttendees] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {

        fetch(`/api/getEvent?id=${id}`)
            .then(res => res.json())
            .then(data => {
                setEvent(data);
                fetch(`/api/getUser?id=${data.organiser}`)
                    .then(res => res.json())
                    .then(data => setOrganiser(data.username));
            });

        fetch(`/api/getAttendees?id=${id}`)
            .then(res => res.json())
            .then(data => {
                setAttendees(data)
                fetch('/api/getUserId')
                    .then(resp => resp.json())
                    .then(id => {
                        setUserId(id.id);
                        for (let i = 0; i < data.length; i += 1) {
                            if (id.id === data[i].id.toString()) {
                                setGoing(true);
                                break;
                            }
                        }
                    })
            });

        fetch(`/api/getItemsForEvent?id=${id}`)
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    {event.name}
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
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4}>
                        <Card.Text>
                            Who's coming:
                            <ListGroup as="ol" numbered>
                                {attendees.map(attendee => (
                                    <ListGroup.Item key={attendee.id} as="li">
                                        <Link to={"/profile/" + attendee.id} style={{ textDecoration: 'none' }} >
                                            {attendee.username}
                                        </Link>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Text>
                        Item previews:
                        <ItemPreviews items={items} />
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col>
                        <Card.Text>
                            Organiser:
                            <Link to={"/profile/" + event.organiser} style={{ textDecoration: 'none' }} >
                                {organiser}
                            </Link>
                        </Card.Text>
                    </Col>
                    <Col lg={2}>
                        {
                            (userId === undefined) ?
                                <Button disabled>Log in to attend this event</Button>
                                :
                                (going) ?
                                    <Button variant="primary" align="center" disabled>Already going!</Button>
                                    :
                                    <Button variant="primary" align="center" href={"/event/attend/" + event.id}>I'm Going!</Button>
                        }
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );

}

export default EventPage;