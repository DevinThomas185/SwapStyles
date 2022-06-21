import React from 'react'
import {Alert, Row, Col} from 'react-bootstrap'

class MessageStream extends React.Component {
    render() {
        return(
            <div>
                <Row>
                    <Col lg={11}>
                        <Alert
                        variant="primary"
                        >
                            Hi there!
                            <hr />
                            <small>
                                Devin 14:00
                            </small>
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{offset: 1}}>
                        <Alert
                        variant="info"
                        style={{textAlign: "right" }}
                        >
                            Hey!
                            <hr />
                            <small>
                                Raaif 14:01
                            </small>
                        </Alert>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MessageStream;