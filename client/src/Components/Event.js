import React, { Component } from "react";
import Map from "./Map";

class Event extends Component {

    render() {
        return (
            <div class='parent flex-parent'>

                <div class='child flex-child'>
                    <h1> Event Name </h1>
                    <h3> Event description; this event will be a collection of items etc... </h3>
                    <div class="row">
                        <div class="column">
                            <img src="logo192.png" alt="img" />
                            <img src="logo192.png" alt="img" />
                            <img src="logo192.png" alt="img" />
                        </div>
                        <div class="column">
                            <img src="logo192.png" alt="img" />
                            <img src="logo192.png" alt="img" />
                            <img src="logo192.png" alt="img" />
                        </div>
                        <div class="column">
                            <img src="logo192.png" alt="img" />
                            <img src="logo192.png" alt="img" />
                            <img src="logo192.png" alt="img" />
                        </div>
                    </div>
                </div>

                <div class='child flex-child'>
                    <h1> Date </h1>
                    <h1> Time </h1>
                    <h3> Address </h3>
                    <Map />
                </div>

            </div>
        )
    }

}

export default Event