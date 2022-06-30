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
                    <Col key={item.id}>
                        <Product product={item} />
                        <Button
                            variant="warning"
                            onClick={() => removeFavourite(item)}
                        >
                            Remove Favourite
                        </Button>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Favourites;