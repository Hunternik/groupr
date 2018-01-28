import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  Segment,
  Grid,
  Header, 
  Image
} from 'semantic-ui-react';
// Actions
import { fetchEvent } from '../../actions';
// Components
import Jumbotron from './Jumbotron';
import Description from './Description';
import Details from './Details';
import Participants from './Participants';

class EventPage extends Component {
  constructor(props) {
    super(props);
    this.fetchCurrentEvent = this.fetchCurrentEvent.bind(this);
    this.renderEventData = this.renderEventData.bind(this);
  }
  
  // Component state
  state = {}

  componentDidMount() {
    this.fetchCurrentEvent();
  }

  // Fetch event data from mongo
  fetchCurrentEvent() {
    this.props.fetchEvent();
  }

  renderEventData() {
    console.log(this.props.event, "EVENT OBJECT")
    return this.props.event;
  }

  render() {
    return (
      <div>
        <h1>{this.renderEventData().title}</h1>
        <Jumbotron event={this.renderEventData()} />
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={9}>
              <Description event={this.renderEventData()} />
              </Grid.Column>
              <Grid.Column floated='right' width={5}>
                <Details event={this.renderEventData()}  />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Participants />
      </div>
    );
  }
}

// Application State
const mapStateToProps = ({ event }) => ({
  event
});

// Connect component to application state: (1) mapStateTo Props, (2) Arguments -> Component
export default connect(mapStateToProps,  {
  fetchEvent
})(EventPage);
