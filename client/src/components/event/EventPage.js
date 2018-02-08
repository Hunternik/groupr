import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Segment,
  Grid,
  Header,
  Image,
  Rail,
  Sticky,
  Divider
} from 'semantic-ui-react';
import { fetchEvent, fetchEventSponsors } from '../../actions';
import Jumbotron from './Jumbotron';
import Description from './Description';
import Details from './Details';
import Participants from './Participants';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container';

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

  fetchCurrentEvent(id) {
    this.props.fetchEvent(id);
  }

  handleContextRef = contextRef => this.setState({ contextRef });

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
        <Container>
          <Segment style={{ padding: '0em 0em' }} basic>
            <Grid container centered columns={2}>
              <Grid.Column width={10}>
                <Description event={this.renderEventData()} />
              </Grid.Column>
              <Grid.Column width={6}>
                <Details event={this.renderEventData()} />
              </Grid.Column>
            </Grid>
          </Segment>
          <Divider hidden />
          <Segment basic>
            <Participants eventId={this.renderEventData()} />
          </Segment>
          <Divider hidden />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ event, companies }) => ({
  event,
  companies
});

export default withRouter(
  connect(mapStateToProps, {
    fetchEvent,
    fetchEventSponsors
  })(EventPage)
);
