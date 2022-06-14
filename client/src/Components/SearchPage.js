import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function SearchPage(props) {

    const [query, setQuery] = useState("");

    const onKeyUp = (e) => {
        if (e.key === "Enter") {
            getProducts(query);
        }
    }

    async function getProducts() {

        const request = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: query
        };
        const res = await fetch('api/getProducts', request);
        console.log(res);
        const data = await res.json();
        console.log(data);
        props.setProducts(data);
    }

    return (
        <div>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Search Items"
                    aria-label="query"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    onKeyPress={(e) => { onKeyUp(e) }}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={(e) => getProducts()}>
                    Search
                </Button>
            </InputGroup>
        </div>
    );

}

export default SearchPage;