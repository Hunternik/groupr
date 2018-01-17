import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/Header'
import Landing from './Landing';

class Router extends Component {
    render() {
        return (
            <div>
            <Header />                
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