import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';

class PreviouslyReceived extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            received: [],
        };
    }


    componentDidMount() {
        fetch(`/api/getReceivedFor?id=${this.props.user.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                received: data,
            });
        });
    }

    render() {
        return (
            <Container>
            <Row>
                <h2>Previously Received</h2>
            </Row>
            <Row>
                {this.state.received.map(item => (
                    <Col key={item.id}>
                        <Product product={item} />
                    </Col>
                ))}
            </Row>
        </Container>
        );
    }
}

export default PreviouslyReceived;