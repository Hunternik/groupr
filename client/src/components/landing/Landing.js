import React, { Component } from 'react';
import { Divider, Visibility } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { scroll } from '../../actions';
import Video from './Video';
import Events from './Events';
import About from './About';

class Landing extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, 10);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <Visibility style={{ height: '100%' }}>
        <Video />
        <Divider horizontal inverted />
        <About />
        <Divider horizontal inverted />
        <Events />
        <Divider horizontal inverted />
      </Visibility>
    );
  }
}

export default connect(null, { scroll })(Landing);
