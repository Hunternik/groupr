import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import SectionHead from './SectionHead';

class About extends Component {
	render() {
		return (
			<Container className='about-main'>
				<SectionHead name='About' />
				<Card.Group itemsPerRow={2}>
				</Card.Group>
			</Container>
		);
	}
}

export default About;
