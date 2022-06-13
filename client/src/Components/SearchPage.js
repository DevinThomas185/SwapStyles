import React, { useState } from 'react';
import Product from './Product';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function SearchPage() {

    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    async function getProducts() {
        const res = await fetch(`api/getProducts?q=${query}`);
        const data = await res.json();
        setData(data)
    }

    return (
        <div>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Search Items"
                    aria-label="query"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={(e) => getProducts()}>
                    Search
                </Button>
            </InputGroup>
            <Container>
                <Row>
                    {data.map(item => (
                        <React.Fragment key={item.id}>
                            <Col>
                                <Product product={item} />
                            </Col>
                        </React.Fragment>
                    ))}
                </Row>
            </Container>
        </div>
    );

}

export default SearchPage;