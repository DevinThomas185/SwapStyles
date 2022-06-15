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

    timeSince(date) {
        var now = new Date();
        var then = new Date(date);
        // then.setHours(then.getHours() + 1);
        var seconds = Math.floor((now - then) / 1000);
        var interval = Math.floor(seconds / 31536000);

        console.log(seconds);
        console.log(now);
        console.log(then);
        console.log(date);

        if (interval > 1) {
          return Math.floor(interval) + " years ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return Math.floor(interval) + " months ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + " days ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + " hours ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
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
                                    <small className="text-muted"> {this.timeSince(product.submitted)} </small>
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