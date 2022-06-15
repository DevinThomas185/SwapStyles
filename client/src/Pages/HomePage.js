import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nearbyEvents: [],
        };
    }

    getNearbyEvents() {
        navigator.geolocation.getCurrentPosition(position => {
            fetch('/api/getNearbyEvents', {
                method: 'POST',
                body: JSON.stringify({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    radius: 10 // 0.1 recommended
                }),
                headers: { 'Content-Type': 'application/json' }
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.setState({
                        nearbyEvents: data
                    });
                }
                );
        })
    }

    getDate(date) {
        return new Date(date).toLocaleDateString();
    }

    getTime(time) {
        return time.substring(0, time.length - 3);
    }

    componentDidMount() {
        this.getNearbyEvents();
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className="mb-5">
                        <h2>Events near you</h2>
                        <ListGroup>
                            {this.state.nearbyEvents.map(event => (
                                <Link to={`/event/${event.id}`}  style={{ textDecoration: 'none' }} key={event.id}>
                                    <ListGroup.Item>
                                        <Row >
                                            <Col lg={8}>
                                                <h6>
                                                    {event.name}
                                                </h6>
                                            </Col>
                                            <Col lg={2}>
                                                {this.getDate(event.date)}
                                            </Col>
                                            <Col lg={2}>
                                                {this.getTime(event.starttime)} - {this.getTime(event.endtime)}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </Link>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Recently listed items</h2>
                        <ListGroup>
                            <ListGroup.Item>Item 1</ListGroup.Item>
                            <ListGroup.Item>Item 2</ListGroup.Item>
                            <ListGroup.Item>Item 3</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HomePage;