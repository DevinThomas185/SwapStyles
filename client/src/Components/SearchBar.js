import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Badge from 'react-bootstrap/Badge'
import SubCategory from '../Components/SubCategory'



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

    const handleChange = (event) => {
        const { name, value } = event.target;
        props.setFilters({
            ...(props.getFilters()),
            [name]: value
        });
        console.log(props.getFilters())
    }

    const [generalcategory, setGeneralCategory] = useState("none");
    const [category, setCategory] = useState("none");

    
    
    var options = `
        <option value="shoe">Shoe</option>
        <option value="t-shirt">T-Shirts</option>
        <option value="shirt">Shirts</option>
        <option value="dress">Dress</option>
        <option value="trouser">Trousers</option>
        <option value="jeans">Jeans</option>
        <option value="jacket">Jackets</option>
        <option value="coat">Coats</option>
        <option value="hoodie">Hoodies</option>
        <option value="shorts">Shorts</option>
        <option value="sports">Sports</option>
        <option value="other">Other Items</option>
    `;
    

    if (generalcategory === "Tops") {
        options = `
        <option value="t-shirt">T-Shirts</option>
        <option value="shirt">Shirts</option>
        <option value="dress">Dress</option>
        <option value="hoodie">Hoodies</option>
        `;
    } else if (generalcategory === "Bottoms") {
        options = `
        <option value="trouser">Trousers</option>
        <option value="jeans">Jeans</option>
        <option value="shorts">Shorts</option>
        `;
    } else if (generalcategory === "Overwear") {
        options = `
        <option value="jacket">Jackets</option>
        <option value="coat">Coats</option>
        `;
    } else if (generalcategory === "Footwear") {
        options = `
        <option value="shoe">Shoe</option>`;
    } else if (generalcategory === "Other") {
        options = `
        <option value="other">Other Items</option>`;
    } else {
        options = `
            <option value="shoe">Shoe</option>
            <option value="t-shirt">T-Shirts</option>
            <option value="shirt">Shirts</option>
            <option value="dress">Dress</option>
            <option value="trouser">Trousers</option>
            <option value="jeans">Jeans</option>
            <option value="jacket">Jackets</option>
            <option value="coat">Coats</option>
            <option value="hoodie">Hoodies</option>
            <option value="shorts">Shorts</option>
            <option value="sports">Sports</option>
            <option value="other">Other Items</option>
        `;
    }

    return (
        <>
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
                    Go!
                </Button>
            </InputGroup>
        </div>
        <Accordion className="mb-3">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Filters</Accordion.Header>
                <Accordion.Body>
                    <Form>
                        <Row>
                            <Col lg={1}>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Online" onChange={
                                        (event) => {
                                            props.setFilters({
                                                ...(props.getFilters()),
                                                online: event.target.checked
                                            });
                                        }
                                    } />
                                    <Form.Check type="checkbox" label="Event" onChange={
                                        (event) => {
                                            props.setFilters({
                                                ...(props.getFilters()),
                                                event: event.target.checked
                                            });
                                        }
                                    } />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="validationCustom05" as={Col}>
                                    <Form.Label>Condition</Form.Label>
                                    <Row>
                                        <Col lg={1}>
                                            <Badge pill bg="danger">
                                                Poor
                                            </Badge>
                                        </Col>
                                        <Col>
                                            <Form.Range
                                                name='minCondition'
                                                onChange={
                                                    (event) => {
                                                        props.setFilters({
                                                            ...(props.getFilters()),
                                                            minCondition: event.target.value
                                                        });
                                                    }
                                                }
                                            />
                                        </Col>
                                        <Col lg={1}>
                                            <Badge pill bg="success">
                                                Excellent
                                            </Badge>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={2}>
                                <Form.Group controlId="formBasicRange">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control name='maxAge' type="number" min="0" max="10" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group controlId="formControlsSelect" as={Col}>
                                    <Form.Label>Category</Form.Label>
                                    <Row>
                                    <Col id="general-category">
                                            <Form.Control
                                                as="select"
                                                name="general-category"
                                                placeholder="Select a category"
                                                value={generalcategory}
                                                onChange={(e) => {
                                                    setGeneralCategory(e.target.value);
                                                    if (e.target.value === "none") {
                                                        var t = props.getFilters();
                                                        delete t.category;
                                                        props.setFilters(t);
                                                    } else {
                                                        handleChange(e)
                                                    }
                                                }}
                                            >
                                                <option value="none">Select a category (All)</option>
                                                <option value="Tops">Tops</option>
                                                <option value="Bottoms">Bottoms</option>
                                                <option value="Overwear">Overwear</option>
                                                <option value="Footwear">Footwear</option>
                                                <option value="other">Other Items</option>
                                            </Form.Control>
                                            <Form.Control.Feedback>Cool Category!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">Please provide a Category.</Form.Control.Feedback>
                                        </Col>
                                        <Col>
                                            <Form.Control
                                                as="select"
                                                name="category"
                                                placeholder="Select a category"
                                                value={category}
                                                onChange={(e) => {
                                                    setCategory(e.target.value);
                                                    if (e.target.value === "none") {
                                                        var t = props.getFilters();
                                                        delete t.category;
                                                        props.setFilters(t);
                                                    } else {
                                                        handleChange(e)
                                                    }
                                                }}
                                            >
                                                <SubCategory niche={generalcategory}/>
                                            </Form.Control>
                                            <Form.Control.Feedback>Cool Category!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">Please provide a Category.</Form.Control.Feedback>
                                        </Col>
                                        
                                        <Col>
                                            <Button
                                                onClick={(e) => {
                                                    setCategory("none")
                                                    var t = props.getFilters();
                                                    delete t.category;
                                                    props.setFilters(t);
                                                    setGeneralCategory("none")
                                                    var t = props.getFilters();
                                                    delete t.generalcategory;
                                                    props.setFilters(t);
                                                }}
                                                variant="danger"
                                            >
                                                x
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button
                                                id="apply-btn"
                                                onClick={(e) => props.getResults(query)}
                                                variant="outline-info"
                                            >
                                                    Apply
                                                </Button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </>
    );

}

export default SearchBar;