import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import SustainableAlternatives from '../Components/SustainableAlternatives';
import { useParams } from 'react-router-dom';
import { timeSince } from '../Components/RecentItems';
import { Link } from "react-router-dom"

function ProductPage(props) {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [seller, setSeller] = useState("");
    const [user, setUser] = useState({});
    const [faved, setFaved] = useState(false);

    useEffect(() => {
        fetch(`/api/getProduct?id=${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                console.log(data);
                fetch(`/api/getUser?id=${data.sellerid}`)
                    .then(res => res.json())
                    .then(data => setSeller(data.username));
            });

        fetch('/api/getUserId')
            .then(resp => resp.json())
            .then(id => {
                if (id.id !== undefined) {
                    console.log("ID ", id)
                    fetch(`/api/getUser?id=${id.id}`)
                        .then(res => res.json())
                        .then(data => {
                            setUser(data);
                        });
                }
            })
    }, []);

    const addFavourite = () => {
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                pId: id
            })
        };
        fetch(`/api/addFavourite`, request);
        setFaved(true);
    }

    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    {product.title}
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col lg={4}>
                        <Card.Img variant="top" src={product.url} style={{ height: 'auto', width: '20rem' }} />
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mt-2">
                                <Card>
                                    <Card.Body>
                                        <Card.Text>
                                            Age: {product.age} Years
                                        </Card.Text>
                                        <Card.Text>
                                            Condition:
                                            <Form.Range disabled value={product.condition} />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col className="mt-2">
                                <Card.Text>
                                    Sustainable Alternatives:
                                </Card.Text>
                                <SustainableAlternatives />
                            </Col>
                        </Row> */}
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col>
                        <Card.Text>
                            From:
                            <Link to={"/profile/" + product.sellerid} style={{ textDecoration: 'none' }} >
                                {" " + seller}
                            </Link>
                        </Card.Text>
                        <Card.Text>
                            {timeSince(product.submitted)}
                        </Card.Text>
                    </Col>
                    <Col lg={1}>
                        {(product.sellerid === user.id ?
                            <div></div> :
                            (!faved ?
                                <Button variant="primary" onClick={addFavourite} >Favourite</Button> :
                                <Button variant="primary" disabled >saved</Button>
                            )
                        )}
                    </Col>
                    <Col lg={2}>
                        {(product.sellerid === user.id ?
                            <Button variant="primary" disabled >This is your listing</Button> :
                            (product.online ?
                                <Button variant="primary" align="center" href={"/tradein/" + product.id}>I want it!</Button> :
                                <Button variant="primary" disabled >Not available online</Button>)
                        )}
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
}

export default ProductPage;
