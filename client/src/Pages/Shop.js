import React, { useState } from 'react';
import Product from '../Components/Product';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import SearchBar from '../Components/SearchBar';
import Filters from '../Components/Filters';


function Shop() {

    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        minCondition: 0,
        online: false,
        event: false,
        maxAge: 10
    });

    function getFilters() {
        return filters;
    }


    async function getProducts(query) {
        const res = await fetch(`/api/getProducts?q=${query}`);
        console.log(res);
        const data = await res.json();
        data.reverse()
        console.log(data);
        setProducts(data);
    }

    async function available(product) {
        if (product.online) {
            return ("online")
        } else {
            return fetch(`/api/getEvent/?id=${product.eventid}`)
                .then(res => res.json())
                .then(data => {
                    return ("at " + data.name)
                })
        }
    }


    return (
        <div>
            <SearchBar getResults={getProducts} />
            <Filters setFilters={setFilters} getFilters={getFilters} />
            <Container>
                <Row>
                    {products.map(item => (
                        <Col key={item.id}>
                            <Product product={item} available={available(item)} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );

}

export default Shop;