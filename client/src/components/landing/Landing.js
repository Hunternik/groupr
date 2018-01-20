import React, { Component } from 'react';
import { Container, Divider, Visibility } from 'semantic-ui-react';
import Video from './Video';
import Events from './Events';

class Landing extends Component {
	constructor(){
		super();
	}
	handleUpdate(e,calculations) {
		console.log(calculations);
	}

  render() {
    return (
      <Visibility>
        <Video />
        <Divider horizontal inverted />
        <Events />
				<Divider horizontal inverted />
      </Visibility>
    );
  }
}

export default Landing;
