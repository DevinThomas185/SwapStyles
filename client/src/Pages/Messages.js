import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import MessageStream from '../Components/MessageStream';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown';

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: 0,
            currentTabUser: 0,
            newRecipient: {},
            recipients: {},
            allUsers: [],
            messages: {},
            messageToSend: "",
            notLoggedIn: true,
        }
        this.setMessages = this.setMessages.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        fetch('/api/getUserId')
            .then(res => res.json())
            .then(id => {
                if (id.id !== undefined) {
                    this.setState({ userID: id.id })
                    this.setState({ notLoggedIn: false })
                    fetch('/api/getUsers')
                        .then(res => res.json())
                        .then(users => {
                            this.setState({ allUsers: users })
                            this.timer = setInterval(() => this.getMessages(), 500); // Change update time
                        });
                } else {
                    this.setState({notLoggedIn: true})
                }
            })        
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

        this.setState({ messages: msgs })

        if (this.state.currentTabUser === 0) {
            this.setState({ currentTabUser: Object.keys(msgs)[0] })
        }



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
        fetch(`/api/sendMessage`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sender: this.state.userID,
                receiver: this.state.currentTabUser,
                message: this.state.messageToSend
            })
        })
        this.setState({ messageToSend: "", newRecipient: {} })

    }

    handleSelect(key) {
        this.setState({ currentTabUser: key })
    }

    render() {
        if (this.state.notLoggedIn) {
            return(
                <h2 align="center" className="mt-5">You are not logged in. Log in to view messages</h2>
            )
        } else {
            return (
                <div>
                    <Tabs onSelect={this.handleSelect}>
                        {Object.entries(this.state.recipients).map(([id, user]) => (
                            <Tab
                                eventKey={id}
                                title={user.username}
                                key={id}
                            >
                                <Container className='overflow-auto' style={{ maxHeight: "70vh", display: "flex", flexDirection: "column-reverse" }}>
                                    <MessageStream messages={this.state.messages[id]} userID={this.state.userID} />
                                </Container>
                            </Tab>
                        ))}
                        <Tab
                            eventKey="new"
                            className='justify-content-end'
                            title="New Chat +"
                        >
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    New Chat with: {this.state.newRecipient.username}
                                </Dropdown.Toggle>
    
                                <Dropdown.Menu>
                                    {this.state.allUsers.map((user) => (
                                        <Dropdown.Item
                                            key={user.username}
                                            onClick={() => { this.setState({ currentTabUser: user.id, newRecipient: user }) }}
                                        >
                                            {user.username}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Tab>
                    </Tabs>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Message to..."
                            aria-describedby="basic-addon2"
                            value={this.state.messageToSend}
                            onChange={(e) => this.setState({ messageToSend: e.target.value })}
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
}

export default Messages;