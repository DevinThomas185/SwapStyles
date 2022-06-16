import React, { useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
import { Link } from "react-router-dom";


export default function EventMap(props) {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyCV1xLSpdplVb0nDpJJl1KDkpgjN6rSQ7k"
    })

    const [selected, setSelected] = React.useState(null);
    const [lat, setLat] = React.useState(51.499603);
    const [lng, setLng] = React.useState(-0.174610);


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
                    ) : null}
                </Col>
            </Row>
        </div>
    )

}