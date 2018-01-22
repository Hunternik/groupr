import React, { Component } from 'react';
import { Container, Image, Transition, Visibility } from 'semantic-ui-react';
import handleVisibility from './utils/handleVisibility';

require('./landing.css');

class EventItem extends Component {
  constructor() {
    super();

    this.handleAnimation = this.handleAnimation.bind(this);
    this.handleVisibility = handleVisibility.bind(this);
  }

  state = { imageAnimation: null, textAnimation: 'vertical flip', visible: false };
  // This method only exists for testing animation purposes
  handleAnimation(e, { calculations: { topVisible } }) {
    this.setState({
      imageAnimation: 'swing right'
    });
  }

  render() {
    const { title, src } = this.props.image;
    const { imageAnimation, textAnimation, visible } = this.state;

    return (
      <Visibility onUpdate={this.handleVisibility} className="perspective">
        {/* <div onMouseEnter={this.handleAnimation}> */}
        {/* <div className='perspective'> */}
        <Image className="event-image" src={src} />
        <h2 className="caption">
          <Transition animation={textAnimation} duration={800} visible={visible}>
            <span>{title}</span>
          </Transition>
        </h2>
        {/* </div> */}
      </Visibility>
    );
  }
}

export default EventItem;
