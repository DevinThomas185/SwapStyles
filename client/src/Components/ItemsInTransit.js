import React from 'react';
import Product from './Product';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ItemsInTransit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toSend: [],
        };
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
                    <h2>Items in Transit</h2>
                </Row>
                <Row>
                    {this.state.toSend.map(item => (
                        <Col key={item.id}>
                            <Product product={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default ItemsInTransit;