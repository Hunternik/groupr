import React, { Component } from 'react';
import { Container, List, Transition } from 'semantic-ui-react';
import Images from '../../constants/eventPreview';
import EventItem from './EventItem';
import SectionHead from './SectionHead';
import Parallax from './Parallax';

require('./landing.css');

class Events extends Component {
  renderImages() {
    const listItems = Images.map((image, index) => (
      <List.Item className="list-item">
        <EventItem image={image} />
      </List.Item>
    ));
    return listItems;
  }

  render() {
    return (
      <Container>
        <SectionHead name="Events" />
        <Parallax speed={5}>
          <h1>Everything is Awesome!</h1>
        </Parallax>
        <List>{this.renderImages()}</List>
      </Container>
    );
  }
}

export default Events;
