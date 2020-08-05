import React, { Component } from 'react'
import '../styles/main.css';
import { NavLink } from 'react-router-dom';

class LeftBar extends Component {
    render() {
        return (
            <div className='row'>
                <div className="col-md-12 col-6 left-bar">
                    <NavLink to='/products' className='btn btn-outline-secondary btn-block left-bar-button'>Products</NavLink>
                </div>
                <div className="col-md-12 col-6 left-bar">
                    <NavLink to='/profile' className='btn btn-outline-secondary btn-block left-bar-button'>Profile</NavLink>
                </div>
            </div>
        )
    }
}

export default LeftBar;