import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import MessageStream from '../Components/MessageStream';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            messageToSend: ""
        }
    }

    componentDidMount() {
        fetch(`api/getMessages`)
            .then(resp => resp.json())
            .then(messages => this.setState({messages: messages}))
    }

    onKeyUp(e) {
        if (e.key === "Enter") {
            // SEND MESSAGE
        }
    }

    render() {
        return(
            <div>
                <Tabs>
                    <Tab eventKey="Devin" title="Devin">
                        <MessageStream />
                    </Tab>
                    <Tab eventKey="Adam" title="Adam">
                        <MessageStream />
                    </Tab>
                </Tabs>
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="Message to..."
                    aria-describedby="basic-addon2"
                    onChange={(e) => this.setState({messageToSend: e.target.value})}
                    onKeyPress={(e) => { this.onKeyUp(e) }}
                    />
                    <Button 
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={() => {console.log("SEND MESSAGE")}}
                    >
                        Go!
                    </Button>
                </InputGroup>
            </div>
        );
    }
}

export default Messages;