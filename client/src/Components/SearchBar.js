import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function SearchBar(props) {

    const [query, setQuery] = useState("");

    const onKeyUp = (e) => {
        if (e.key === "Enter") {
            props.getResults(query);
        }
    }

    useEffect(() => {
        props.getResults(query)
    }, []);


    return (
        <div>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Search"
                    aria-label="query"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    onKeyPress={(e) => { onKeyUp(e) }}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={(e) => props.getResults(query)}>
                    Search
                </Button>
            </InputGroup>
        </div>
    );

}

export default SearchBar;