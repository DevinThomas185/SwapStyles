import React from 'react'
import {Alert, Row, Col} from 'react-bootstrap'

class MessageStream extends React.Component {

    formatDate(date) {
        return new Date(date).toLocaleDateString('en-US', 
        {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
            hour: "numeric",
            minute: "numeric",
        });
    }

    render() {
        return(
            <div>
                {this.props.messages.map(message => {
                    const [variant, side] = (message.sender.toString() === this.props.userID) ? ["info", {offset: 1}] : ["primary", 11]
                    return (<Row className="mt-3" key={message.id}>
                            <Col xl={side} lg={side} md={side} sm={side} xs={side} xxs={side}>
                                <Alert
                                variant={variant}
                                >
                                    {message.message}
                                    <hr />
                                    <small>
                                        {message.username} {this.formatDate(message.sent)}
                                    </small>
                                </Alert>
                            </Col>
                        </Row>);
                })}
            </div>
        );
    }
}

export default MessageStream;