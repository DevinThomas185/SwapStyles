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
                if (id !== undefined) {
                    setLoggedIn(true);
                    fetch(`/api/getUser?id=${id.id}`)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            setUser(data);
                        });
                    fetch(`/api/getProductsFromSeller?id=${id.id}`)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            setPosts(data);
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

            <h1> Your Listings: </h1>

            <Container>
                <Row>
                    {posts.map(item => (
                        <Col key={item.id}>
                            <Product product={item} />
                            <Button
                                variant="warning"
                                onClick={() => {
                                    const request = {
                                        method: 'DELETE',
                                        headers: { 'Content-Type': 'application/json' },
                                    };
                                    fetch(`/api/deleteProduct?id=${item.id}`, request);
                                    const i = posts.indexOf(item);
                                    if (i > -1) {
                                        posts.splice(i, 1);
                                    }
                                }}
                            >
                                Delete
                            </Button>
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    )
}