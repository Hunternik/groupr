import React, { Component } from 'react';
import { 
  Segment,
  Grid,
  Header,
  Image,
  Button,
  Icon,
  Popup,
  Card,
  Rating
} from 'semantic-ui-react';

class Details extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        {/* <Icon bordered inverted color='teal' name='calendar' /> */}
      {/* <Popup trigger={IndividualCard}>
        <Popup.Header>User Rating</Popup.Header>
        <Popup.Content>
          <Rating icon='star' defaultRating={3} maxRating={4} />
        </Popup.Content>
      </Popup> */}
        <Button icon='calendar' bordered color='teal' />
        <p>{this.props.event.date}</p>
        <Button icon='world' bordered color='teal' />
        <p>{this.props.event.location}</p>
        <Image
        bordered
        rounded
        size='large'
        src='https://i.stack.imgur.com/dApg7.png'
      />
      </div>
    )
  }
}

export default Details;