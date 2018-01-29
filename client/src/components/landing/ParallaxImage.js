import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

require('./landing.css');

class ParallaxImage extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    reduceHeight: PropTypes.number.isRequired
  };

  constructor() {
    super();

    this.onLoad = this.onLoad.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  state = {
    parentHeight: 'auto',
		transform: 'translate3d(0, 0, 0)',
    imageHeight: 0
  };

  componentDidMount() {
    if (this.props.reduceHeight >= 1 || this.props.reduceHeight < 0)
      console.log('reduceHeight must be between 0 and 1');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.scrollValue !== nextProps.scrollValue) this.onScroll();
  }

  onLoad({ target: { clientHeight } }) {
    this.setState({
      parentHeight: clientHeight * (1 - this.props.reduceHeight),
      imageHeight: clientHeight
    });
    this.onScroll();
  }
  // Check to see if the image is within range
  // If the image is out of viewport, returns 1
  inRange(min, max, val) {
    return Math.min(Math.max(val, min), max);
  }

  onScroll() {
    this.setState((state, props) => {
      // Determine if image is still within the viewport, use getBoundingClientRect to get position of top of container relative to the current viewport
      const imagePosition =
        (this.refs.container.getBoundingClientRect().top + this.state.parentHeight) /
        (window.innerHeight + this.state.parentHeight);
      const ratio = this.inRange(0, 1, imagePosition);
      const transformY = ratio * this.props.reduceHeight - this.props.reduceHeight;
      const transform = `translate3d(0, ${transformY * 100}%, 0)`;

      return { transform };
    });
  }

  render() {
    const { src, reduceHeight, style, alt, ...rest } = this.props;
		const { parentHeight, transform } = this.state;

    return (
      <div
        ref="container"
        className="event-image-container"
        style={{
          position: 'relative',
          overflow: 'hidden',
          height: parentHeight
        }}
      >
        <img
          style={{
            ...style,
            width: '100%',
						transform: transform,
					}}
					className={'event-image'}
          alt={alt || ''}
          src={src}
          onLoad={this.onLoad}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ scrollValue: state.landing });

export default connect(mapStateToProps)(ParallaxImage);
