import React, { Component } from 'react';
import { Divider, Visibility } from 'semantic-ui-react';
import Video from './Video';
import Events from './Events';

class Landing extends Component {
  render() {
    return (
      <Visibility>
        <Video />
        <Divider horizontal inverted />
        <Events />
      </Visibility>
    );
  }
}

export default Landing;
