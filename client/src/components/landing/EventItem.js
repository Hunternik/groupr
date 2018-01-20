import React, { Component } from 'react';
import { Image, Transition, Visibility } from 'semantic-ui-react';
import handleVisibility from './utils/handleVisibility';

require('./landing.css');

class EventItem extends Component {
  constructor() {
    super();

		this.handleAnimation = this.handleAnimation.bind(this);
		this.handleVisibility = handleVisibility.bind(this);
  }

  state = { animation: 'vertical flip', visible: false };
	// This method only exists for testing animation purposes
  handleAnimation() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const { title, src } = this.props.image;
    const { animation, visible } = this.state;

    return (
      <Visibility onUpdate={this.handleVisibility}>
        {/* <div onMouseEnter={this.handleAnimation}> */}
        <div>
          <Image className="event-image" src={src} />
          <h2 className="caption">
            <Transition animation={animation} duration={800} visible={visible}>
              <span>{title}</span>
            </Transition>
          </h2>
        </div>
      </Visibility>
    );
  }
}

export default EventItem;
