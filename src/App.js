import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//  pages
import LoginPage from './components/pages/LoginPage';
import NotFoundPage from './components/pages/NotFoundPage';
import ProductsPage from './components/pages/ProductsPage';
import ProfilePage from './components/pages/ProfilePage';
import ProductEditPage from './components/pages/ProductEditPage';

//  private route
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route path='/' exact strict component={LoginPage} />
            <PrivateRoute path='/products' exact strict component={ProductsPage} />
            <PrivateRoute path='/profile' exact strict component={ProfilePage} />
            <PrivateRoute path='/products/:id' exact strict component={ProductEditPage} />
            <Route exact strict component={NotFoundPage} />
          </Switch> 
      </div>
    );
  }
}

export default App;