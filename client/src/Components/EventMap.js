import React from "react";
import Event from './Event';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { useJsApiLoader, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api'


export default function EventMap(props) {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyCV1xLSpdplVb0nDpJJl1KDkpgjN6rSQ7k"
    })

    if (!isLoaded) {
        return <div> Loading... </div>
    }

    const events = [
        {
            "id": 17,
            "name": "Red Clothes Swap",
            "description": "A swap for all clothing RED",
            "date": "2022-07-01T00:00:00.000Z",
            "starttime": "17:14:00",
            "endtime": "18:14:00",
            "location": "NSB",
            "postcode": "NN1 5RT",
            "longitude": -0.8675375999999999,
            "latitude": 52.2392307
        },
        {
            "id": 21,
            "name": "Sports Kit Swap",
            "description": "Bring along all the sports kit you bought and never ended up using. Trainers, training tops etc.",
            "date": "2022-06-30T00:00:00.000Z",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "location": "Ethos Sports Centre",
            "postcode": "SW7 1NA",
            "longitude": -0.1726571,
            "latitude": 51.5002577
        },
        {
            "id": 22,
            "name": "WOWO",
            "description": "WOWO",
            "date": "+275760-03-12T00:00:00.000Z",
            "starttime": "12:12:00",
            "endtime": "12:15:00",
            "location": "WOWO",
            "postcode": "HP13 5SP",
            "longitude": -0.7583641999999999,
            "latitude": 51.6380608
        },
        {
            "id": 16,
            "name": "Luxury Brands Swap",
            "description": "A swap for brands such as Versace, Gucci and Hermes",
            "date": "2022-06-05T00:00:00.000Z",
            "starttime": "04:53:00",
            "endtime": "03:53:00",
            "location": "Test",
            "postcode": "SW7 2AZ",
            "longitude": -0.1768985,
            "latitude": 51.4983184
        }
    ]


    return (
        <div>
            <Row>
                <Col lg={9}>
                    <div style={{ height: '100vh', width: '100%' }}>
                        <GoogleMap
                            center={{ lat: 51.499603, lng: -0.174610, }}
                            zoom={13}
                            mapContainerStyle={{ width: '100%', height: '100%' }}
                            options={{ streetViewControl: false, fullscreenControl: false }}>

                            {events.map(event => (
                                <Marker position={{ lat: event.latitude, lng: event.longitude, }} />
                            ))}
                            <Marker position={{ lat: 51.499603, lng: -0.174610, }} />
                        </GoogleMap>
                    </div >
                </Col>
                <Col lg={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                Title
                            </Card.Title>
                            <Card.Text>
                                desc
                            </Card.Text>
                            <Card.Text>
                                post
                            </Card.Text>
                            <Card.Text>
                                location
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )

}