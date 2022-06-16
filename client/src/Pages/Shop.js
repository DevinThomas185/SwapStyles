import React from 'react';
import Product from '../Components/Product';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import SearchBar from '../Components/SearchBar';
import Filters from '../Components/Filters';


class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.getProducts = this.getProducts.bind(this);
        this.available = this.available.bind(this);
    }


    async getProducts(query) {
        const res = await fetch(`/api/getProducts?q=${query}`);
        console.log(res);
        const data = await res.json();
        data.reverse()
        console.log(data);
        this.setState({
            products: data
        });
    }

    async available(product) {
        if (product.online) {
            console.log("online")
            return ("online")
        } else {
            return fetch(`/api/getEvent/?id=${product.eventid}`)
            .then(res => res.json())
            .then(data => { 
                console.log(data.name);
                return ("at " + data.name) 
            })
        }
    }


    render() {
        return (
            <div>
                <SearchBar getResults={this.getProducts} />
                <Filters />
                <Container>
                    <Row>
                        {this.state.products.map(item => (
                            <Col key={item.id}>
                                <Product product={item} available={this.available}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Shop;