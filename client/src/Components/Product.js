import React from 'react';
import Card from 'react-bootstrap/Card';
import { timeSince } from './RecentItems';
import { Link } from 'react-router-dom';
import { timeSince } from './RecentItems';


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: '',
        }
    }

    available(product) {
        if (product.online) {
            return (
                "online"
            )
        } else {
            fetch(`/api/getEvent/?id=${product.eventid}`)
                .then(res => res.json())
                .then(data => this.setState({ eventName: `at ${data.name}` }))
            return this.state.eventName;
        }
    }

    render() {
        return (
            <Card style={{width: '18rem'}} href={"/product/"+this.props.product.id}  className="mb-3">
                <Link to={"/product/"+this.props.product.id} style={{ textDecoration: 'none' }}>
                    <Card.Img variant="top" src={this.props.product.url} style={ {height: '18rem' }}/>
                    <Card.Body>
                        <Card.Title>
                            {this.props.product.title}
                        </Card.Title>
                        <Card.Text>
                            {this.props.product.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Text>
                            From: {this.props.product.seller}
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Available { this.available(this.props.product) }</small>
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">{ timeSince(this.props.product.submitted) }</small>
                        </Card.Text>
                    </Card.Footer>
                </Link>
            </Card>
        );
    }
}

export default Product;