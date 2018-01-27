import React, { Component } from 'react';
import { connect } from 'react-redux';
// Actions
import { fetchEvent } from '../../actions';
// Components
import Jumbotron from './Jumbotron';
import Description from './Description';
import Participants from './Participants';

class EventPage extends Component {
  constructor(props) {
    super(props);
    this.fetchCurrentEvent = this.fetchCurrentEvent.bind(this);
  }
  
  // Component state
  // state = {
  // }

  componentDidMount() {
    this.fetchCurrentEvent();
  }

  // Fetch event data from database
  fetchCurrentEvent() {
    console.log("ITS WORKING");
    this.props.fetchEvent({});
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <Description />
        <Participants />
      </div>
    );
  }
}

// Application State
const mapStateToProps = ({ event }) => ({
  // event: state.event
  event
});

// Connect component to application state: (1) mapStateTo Props, (2) Arguments -> Component
export default connect(mapStateToProps,  {
  fetchEvent
})(EventPage);
