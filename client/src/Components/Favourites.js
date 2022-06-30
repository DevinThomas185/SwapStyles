import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Product from './Product';

function Favourites(props) {

    const [favourites, setFavourites] = useState([]);

    const getFavourites = async () => {
        await fetch(`/api/getFavourites?id=${props.user.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFavourites(data);
            });
    }

    const removeFavourite = async (item) => {
        await fetch(`/api/removeFavourite?pId=${item.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        getFavourites();
    }

    useEffect(() => {
        getFavourites();
    }, []);


    return (
        <Container>
            <Row>
                <h2>Your Favourites</h2>
            </Row>
            <Row>
                {favourites.map(item => (
                    <Col key={item.id} className="d-grid gap-1" lg={3}>
                        <Product product={item} />
                        <Button
                            style={{ height: 40 }}
                            block
                            variant="warning"
                            onClick={() => removeFavourite(item)}
                        >
                            Remove From Favourites
                        </Button>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Favourites;