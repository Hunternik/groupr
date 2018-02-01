import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Segment, Grid, Header, Image } from 'semantic-ui-react';
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

  state = {};

  componentDidMount() {
    const fetchId = this.props.match.params.eventId.toUpperCase();
    this.fetchCurrentEvent(fetchId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.eventId !== nextProps.match.params.eventId) {
      const fetchId = nextProps.match.params.eventId.toUpperCase();
      this.fetchCurrentEvent(fetchId);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      console.log(this.props, 'did update');
    }
  }

  // Fetch event data from mongo
  fetchCurrentEvent(id) {
    this.props.fetchEvent(id);
  }

  // Render event data from application state
  renderEventData() {
    console.log(this.props.event, 'EVENT OBJECT');
    return this.props.event;
  }

  render() {
    console.log(this.props.event);
    return (
      <div>
        <Jumbotron
          event={this.renderEventData()}
          coverPhotoID={this.props.match.params.eventId.toUpperCase()}
        />
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={9}>
                <Description event={this.renderEventData()} />
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <Details event={this.renderEventData()} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Participants />
      </div>
    );
  }
}

const mapStateToProps = ({ event }) => ({
  event
});

// Connect component to application state: (1) mapStateTo Props, (2) Arguments -> Component
export default withRouter(
  connect(mapStateToProps, {
    fetchEvent
  })(EventPage)
);
