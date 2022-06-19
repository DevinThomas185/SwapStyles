import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Product from './Product';

class YourListings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            available: [],
        };
        this.deleteListing = this.deleteListing.bind(this);
    }

    componentDidMount() {
        fetch(`/api/getAvailableProductsFromSeller?id=${this.props.user.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                available: data,
            });
        });
    };

    deleteListing(item) {
        fetch(`/api/deleteProduct?id=${item.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    <h2>Your Listings</h2>
                </Row>
                <Row>
                    {this.state.available.map(item => (
                        <Col key={item.id}>
                            <Product product={item} />
                            <Button
                                variant="warning"
                                onClick={() => this.deleteListing(item)}
                            >
                                Delete Item
                            </Button>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default YourListings;