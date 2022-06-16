import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

class NearbyEvents extends React.Component {
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
        return new Date(date).toLocaleDateString('en-US', 
        {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        );
    }

    getTime(time) {
        return time.substring(0, time.length - 3);
    }

    componentDidMount() {
        this.getNearbyEvents();
    }

    render() {
        return (
            <ListGroup>
                {this.state.nearbyEvents.map(event => (
                    <Link to={`/event/${event.id}`}  style={{ textDecoration: 'none' }} key={event.id}>
                        <ListGroup.Item>
                            <Row >
                                <Col lg={7}>
                                    <h6>
                                        {event.name}
                                    </h6>
                                </Col>
                                <Col lg={3}>
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
        );
    }
}

export default NearbyEvents;
