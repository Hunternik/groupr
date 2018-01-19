import React from 'react';
import { Container, Header, Image, List } from 'semantic-ui-react';
import Images from '../../constants/eventPreview';
require('./landing.css');

const renderImages = () =>
  Images.map((image, index) => (
    <List.Item>
      <Image src={image.src} />
      <Header className='caption' color='white' size="large">{image.title}</Header>
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
