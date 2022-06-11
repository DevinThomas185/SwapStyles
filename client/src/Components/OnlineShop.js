import React from 'react';
import axios from 'axios';
import "./OnlineShop.css"
import Balance from './Balance';

class OnlineShop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id='titleBox'> 
                    <h1 className='title'>Swap Search</h1>
                </div>
                <div className='balance'>
                    <Balance />
                </div>
            </div>
        );
    }
}

export default OnlineShop;