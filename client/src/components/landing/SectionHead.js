import React, { Component } from 'react';
import { Header, Transition, Visibility } from 'semantic-ui-react';
import handleVisibility from './utils/handleVisibility';
require('./landing.css');

class SectionHead extends Component {
  constructor() {
    super();

    this.handleVisibility = handleVisibility.bind(this);
  }

	state = { animation: 'fade right', visible: false };

  render() {
    const { animation, visible } = this.state;

    return (
      <Visibility onUpdate={this.handleVisibility}>
        <Transition animation={animation} duration={1000} visible={visible}>
          <Header as="h2" size="huge" className="sectionHeadContainer">
            <Header.Content className="sectionHead">{this.props.name}</Header.Content>
          </Header>
        </Transition>
      </Visibility>
    );
  }
}

export default SectionHead;
