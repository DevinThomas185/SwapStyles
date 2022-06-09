import React, { Component } from "react";

import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'


export default function Map() {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyCV1xLSpdplVb0nDpJJl1KDkpgjN6rSQ7k"
    })

    if (!isLoaded) {
        return <div> Loading... </div>
    }

    return (
        <div style={{ height: '50vh', width: '50vw' }}>
            <GoogleMap
                center={{ lat: 51.498356, lng: -0.176894 }}
                zoom={12}
                mapContainerStyle={{ width: '75%', height: '100%' }}
                options={{ streetViewControl: false, fullscreenControl: false }}>
                <Marker position={{ lat: 51.498356, lng: -0.176894 }} />
            </GoogleMap>
        </div>
    )

}
