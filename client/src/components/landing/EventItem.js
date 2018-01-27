import React, { Component } from 'react';
import { connect } from 'react-redux';
import ParallaxImage from './ParallaxImage';

require('./landing.css');

class EventItem extends Component {
	state = { mouseEnter: false }

  render() {
    const { title, src } = this.props.image;
    return (
      <div className="image-container">
        <ParallaxImage src={src} reduceHeight={1 / 3} />
        <h2 className="caption" >
          <span>{title}</span>
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  scroll: state.landing
});

export default connect(mapStateToProps)(EventItem);
