import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Visibility } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ParallaxImage from './ParallaxImage';
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
    if (!prevState.visible && this.state.visible) this.applyAnimation();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isVisible !== nextProps.isVisible) this.setState({ visible: true });
  }

  applyAnimation() {
    this.setState({ headerClass: 'caption animateHeaders' });
  }

  render() {
    const { title, src, id } = this.props.image;

    return (
      <Visibility onUpdate={this.handleVisibility} className="image-container">
				<Link to={{ pathname: `/event-page/${id}`}}>
					<ParallaxImage src={src} reduceHeight={1 / 3} />
					<h2 className={this.state.headerClass}>
						<span>{title}</span>
					</h2>
				</Link>
      </Visibility>
    );
  }
}

const mapStateToProps = (state) => ({
  scroll: state.landing
});

export default connect(mapStateToProps)(EventItem);
