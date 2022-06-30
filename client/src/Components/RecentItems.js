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
                                    <small className="text-muted"> {timeSince(product.submitted)} </small>
                                </Card.Footer>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </>
        )
    }
}

export function timeSince(date) {
    var now = new Date();
    var then = new Date(date);
    var seconds = Math.floor((now - then) / 1000);
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        const year = Math.floor(interval) 
        if (year > 1) {
            return year + " years ago";
        }
        return year + " year ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        const month = Math.floor(interval)
        if (month > 1) {
            return month + " months ago";
        }
        return month + " month ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        const day = Math.floor(interval)
        if (day > 1) {
            return day + " days ago";
        }
        return day + " day ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        const hour = Math.floor(interval)
        if (hour > 1) {
            return hour + " hours ago";
        }
        return hour + " hour ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        const minute = Math.floor(interval)
        if (minute > 1) {
            return minute + " minutes ago";
        }
        return minute + " minute ago";
    }

    if (seconds > 1) {
        return seconds + " seconds ago";
    } else {
        return "just now";
    }   
}

export default RecentItems;