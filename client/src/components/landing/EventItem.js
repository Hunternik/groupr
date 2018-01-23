import React, { Component } from 'react';
import { Container, Image, Transition, Visibility } from 'semantic-ui-react';
import handleVisibility from './utils/handleVisibility';

require('./landing.css');

class EventItem extends Component {
  constructor() {
    super();
    this.handleVisibility = handleVisibility.bind(this);
    this.applyAnimation = this.applyAnimation.bind(this);
  }

  state = { visible: false, headerClass: 'caption' };

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.visible && this.state.visible) 
      this.applyAnimation();
	}
	
	componentWillReceiveProps(nextProps) {
		if (this.props.isVisible !== nextProps.isVisible)
			this.setState({ visible: true });
	}

  applyAnimation() {
    this.setState({ headerClass: 'caption animateHeaders' });
  }

  render() {
		console.log(this.props.isVisible, this.props.id)
    const { title, src } = this.props.image;

    return (
      <Visibility  className="perspective">
        <Image className="event-image" src={src} />
        <h2 className={this.state.headerClass}>{title}</h2>
      </Visibility>
    );
  }
}

export default EventItem;
