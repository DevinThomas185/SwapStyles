import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

class TradeOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            item: {
                title: '',
                description: '',
                image: '',
                age: '0',
                condition: 50,
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            ...this.state,
            item: {
                ...this.state.item,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        console.log(this.state.item.title);
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: this.state.item.title,
                description: this.state.item.description,
                image: this.state.item.image,
                age: this.state.item.age,
                condition: this.state.item.condition
             })
        };
        
        fetch('/api/addProduct', request);
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <FloatingLabel label="Name of Item" className="mb-3">
                        <Form.Control type="text" placeholder="Enter Title" name="title" onChange={this.handleChange} required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a title.
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDesc">
                    <FloatingLabel label="Description" className="mb-3">
                        <Form.Control type="text" placeholder="Enter Description" name="description" onChange={this.handleChange} required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a description.
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>

                <Row>
                    <Col lg={8}>
                        <Form.Group className='mb-3' controlId="formBasicFile">
                            <Form.Label>Upload Image</Form.Label>
                            <Form.Control type="file" name="image" onChange={this.handleChange} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide an image.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3' controlId="formBasicSelect">
                            <Form.Label>Age</Form.Label>
                            <Form.Select aria-label="Default select example" name="age" onChange={this.handleChange} required>
                                <option value="0">New</option>
                                <option value="1">0 - 1 Years</option>
                                <option value="2">1 - 2 Years</option>
                                <option value="3">2 - 3 Years</option>
                                <option value="4">3 - 5 Years</option>
                                <option value="5">5 - 10 Years</option>
                                <option value="6">10+ Years</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                
                <Form.Group className='mb-3'>
                    <Form.Label>Condition</Form.Label>
                    <Form.Range name="condition" onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        );
    }
}

export default TradeOut;