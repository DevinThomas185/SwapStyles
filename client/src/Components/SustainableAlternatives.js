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
                    image: "https://picsum.photos/300/300/?random",
                    seller: "Adam",
                    url: "https://www.amazon.com/dp/B07CZQZQQZ",
                },
                {
                    id: 2,
                    name: "Product 2",
                    image: "https://picsum.photos/300/300/?random",
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
                            <img src={product.image} alt="Sustainable Alternative" className='mx-auto d-block' height={200}/>
                        </a>
                        <Carousel.Caption>
                            <p>{product.name}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        );
    }
}

export default SustainableAlternatives;