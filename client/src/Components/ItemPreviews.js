import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


class ItemPreviews extends React.Component {
    render() {
        return (
            <Carousel interval={10000}>
                {this.props.items.map(item => (
                    <Carousel.Item key={item.id}>
                        
                        <a href={"/product/" + item.id}>
                            <img src={item.url} alt={item.description} className='mx-auto d-block' height={200}/>
                        </a>
                        <Carousel.Caption>
                            <p>{item.title}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        );
    }
}

export default ItemPreviews;