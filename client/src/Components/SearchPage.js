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

        // const res = await fetch(`api/getProducts?q=${query}`);
        const res = await fetch('api/allProducts');
        console.log(res);
        const data = await res.json();
        props.setProducts([
            {
                id: 1,
                name: "Product 1",
                description: "This is a product",
                image: "https://picsum.photos/200/300/?random",
                seller: "Adam",
                age: "10",
                condition: "50"
            },
            {
                id: 2,
                name: "Product 2",
                description: "This is a product",
                image: "https://picsum.photos/200/300/?random",
                seller: "Devin",
                age: "10",
                condition: "50"
            },
            {
                id: 3,
                name: "Product 3",
                description: "This is a product",
                image: "https://picsum.photos/200/300/?random",
                seller: "Raaif",
                age: "10",
                condition: "50"
            },
            {
                id: 4,
                name: "Product 4",
                description: "This is a product",
                image: "https://picsum.photos/200/300/?random",
                seller: "Josh",
                age: "10",
                condition: "50"
            },
        ]);
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