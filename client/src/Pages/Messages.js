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
            currentTabUser: 0,
            recipients: {},
            messages: {},
            messageToSend: ""
        }
        this.setMessages = this.setMessages.bind(this);
    }

    componentDidMount() {
        fetch('/api/getUserId')
            .then(resp => resp.json())
            .then(id => this.setState({ userID: id.id }));

        this.timer = setInterval(()=> this.getMessages(), 500); // Change update time
    }

    componentWillUnmount() {
        this.timer = null;
    }

    getMessages() {
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

        this.setState({messages: msgs, currentTabUser: Object.keys(msgs)[0]})


        Object.keys(msgs).forEach((key) => {
            fetch(`/api/getUser?id=${key}`)
                .then(res => res.json())
                .then(user => this.setState({
                    recipients: {
                        ...this.state.recipients,
                        [user.id]: user
                    }
                }))
        });
    }

    onKeyUp(e) {
        if (e.key === "Enter") {
            this.handleSubmit()
        }
    }

    handleSubmit() {
        console.log("SENT MESSAGE")
        fetch(`/api/sendMessage`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sender: this.state.userID,
                receiver: this.state.currentTabUser,
                message: this.state.messageToSend
        })})
        this.setState({messageToSend: ""})

    }

    render() {
        return(
            <div>

                <Tabs>
                    {Object.entries(this.state.recipients).map(([id, user]) => (
                        <Tab 
                        eventKey={id} 
                        title={user.username} 
                        key={id}
                        onClick={() => this.setState({currentTabUser: id})}
                        >
                            <MessageStream messages={this.state.messages[id]} userID={this.state.userID}/>
                        </Tab>
                    ))}
                </Tabs>
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="Message to..."
                    aria-describedby="basic-addon2"
                    value={this.state.messageToSend}
                    onChange={(e) => this.setState({messageToSend: e.target.value})}
                    onKeyPress={(e) => { this.onKeyUp(e) }}
                    />
                    <Button 
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={() => this.handleSubmit()}
                    >
                        Send
                    </Button>
                </InputGroup>
            </div>
        );
    }
}

export default Messages;