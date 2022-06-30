import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';


class PreviouslySent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sent: [],
        };
    }


    componentDidMount() {
        fetch(`/api/getSentFrom?id=${this.props.user.id}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                sent: data,
            });
        });
    }

    render() {
        return (
            <Container>
            <Row>
                <h2>Previously Sent</h2>
            </Row>
            <Row>
                {this.state.sent.map(item => (
                    <Col key={item.id}>
                        <Product product={item} />
                    </Col>
                ))}
            </Row>
        </Container>
        );
    }
}

export default PreviouslySent;