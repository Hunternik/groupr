import _ from 'lodash'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Segment, Grid, Header, Image, Rail, Sticky } from 'semantic-ui-react';
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
    this.props.fetchEventSponsors(this.props.event._id);
  }

  // renderEventSponsors(mongoId) {
  //     this.props.fetchEventSponsors(mongoId);
  // }

  handleContextRef = contextRef => this.setState({ contextRef });

  // Render event data from application state
  renderEventData() {
    return this.props.event;
  }

  render() {
    const { contextRef } = this.state;

    return (
      <div>
        <Jumbotron
          event={this.renderEventData()}
          coverPhotoID={this.props.match.params.eventId.toUpperCase()}
        />
        <Segment style={{ backgroundColor: '#f6f7f8' }} >
        <Segment style={{ padding: '0em 0em' }} vertical>
          <Grid container centered columns={2}>
            {/* <Grid.Row> */}
            {/* <div ref={this.handleContextRef}>
            <Segment>
              {_.times(10, i => <Details event={this.renderEventData()} key={i} />)} */}

              <Grid.Column width={10}>
                <Description event={this.renderEventData()} />
              </Grid.Column>
              {/* <Rail position='right'>
                <Sticky bottomOffset={50} context={contextRef} offset={50} pushing> */}
              <Grid.Column width={6}>
                <Details event={this.renderEventData()} />
              </Grid.Column>
              {/* </Sticky>
              </Rail>
            </Segment> */}
              
            {/* </Grid.Row> */}
            {/* </div> */}
          </Grid>
        </Segment>
        <Segment vertical>
          <Participants eventId={this.props.event} />
        </Segment>
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
