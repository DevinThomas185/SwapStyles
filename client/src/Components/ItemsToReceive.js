import React from 'react';
import Product from './Product';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class ItemsToReceive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toReceive: [],
        };
    }

    confirmed(id) {
        fetch(`/api/confirmReceived?id=${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
    }

    componentDidMount() {
        fetch(`/api/getToReceiveFor?id=${this.props.user.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                toReceive: data,
            });
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    <h2>Items to Receive</h2>
                </Row>
                <Row>
                    {this.state.toReceive.map(item => (
                        <Col key={item.id}>
                            <Product product={item} />
                            <Button 
                            variant="warning"
                            onClick={() => this.confirmed(item.id)}>
                                I've received this!
                            </Button>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default ItemsToReceive;