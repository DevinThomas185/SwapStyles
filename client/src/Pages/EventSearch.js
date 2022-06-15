import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import SearchBar from '../Components/SearchBar';
import Event from '../Components/Event';
import EventMap from '../Components/EventMap';


class EventSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
        this.getEvents = this.getEvents.bind(this);
    }


    async getEvents(query) {
        const res = await fetch(`/api/getEvents?q=${query}`);
        console.log(res);
        const data = await res.json();
        console.log(data);
        this.setState({
            events: data
        });
    }


    render() {
        return (
            <div>
                <SearchBar getResults={this.getEvents} />
                <EventMap events={this.state.events} />
                <Container>
                    <Row>
                        {this.state.events.map(event => (
                            <Col key={event.id}>
                                <Event event={event} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default EventSearch;