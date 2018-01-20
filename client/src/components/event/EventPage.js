import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Description from './Description';

class EventPage extends Component {
  state = {}

  render(){
    return (
      <div>
        <Jumbotron />
        <Description />
      </div>
    );
  }
}

export default EventPage;
