import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import YourListings from "../Components/YourListings";
import ItemsToSend from "../Components/ItemsToSend";
import ItemsToReceive from "../Components/ItemsToReceive";
import PreviouslySent from "../Components/PreviouslySent";
import PreviouslyReceived from "../Components/PreviouslyReceived";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default function Profile() {

    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false)

    function setup() {
        fetch('/api/getUserId')
            .then(resp => resp.json())
            .then(id => {
                console.log(id)
                if (id !== undefined) {
                    fetch(`/api/getUser?id=${id.id}`)
                    .then(res => res.json())
                    .then(data => {
                            setLoggedIn(true);
                            console.log(data);
                            setUser(data);
                    });
                }
            })
    }

    useEffect(() => {
        setup();
    }, [])

    const balance = () => {
        if (user.balance === undefined) {
            return "0 Trades";
        } else if (user.balance === 1) {
            return "1 Trade";
        } else {
            return user.balance + " Trades";
        }
    }

    return (
        <div>
            <h1> Balance: {balance()}</h1>

            <Card className="mb-3">
                <Card.Header>
                    Your Details
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Username: {user.username}
                    </Card.Text>
                    <Card.Text>
                        Age: {user.age}
                    </Card.Text>
                    <Card.Text>
                        Postcode: {user.postcode}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="mb-3">
                <Card.Header>
                    Your Statistics
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Items Swapped Away: {user.swappedaway}
                    </Card.Text>
                    <Card.Text>
                        Items Swapped For: {user.swappedfor}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Tabs defaultActiveKey="listings">
                <Tab eventKey="listings" title="Your Listings">
                    {(loggedIn ? <YourListings user={user}/> : <div></div>)}
                </Tab>
                <Tab eventKey="items-to-send" title="Items To Send">
                    {(loggedIn ? <ItemsToSend user={user}/> : <div></div>)}
                </Tab>
                <Tab eventKey="items-to-receive" title="Items To Receive">
                    {(loggedIn ? <ItemsToReceive user={user}/> : <div></div>)}
                </Tab>
                <Tab eventKey="previously-sent" title="Previously Sent">
                    {(loggedIn ? <PreviouslySent user={user}/> : <div></div>)}
                </Tab>
                <Tab eventKey="previously-received" title="Previously Received">
                    {(loggedIn ? <PreviouslyReceived user={user}/> : <div></div>)}
                </Tab>
            </Tabs>
        </div>
    )
}