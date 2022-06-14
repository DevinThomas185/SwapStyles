import React from 'react';
import Product from '../Components/Product';
import SearchPage from '../Components/SearchPage';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';


class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.setProducts = this.setProducts.bind(this);
    }

    setProducts(products) {
        this.setState({
            products: products
        });
    }

    render() {
        return (
            <div>
                <SearchPage setProducts={this.setProducts}/>
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