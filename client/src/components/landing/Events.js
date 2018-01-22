import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, List, Transition } from 'semantic-ui-react';
import Images from '../../constants/eventPreview';
import EventItem from './EventItem';
import SectionHead from './SectionHead';
import Parallax from './Parallax';
import Visibility from 'semantic-ui-react/dist/commonjs/behaviors/Visibility/Visibility';

require('./landing.css');

class Events extends Component {
  constructor() {
    super();
    this.animateEvents = this.animateEvents.bind(this);
		this.handleVisibility = this.handleVisibility.bind(this);
		this.animationEnd = this.animationEnd.bind(this);
  }

  state = { eventClass: 'list-item', listAnimationComplete: {} };

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.listNode).addEventListener('transitionend', this.animationEnd);
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this.refs.listNode).removeEventListener('transitionend', this.animationEnd);
  }
// { srcElement: { id, className } }
  animationEnd({ srcElement: { id, className }}) {
		if (className.includes('list-item-anim')) {
			const listItem = {[`listItemAnimation${id}`]: true};
			this.setState({ listAnimationComplete: { ...this.state.listAnimationComplete, ...listItem } });
		}
  }

  animateEvents(index) {
    const listItem = `listItem${index}`;

    this.setState({ [listItem]: 'list-item list-item-anim' });
  }

  handleVisibility(e, { calculations: { onScreen }, children: { props: { children: { props: { index } } } } }) {
    const listItem = `listItem${index}`;
		if (onScreen && !this.state[listItem]) 
			this.animateEvents(index);
  }

  renderImages() {
    const listItems = Images.map((image, index) => (
      <Visibility onUpdate={this.handleVisibility}>
        <List.Item id={index} className={this.state[`listItem${index}`] || 'list-item'}>
          <EventItem image={image} index={index} isVisible={this.state.listAnimationComplete[`listItemAnimation${index}`]} />
        </List.Item>
      </Visibility>
    ));

    return listItems;
  }

  render() {
		console.log(this.state.listAnimationComplete)
    return (
      <Container>
        <SectionHead name="Events" />
        <Parallax speed={5}>
          <h1>Everything is Awesome!</h1>
        </Parallax>
        <Parallax speed={3}>
          <h1>jew crew!</h1>
        </Parallax>
        <List ref="listNode">{this.renderImages()}</List>
      </Container>
    );
  }
}

export default Events;
