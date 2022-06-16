import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { timeSince } from './RecentItems';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Product(props) {
    const [eventName, setEventName] = useState("online");
    
    useEffect(() => {
        if (!props.product.online) {
            fetch(`/api/getEvent/?id=${props.product.eventid}`)
                .then(res => res.json())
                .then(data => setEventName(`at ${data.name}`))
        }
    }, [])

    return (
        <Card style={{width: '18rem'}} href={"/product/"+props.product.id}  className="mb-3">
            <Link to={"/product/"+props.product.id} style={{ textDecoration: 'none' }}>
                <Card.Img variant="top" src={props.product.url} style={ {height: '18rem' }}/>
                <Card.Body>
                    <Card.Title>
                        {props.product.title}
                    </Card.Title>
                    <Card.Text>
                        {props.product.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Text>
                        From: {props.product.seller}
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Available { eventName }</small>
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">{ timeSince(props.product.submitted) }</small>
                    </Card.Text>
                </Card.Footer>
            </Link>
        </Card>
    );
}

export default Product;