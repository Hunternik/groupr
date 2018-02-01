import React, { Component } from 'react';
import { Header, Image, Item, Modal } from 'semantic-ui-react';
import loginImages from '../../../constants/loginImages';

class Login extends Component {
  state = { modalOpen: false };
  	
	componentDidMount() {
		if (this.props.quizInit) {
			this.handleOpen();
		}
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  renderLoginItems() {
    return loginImages.map((img) => (
      <Item.Group divided link>
        <Item size="tiny">
          <Image size="tiny" src={img.src} href={img.url} />
          <Item.Content verticalAlign="middle">
            <Item.Header>
              <a href={img.url}>Continue with {img.title}</a>
            </Item.Header>
          </Item.Content>
        </Item>
      </Item.Group>
    ));
  }

  renderLink() {
    return (
      !this.props.quizInit && (
        <span style={{ cursor: 'pointer' }} onClick={this.handleOpen}>
          Log In
        </span>
      )
    );
  }

  render() {
    return (
      <Modal closeIcon size="tiny" trigger={this.renderLink()} open={this.state.modalOpen} onClose={this.handleClose}>
        <Header as="h1" textAlign="center">
          Login or Sign up
        </Header>
        <Modal.Content>{this.renderLoginItems()}</Modal.Content>
      </Modal>
    );
  }
}

export default Login;
