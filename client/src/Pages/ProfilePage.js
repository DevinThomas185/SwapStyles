import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import TheirListings from "../Components/TheirListings";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useParams } from "react-router-dom";

function ProfilePage() {

    const { id } = useParams()
    const [user, setUser] = useState({});

    useEffect(() => {
        if (id !== undefined) {
            fetch(`/api/getUser?id=${id}`)
                .then(res => res.json())
                .then(data => setUser(data));
        }
    }, [])

    return (
        <div>
            <Card className="mb-3">
                <Card.Header>
                    {user.username}
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
                <Tab eventKey="listings" title={user.username + "'s Listings"}>
                    <TheirListings id={id}/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default ProfilePage;