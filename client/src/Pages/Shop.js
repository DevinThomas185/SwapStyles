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
        const res = await fetch(`/api/getProducts?q=${query}&${queryString}`);
        const data = await res.json();
        data.reverse()
        setProducts(data);
    }

    return (
        <div>
            <SearchBar getResults={getProducts} setFilters={setFilters} getFilters={getFilters} type="items" />
            <Container>
                <Row>
                    {products.map(item => (
                        <Col key={item.id}>
                            <Product product={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );

}

export default Shop;