import React, { useState, useEffect } from "react"

class CreateEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: {
                name: '',
                description: '',
                date: '',
                starttime: '',
                endtime: '',
                location: '',
            }
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            event: {
                ...this.state.event,
                [name]: value
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.event.name,
                description: this.state.event.description,
                date: this.state.event.date,
                starttime: this.state.event.starttime,
                endtime: this.state.event.endtime,
                location: this.state.event.location
             })
        };
        fetch('/addEvent', request);
        

        alert(`Event: ${this.state.event.name} has been created`);
    }

    queryBackend() {
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.event.name,
                description: this.state.event.description,
                date: this.state.event.date,
                starttime: this.state.event.starttime,
                endtime: this.state.event.endtime,
                location: this.state.event.location
             })
        };
        fetch("/api", request);
      }

    render() {
        return (
            <div className="create-event">
                <h1>Create Event</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.event.name} onChange={this.handleChange} />
                    <label>Description:</label>
                    <input type="text" name="description" value={this.state.event.description} onChange={this.handleChange} />
                    <label>Date:</label>
                    <input type="date" name="date" value={this.state.event.date} onChange={this.handleChange} />
                    <label>Start Time:</label>
                    <input type="time" name="starttime" value={this.state.event.starttime} onChange={this.handleChange} />
                    <label>End Time:</label>
                    <input type="time" name="endtime" value={this.state.event.endtime} onChange={this.handleChange} />
                    <label>Location:</label>
                    <input type="text" name="location" value={this.state.event.location} onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}


export default CreateEvent;