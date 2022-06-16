import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Product from "../Components/Product";

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
        setup();
    })

    return (
        <div>

            <Card>
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

            <h1> Your Listings: </h1>

            <Container>
                <Row>
                    {posts.map(item => (
                        <Col key={item.id}>
                            <Product product={item} />
                            <Button variant="warning"> Delete </Button>
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    )
}