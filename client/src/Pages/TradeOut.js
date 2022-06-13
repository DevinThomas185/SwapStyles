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
                age: '',
                condition: 50,
            }
        };
        this.setTitle = this.setTitle.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.setImage = this.setImage.bind(this);
        this.setAge = this.setAge.bind(this);
        this.setCondition = this.setCondition.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setTitle(event) {
        this.setState({
            item: {
                title: event.target.value
            }
        });
    }

    setDescription(event) {
        this.setState({
            item: {
                description: event.target.value
            }
        });
    }

    setImage(event) {
        this.setState({
            item: {
                image: event.target.value
            }
        });
    }

    setAge(event) {
        this.setState({
            item: {
                age: event.target.value
            }
        });
    }

    setCondition(event) {
        this.setState({
            item: {
                condition: event.target.value
            }
        });
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    render() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <FloatingLabel label="Name of Item" className="mb-3">
                        <Form.Control type="text" placeholder="Enter Title" onChange={this.setTitle} required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a title.
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDesc">
                    <FloatingLabel label="Description" className="mb-3">
                        <Form.Control type="text" placeholder="Enter Description" onChange={this.setDescription} required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a description.
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>

                <Row>
                    <Col lg={8}>
                        <Form.Group className='mb-3' controlId="formBasicFile">
                            <Form.Label>Upload Image</Form.Label>
                            <Form.Control type="file" onChange={this.setImage} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide an image.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3' controlId="formBasicSelect">
                            <Form.Label>Age</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={this.setAge} required>
                                <option>New</option>
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
                    <Form.Range onChange={this.setCondition}/>
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