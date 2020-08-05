import React, { Component } from 'react';

//  components 
import Navbar from '../Navbar';
import LoginForm from '../LoginForm';
import Footer from '../Footer';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <Navbar show={false} />
                <LoginForm />
                <Footer />
            </div>
        );
    }
}

export default LoginPage;