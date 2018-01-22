import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Description from './Description';
import Participants from './Participants';

class EventPage extends Component {
  state = {}

  render(){
    return (
      <div>
        <Jumbotron />
        <Description />
        <Participants />
      </div>
    );
  }
}

export default EventPage;
