import React, { Component } from 'react';
import { Container, Header, List, Transition, Visibility } from 'semantic-ui-react';
import Images from '../../constants/eventPreview';
import EventItem from './EventItem';
import SectionHead from './SectionHead';

require('./landing.css');

class Events extends Component {
  constructor() {
		super();
	}

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
				<SectionHead name='Events' />
        <List>{this.renderImages()}</List>
      </Container>
    );
  }
}

export default Events;
