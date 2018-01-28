import React, { Component } from 'react';
import { 
  Segment,
  Grid,
  Header, 
  Image
} from 'semantic-ui-react';

class Description extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Description
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          {this.props.event.description}
        </p>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Companies Attending
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Google, Snapchat
        </p>
      </div>
    )
  }
}

export default Description;