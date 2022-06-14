import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


class Product extends React.Component {
    render() {
        return (
            <Card style={{width: '18rem'}} href="/product/1">
                    <Link to={"/product/"+this.props.product.id}>
                        <Card.Img variant="top" src={this.props.product.url} style={{height: '18rem'}}/>
                    </Link>
                    <Card.Body>
                        <Card.Title>
                            {this.props.product.title}
                        </Card.Title>
                        <Card.Text>
                            {this.props.product.description}
                        </Card.Text>
                        <Card.Text>
                            From: {this.props.product.seller}
                        </Card.Text>
                        {/* <Button variant="primary" align="center" href="/product/1">View</Button> */}
                    </Card.Body>
                </Card>
        );
    }
}

export default Product;