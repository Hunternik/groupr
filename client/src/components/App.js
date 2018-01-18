import React, { Component } from 'react';
import Router from './Router';
import Header from './common/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router />
      </div>
    );
  }
}

export default App;