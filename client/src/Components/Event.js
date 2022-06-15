import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Event extends React.Component {
    render() {
        return (
            <Card href={"/event/" + this.props.event.id} className="mb-3"  style={{width: '18rem'}}>
                <Link to={"/event/" + this.props.event.id} style={{ textDecoration: 'none' }}>
                    <Card.Body>
                        <Card.Title>
                            {this.props.event.name}
                        </Card.Title>
                        <Row>
                            <Col>
                                <Card.Text>
                                    {this.props.event.description}
                                </Card.Text>
                            </Col>
                            <Col>
                                <Card.Text>
                                    {this.props.event.postcode}
                                </Card.Text>
                                <Card.Text>
                                    {this.props.event.location}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Card.Text>
                            Organiser:
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        );
    }
}

export default Event;