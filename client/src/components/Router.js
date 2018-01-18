import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './landing/Landing';

class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/landing" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
