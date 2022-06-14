import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


class SustainableAlternatives extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: "Product 1",
                    description: "This is a product",
                    image: "https://picsum.photos/200/300/?random",
                    seller: "Adam",
                    url: "https://www.amazon.com/dp/B07CZQZQQZ",
                },
                {
                    id: 2,
                    name: "Product 2",
                    description: "This is a product",
                    image: "https://picsum.photos/200/300/?random",
                    seller: "Devin",
                    url: "https://www.amazon.com/dp/B07CZQZQQZ",
                },
            ]
        };
    }

    render() {
        return (
            <Carousel interval={10000}>
                {this.state.products.map(product => (
                    <Carousel.Item key={product.id}>
                        <a href={product.url}>
                            <img src={product.image} alt="Sustainable Alternative" className='col-md-4' style={{width: "100%", margin: "auto"}}/>
                        </a>
                        <Carousel.Caption>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        );
    }
}

export default SustainableAlternatives;