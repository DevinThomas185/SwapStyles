import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Product from './Product';

class Favourites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favourites: [],
        };
        this.removeFavourite = this.removeFavourite.bind(this);
    }

    componentDidMount() {
        fetch(`/api/getFavourites?id=${this.props.user.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    favourites: data,
                });
            });
    };

    removeFavourite(item) {
        fetch(`/api/removeFavourite?pId=${item.id}`, {
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
                    <h2>Your Favourites</h2>
                </Row>
                <Row>
                    {this.state.favourites.map(item => (
                        <Col key={item.id}>
                            <Product product={item} />
                            <Button
                                variant="warning"
                                onClick={() => this.removeFavourite(item)}
                            >
                                Remove Favourite
                            </Button>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Favourites;