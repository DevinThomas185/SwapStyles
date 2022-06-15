import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class RecentItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recentItems: []
        };
    }

    getRecentItems() {
        fetch('/api/getRecentItems')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    recentItems: data
                });
            }
            );
    }

    componentDidMount() {
        this.getRecentItems();
    }

    render() {
        return (
            <>
                {this.state.recentItems.map(product => (
                    <Col key={product.id} >
                        <Link to={`/product/${product.id}`}  style={{ textDecoration: 'none' }}>
                            <Card style={{width: "12rem"}} >
                                <Card.Img variant="top" src={product.url}/>
                                <Card.Body>
                                    <Card.Title>
                                        {product.title}
                                    </Card.Title>
                                    <Card.Text>
                                        {product.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"> {} minutes ago</small>
                                </Card.Footer>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </>
        )
    }
}

export default RecentItems;