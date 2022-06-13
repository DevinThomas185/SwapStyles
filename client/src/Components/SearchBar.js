import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar() {

    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    return (
        <div>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Search Items"
                    aria-label="query"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
        </div>
    );
}

export default SearchBar;