import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';


export default function Profile() {

    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false)

    function setup() {
        fetch('/api/getUserId')
            .then(resp => resp.json())
            .then(id => {
                console.log(id)
                if (id != undefined) {
                    setLoggedIn(true);
                    fetch(`/api/getUser?id=${id}`)
                        .then(res => res.json())
                        .then(data => setUser(data));
                    fetch(`/api/getProductsFromSeller?id=${id}`)
                        .then(res => res.json())
                        .then(data => setPosts(data));
                }
            })
    }

    useEffect(() => {

    })

    return (
        <div>

            <h1> </h1>

            <Card>
                <Card.Header>
                    Your Details: {user.username}
                </Card.Header>
            </Card>
        </div>
    )
}