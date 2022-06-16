import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
import { Link } from "react-router-dom";


export default function EventMap(props) {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyCV1xLSpdplVb0nDpJJl1KDkpgjN6rSQ7k"
    })

    const [selected, setSelected] = React.useState(null);


    return (!isLoaded) ? (<div>Loading...</div>) : (
        <div>
            <Row>
                <Col lg={9}>
                    <div style={{ height: '75vh', width: '100%' }}>
                        <GoogleMap
                            center={{ lat: 51.499603, lng: -0.174610, }}
                            zoom={13}
                            mapContainerStyle={{ width: '100%', height: '100%' }}
                            options={{ streetViewControl: false, fullscreenControl: false }}>

                            {props.events.map(event => (
                                <Marker
                                    position={{ lat: event.latitude, lng: event.longitude, }}
                                    onClick={() => {
                                        setSelected(event);
                                    }}
                                />
                            ))}
                            <Marker position={{ lat: 51.499603, lng: -0.174610, }} />
                        </GoogleMap>
                    </div >
                </Col>
                <Col lg={3}>
                    {selected ? (
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    {selected.name}
                                </Card.Title>
                                <Card.Text>
                                    Time: {selected.starttime} - {selected.endtime}
                                </Card.Text>
                                <Card.Text>
                                    Description: {selected.description}
                                </Card.Text>
                                <Card.Text>
                                    Postcode: {selected.postcode}
                                </Card.Text>
                                <Card.Text>
                                    Location: {selected.location}
                                </Card.Text>
                                <Link to={"/event/" + selected.id} style={{ textDecoration: 'none' }}>
                                    <Button> Find Out More</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    ) : null}
                </Col>
            </Row>
        </div>
    )

}