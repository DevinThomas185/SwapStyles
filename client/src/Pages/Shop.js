import React, { useState } from 'react';
import Product from '../Components/Product';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import SearchBar from '../Components/SearchBar';


function Shop() {

    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({});

    function getFilters() {
        return filters;
    }


    async function getProducts(query) {
        const queryString = Object.keys(filters).map(key => key + '=' + filters[key]).join('&')
        // const res = await fetch(`/api/getProducts?q=${query}`);
        console.log(queryString);
        const res = await fetch(`/api/getProducts?q=${query}&${queryString}`);
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
            <SearchBar getResults={getProducts} setFilters={setFilters} getFilters={getFilters} />
            {/* <Filters setFilters={setFilters} getFilters={getFilters} /> */}
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