import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';
import React, { useEffect, useState } from 'react'

function ProductListEvent(props) {

    const [events, setEvents] = useState([]);

    const getEvents = () => {
        fetch('/api/getAllEvents')
            .then(res => res.json())
            .then(data => {
                setEvents(data);
                console.log(data);
            })
    }

    useEffect(() => {
        getEvents();
    }, []);


    if (props.online) {
        return (
            <>
            </>
        )
    } else {
        return (
            <DropdownButton 
            menuVariant="light"
            id="dropdown-basic"
            drop="end"
            key="end"
            align='bottom'
            title={"Event: " + props.event.name}
            >
                {events.map(event => (
                    <DropdownItem 
                    key={event.id} 
                    onClick={() => props.setEvent(event)}
                    >
                        {event.name}
                    </DropdownItem>
                ))}
            </DropdownButton>
        )
    }

}


export default ProductListEvent;