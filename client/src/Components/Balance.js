import React from 'react';
import axios from 'axios';
import "./Balance.css"

class Balance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: "0"
        }
    }

    fetchcall = () => {
        axios.get('/api/user/balance')
            .then(response => {
                this.setState({
                    balance: response.data
                })
            })
            .catch(error => {
                console.log(error);
            }
            )
    }

    componentDidMount() {
        setInterval(this.fetchcall, 1000);
    }

    render() {
        return (
            <div>
                <h2>{this.state.balance}</h2>
            </div>
        );
    }
}

export default Balance;