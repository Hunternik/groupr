import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Button,
  Icon,
  Label,
  Divider,
  Visibility
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
// Components
import AttendeeModal from './AttendeeModal';
import ParallaxImage from '../landing/ParallaxImage';
// Helpers
import Images from '../../constants/eventPreview';
import handleVisibility from '../landing/utils/handleVisibility';

require('../landing/landing.css');
require('./event.css');

class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.handleVisibility = handleVisibility.bind(this);
    this.renderCoverPhoto = this.renderCoverPhoto.bind(this);
  }
  state = {};

  renderCoverPhoto() {
    if (this.props.event.eventId) {
    }
    let coverPhoto = Images.filter(
      image => image.id === this.props.coverPhotoID
    );
    console.log('IZZY AFDKAJDFAGD', coverPhoto);
    return coverPhoto[0].src;
  }

  render() {
    return (
      <div>
        <Visibility
          onUpdate={this.handleVisibility}
          className="image-container"
          textAlign="center"
        >
          <ParallaxImage src={this.renderCoverPhoto()} reduceHeight={1 / 7} />
          <Header
            as="h1"
            className="eventTitle"
            content={this.props.event.title}
            inverted
            style={{
              fontSize: '4em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: 0
            }}
          />
          <Header
            as="h2"
            className="eventHeadline"
            content="Network with developers and technical recruiters from high quality companies."
            inverted
            style={{ fontSize: '1.7em', fontWeight: 'normal' }}
          />
          <AttendeeModal />
        </Visibility>
      </div>
    );
  }
}

// Application State
const mapStateToProps = ({ event }) => ({
  event
});

export default connect(mapStateToProps, {
  // Actions
})(Jumbotron);
