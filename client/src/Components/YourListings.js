import React, { Fragment, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Product from './Product';

function YourListings(props) {

    const [available, setAvailable] = useState([]);

    const getProducts = async () => {
        await fetch(`/api/getAvailableProductsFromSeller?id=${props.user.id}`)
            .then(res => res.json())
            .then(data => {
                setAvailable(data);
            });
    }

    useEffect(() => {
        getProducts();
    }, []);

    const deleteListing = async (item) => {
        await fetch(`/api/deleteProduct?id=${item.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        // setAvailable(available.filter(listing => listing.id !== item.id))
        getProducts();
    }


    return (
        <Fragment>
            <Container>
                <Row>
                    <h2>Your Listings</h2>
                </Row>
                <Row>
                    {available.map(item => (
                        <Col key={item.id} className="d-grid gap-1" lg={3}>
                            <Product product={item} />
                            <Button
                                block
                                style={{ height: 40 }}
                                variant="warning"
                                onClick={() => deleteListing(item)}
                            >
                                Delete Item
                            </Button>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Fragment>
    );
}

export default YourListings;