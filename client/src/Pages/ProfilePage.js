import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import TheirListings from "../Components/TheirListings";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

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

    if (user) {
        return (
            <div>
                <Card className="mb-3">
                    <Card.Header>
                        <h2>
                            {user.username}
                        </h2>
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
                <h3>
                    {user.username + "'s Listings"}
                </h3>
                <TheirListings id={id}/>
            </div>
        )
    }
}

export default ProfilePage;