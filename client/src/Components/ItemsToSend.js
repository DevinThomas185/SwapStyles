import React from 'react';
import Product from './Product';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class ItemsToSend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toSend: [],
        };

    }

    confirmed(id) {
        fetch(`/api/confirmSent?id=${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
    }

    componentDidMount() {
        fetch(`/api/getToSendProductsFromSeller?id=${this.props.user.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                toSend: data,
            });
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    <h2>Items to Send</h2>
                </Row>
                    {this.state.toSend.map(item => (
                    <Row key={item.id}>
                        <Col>
                            <Product product={item} />
                            <Button 
                            variant="warning"
                            onClick={() => this.confirmed(item.id)}>
                                I've sent this!
                            </Button>
                        </Col>
                    </Row>
                ))}
            </Container>
        );
    }
}

export default ItemsToSend;