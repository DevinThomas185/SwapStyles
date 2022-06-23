import React from 'react';
import { Link } from 'react-router-dom';


class Title extends React.Component {
    render() {
        return (
            <Link to="/"  style={{ textDecoration: 'none' }}>
                <h1 className='mt-4' align="center">{window.Title}</h1>
            </Link>
        );
    }
}

export default Title;