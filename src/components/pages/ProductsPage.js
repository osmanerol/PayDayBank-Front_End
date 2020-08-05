import React, { Component } from 'react';

import Navbar from '../Navbar';
import LeftBar from '../LeftBar';
import ProductList from '../ProductList';
import Footer from '../Footer';

class ProductsPage extends Component {
    render() {
        return (
            <div>
                <Navbar show={true} />
                    <div className="container" id='container'>
                        <div className='row'>
                            <div className="col-lg-3 col-md-4 col-12">
                                <LeftBar />
                            </div>
                            <div className="col-lg-9 col-md-8 col-12">
                                <ProductList />
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default ProductsPage;