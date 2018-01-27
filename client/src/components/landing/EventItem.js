import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Visibility } from 'semantic-ui-react';
import ParallaxImage from './ParallaxImage';
import handleVisibility from './utils/handleVisibility';

require('./landing.css');

class EventItem extends Component {
	constructor() {
		super();

		this.handleVisibility = handleVisibility.bind(this);
    this.applyAnimation = this.applyAnimation.bind(this);
	}

	state = { visible: false, headerClass: 'caption' }

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
		console.log(this.state.visible)
    const { title, src } = this.props.image;
    return (
      <Visibility onUpdate={this.handleVisibility} className="image-container">
        <ParallaxImage src={src} reduceHeight={1 / 3} />
        <h2 className={this.state.headerClass} >
          <span>{title}</span>
        </h2>
      </Visibility>
    );
  }
}

const mapStateToProps = (state) => ({
  scroll: state.landing
});

export default connect(mapStateToProps)(EventItem);
