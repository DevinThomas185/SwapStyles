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
        // this.deleteListing = this.deleteListing.bind(this);
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
                                onClick={() => console.log("TODO: remove fav")}
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