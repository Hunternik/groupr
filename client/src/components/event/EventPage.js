import React, { Component } from 'react';
import { connect } from 'react-redux';
import { events } from '../../actions';

import Jumbotron from './Jumbotron';
import Description from './Description';
import Participants from './Participants';

class EventPage extends Component {
  constructor() {
		super();
		
    // this.handleScroll = this.handleScroll.bind(this);
  }
  // state = {}

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

const mapStateToProps = (state) => ({
  // event: state.event
  event
});

export default connect(mapStateToProps)(EventPage);
