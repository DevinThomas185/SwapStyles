import React from 'react';
import SearchBar from '../Components/SearchBar';
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
        const data = await res.json();
        this.setState({
            events: data
        });
    }


    render() {
        return (
            <div>
                <SearchBar getResults={this.getEvents} />
                <EventMap events={this.state.events} />
            </div>
        );
    }
}

export default EventSearch;