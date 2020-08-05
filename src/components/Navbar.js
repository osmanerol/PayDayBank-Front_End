import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    logOut=(event)=>{
        localStorage.clear();
    }

    render() {
        return (
            <nav className='navbar'>
                <div className="container">
                    <Link className='navbar-brand' to={localStorage.getItem('jwtToken')!==null ? '/products' : '/'}>PayDayBank</Link>
                    {
                        this.props.show && 
                        <Link className='text-light text-decoration-none' onClick={this.logOut} to='/'>
                            <span className='mr-2' id='signOutText'>Log-out</span> <i className="fa fa-sign-out fa-lg" aria-hidden="true"></i>
                        </Link>
                    }
                </div>
            </nav>
        );
    }
}

export default Navbar;