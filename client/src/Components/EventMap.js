import React from "react";

import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'


export default function EventMap(props) {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyCV1xLSpdplVb0nDpJJl1KDkpgjN6rSQ7k"
    })

    if (!isLoaded) {
        return <div> Loading... </div>
    }

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMap
                center={{ lat: 51.499603, lng: -0.174610, }}
                zoom={13}
                mapContainerStyle={{ width: '100%', height: '100%' }}
                options={{ streetViewControl: false, fullscreenControl: false }}>
                <Marker position={{ lat: 51.499603, lng: -0.174610, }} />
            </GoogleMap>
        </div>
    )

}