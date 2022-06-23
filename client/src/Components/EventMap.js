import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'


export default function EventMap(props) {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyCV1xLSpdplVb0nDpJJl1KDkpgjN6rSQ7k"
    })

    const [selected, setSelected] = useState(null);
    const [closeAlert, setCloseAlert] = useState(false);
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);


    function getTime(time) {
        return time.substring(0, time.length - 3);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
        })
    }, [])


    return (!isLoaded) ? (<div>Loading...</div>) : (
        <div>
            <Row>
                <Col lg={9}>
                    <div style={{ height: '75vh', width: '100%' }}>
                        <GoogleMap
                            center={{ lat: lat, lng: lng, }}
                            zoom={13}
                            mapContainerStyle={{ width: '100%', height: '100%' }}
                            options={{ streetViewControl: false, fullscreenControl: false }}>

                            {props.events.map(event => (
                                <Marker
                                    key={event.id}
                                    position={{ lat: event.latitude, lng: event.longitude, }}
                                    onClick={() => {
                                        setSelected(event);
                                        setLat(event.latitude);
                                        setLng(event.longitude);
                                    }}
                                />
                            ))}
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
                                    Date: {(new Date(selected.date)).toLocaleDateString("en-US",
                                        {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        }
                                    )}
                                </Card.Text>
                                <Card.Text>
                                    Time: {getTime(selected.starttime)} - {getTime(selected.endtime)}
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
                    ) : (
                        (!closeAlert) ?
                            <Alert 
                            variant="info"
                            dismissible 
                            onClose={() => setCloseAlert(true)}>
                                <Alert.Heading>Hello there!</Alert.Heading>
                                <p>
                                    Here you can view events that are taking place. You can click on a marker to see the event and view details about it. 
                                </p>
                                <hr />
                                <p>
                                    If you choose to find out more, you will be able to choose to attend the event, see who else is attending and what items will be brought to the event.
                                </p>
                                <hr />
                                <p>
                                    Have fun exploring!
                                </p>
                            </Alert>
                        : 
                            (<Button onClick={() => setCloseAlert(false)}>Click for Info!</Button>)
                    )}
                </Col>
            </Row>
        </div>
    )

}