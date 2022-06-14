import React from 'react';
import Product from './Product';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';


class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: "Product 1",
                    description: "This is a product",
                    image: "https://picsum.photos/300/300/?random",
                    seller: "Adam",
                    age: "10",
                    condition: "50"
                },
                {
                    id: 2,
                    name: "Product 2",
                    description: "This is a product",
                    image: "https://picsum.photos/300/300/?random",
                    seller: "Devin",
                    age: "10",
                    condition: "50"
                },
                {
                    id: 3,
                    name: "Product 3",
                    description: "This is a product",
                    image: "https://picsum.photos/300/300/?random",
                    seller: "Raaif",
                    age: "10",
                    condition: "50"
                },
                {
                    id: 4,
                    name: "Product 4",
                    description: "This is a product",
                    image: "https://picsum.photos/300/300/?random",
                    seller: "Josh",
                    age: "10",
                    condition: "50"
                },
            ]
        };
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        {this.state.products.map(item => (
                            <Col key={item.id}>
                                <Product product={item}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Shop;