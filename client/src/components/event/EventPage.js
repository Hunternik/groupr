import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Segment, Grid, Header, Image } from 'semantic-ui-react';
// Actions
import { fetchEvent, fetchEventSponsors } from '../../actions';
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
    // this.renderEventSponsors = this.renderEventSponsors.bind(this);
  }

  state = {};

  componentDidMount() {
    // What does this do? Where do you get this? James?
    const fetchId = this.props.match.params.eventId.toUpperCase();
    // console.log(mongoId, "SADFGAWEFW");
    this.fetchCurrentEvent(fetchId);
    // this.renderEventSponsors(mongoId)
    // // this.fetchEventSponsors(this.props.event._id);
    // const mongoId = this.props.match.params._id.$oid;
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
    this.props.fetchEventSponsors(this.props.event._id);
  }

  // renderEventSponsors(mongoId) {
  //     this.props.fetchEventSponsors(mongoId);
  // }

  // Render event data from application state
  renderEventData() {
    return this.props.event;
  }

  render() {
    console.log(this.props.event._id, "EVENT ID mmmmmmidfjqwioregj");
    // this.props.fetchEventSponsors(this.props.event._id);
    return (
      <div>
        <Jumbotron
          event={this.renderEventData()}
          coverPhotoID={this.props.match.params.eventId.toUpperCase()}
        />
        <Segment style={{ padding: '0em 0em' }} vertical>
          <Grid container>
            <Grid.Row>
              <Grid.Column width={10}>
                <Description event={this.renderEventData()} />
              </Grid.Column>
              <Grid.Column width={6}>
                <Details event={this.renderEventData()} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment vertical>
          <Participants eventId={this.props.event._id} />
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = ({ event, companies }) => ({
  event,
  companies
});

// Connect component to application state: (1) mapStateTo Props, (2) Arguments -> Component
export default withRouter(
  connect(mapStateToProps, {
    fetchEvent,
    fetchEventSponsors
  })(EventPage)
);
