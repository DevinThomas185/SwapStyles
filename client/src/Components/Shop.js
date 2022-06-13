import React from 'react';
import Product from './Product';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import SearchPage from './SearchPage';


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
                            <React.Fragment key={item.id}>
                                <Col>
                                    <Product product={item} />
                                </Col>
                            </React.Fragment>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Shop;