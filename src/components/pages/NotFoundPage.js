import React, { Component } from 'react';
import '../../styles/main.css';

class NotFoundPage extends Component {
    render() {
        return (
            <div className="container">
                <div id='errorContainer'>
                    <h1 className='text-center'>404</h1>
                    <p id='errorText' className='text-muted text-center'>The site configured at this address does not contain the requested file.</p>
                </div>
            </div>
        );
    }
}

export default NotFoundPage;