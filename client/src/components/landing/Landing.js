import React, { Component } from 'react';
import { Divider, Header, Visibility } from 'semantic-ui-react';
import Video from './Video';
import Events from './Events';
import Parallax from './Parallax';

class Landing extends Component {
	handleUpdate(e,calculations) {
		console.log(calculations);
	}

  render() {
    return (
      <Visibility>
        <Video />
				<Parallax speed={5}>
          <h1 className='parallax-headers'>"Everything is Awesome!"</h1>
        </Parallax>
        <Divider horizontal inverted />
        <Events />
				<Divider horizontal inverted />
      </Visibility>
    );
  }
}

export default Landing;
