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
    this.copyAddress = this.copyAddress.bind(this);
  }
  
  state = {
    copyAddress: 'Click to copy!'
  }

  copyAddress() {
    this.setState({ copyAddress: 'Copied!'})
    return <Button icon='world' bordered color='teal' />;
  }

  render() {
    return (
      <div>
      {/* <Icon bordered inverted color='teal' name='calendar' /> */}
        <Popup trigger={<Button icon='calendar' bordered color='teal' />}>
          <Popup.Header>User Rating</Popup.Header>
          <Popup.Content>
            <Rating icon='star' defaultRating={3} maxRating={4} />
          </Popup.Content>
        </Popup>
        <p>{this.props.event.date}</p>
        <Popup 
          trigger={<Button icon='world' bordered color='teal' />} 
          on='click'
          hideOnScroll
        >
          <Popup.Header><i>Copied!</i></Popup.Header>
        </Popup>
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