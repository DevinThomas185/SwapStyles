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
            userID: 0,
            messages: {},
            messageToSend: ""
        }
        this.setMessages = this.setMessages.bind(this);
    }

    componentDidMount() {
        fetch('/api/getUserId')
            .then(resp => resp.json())
            .then(id => this.setState({ userID: id.id }));
        fetch(`/api/getMessages`)
            .then(res => res.json())
            .then(messages => this.setMessages(messages));
    }

    setMessages(messages) {
        const msgs = {}
        for (const i in messages) {
            const message = messages[i]
            if (message.sender.toString() === this.state.userID) {
                if (!(message.receiver in msgs)) {
                    msgs[message.receiver] = []
                }
                msgs[message.receiver].push(message)
            } else {
                if (!(message.sender in msgs)) {
                    msgs[message.sender] = []
                }
                msgs[message.sender].push(message)
            }
        }


        Object.keys(msgs).forEach((key) => {
            fetch(`/api/getUser?id=${key}`)
                .then(res => res.json())
                .then(data => this.setState({
                    messages: {
                        ...this.state.messages,
                        [data.username]: msgs[key]
                    }
                }))
        });
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
                    {Object.entries(this.state.messages).map(([recipient, messages]) => (
                        <Tab eventKey={recipient} title={recipient} key={recipient}>
                            <MessageStream messages={messages} userID={this.state.userID}/>
                        </Tab>
                    ))}
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