import React, { Component } from 'react';
import { Container, Visibility } from 'semantic-ui-react';

class Parallax extends Component {
	constructor() {
		super();
		this.handleUpdate = this.handleUpdate.bind(this);
		this.calcTranslation = this.calcTranslation.bind(this);
	}

	state = { scrollEnable: false };

	componentDidMount() {
		window.addEventListener('scroll', this.calcTranslation, 10);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.calcTranslation);
	}

	handleUpdate(e, { calculations: { onScreen }}) {
		if (onScreen !== this.state.scrollEnable)
			this.setState({ scrollEnable: onScreen });
	}

  calcTranslation() {
		const scrollValue = window.scrollY;
		const translateValue = scrollValue / this.props.speed;
		const translate = 'translate3d(0px,' + translateValue + 'px, 0px)';

		if (this.state.scrollEnable)
			this.setState({ translate });
  }

  render() {
    return (
      <Container className="parallax-container">
				<Visibility onUpdate={this.handleUpdate} ref='content' className="parallax-content" style={{ transform: this.state.translate}}>
          {this.props.children}
				</Visibility>
      </Container>
    );
  }
}

export default Parallax;
