import React from 'react';
import { Container, Header, Image, List, Transition } from 'semantic-ui-react';
import Images from '../../constants/eventPreview';
require('./landing.css');

const renderImages = () =>
  Images.map((image, index) => (
    <List.Item className='list-item'>
      <Image className='event-image' src={image.src} />
      <h2 className="caption">
			<Transition animation='animateHeaders' duration={500} visible={true}>
        <span>{image.title}</span>
			</Transition>
      </h2>
    </List.Item>
  ));

const Events = () => {
  return (
    <Container>
      <List>{renderImages()}</List>
    </Container>
  );
};

export default Events;
