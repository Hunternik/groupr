import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './common/Navbar'
import Landing from './Landing';

class Router extends Component {
    render() {
        return (
            <div>
            <Navbar />                
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