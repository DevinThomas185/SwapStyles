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
            sentStates: {},
        };
    }

    confirmSent(id) {
        return fetch(`/api/isConfirmedSent?id=${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data;
        })
    }

    confirmed(id) {
        fetch(`/api/confirmSent?id=${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
    }

    componentDidMount() {
        fetch(`/api/getToSendFrom?id=${this.props.user.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                toSend: data,
            });
            data.forEach(item => {
                this.confirmSent(item.id).then(sent => {
                    this.setState({
                        sentStates: {
                            ...this.state.sentStates,
                            [item.id]: sent,
                        }
                    });
                });
            });
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    <h2>Items to Send</h2>
                </Row>
                <Row>
                    {this.state.toSend.map(item => (
                            <Col key={item.id}>
                                <Product product={item} />
                                {this.state.sentStates[item.id] ?
                                    <Button variant="primary" disabled>Already Sent</Button> :
                                    <Button variant="warning" onClick={() => this.confirmed(item.id)}>I've sent this!</Button>
                                }
                            </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default ItemsToSend;