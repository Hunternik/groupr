import React, { Component } from "react";
import {
  Header,
  Image,
  Item,
  Modal,
  Grid,
  Form,
  Segment,
  Button,
  Message
} from "semantic-ui-react";
import loginImages from "../../../constants/loginImages";
import ModalHeader from "semantic-ui-react/dist/commonjs/modules/Modal/ModalHeader";
import logo from "../../../assets/images/logo.png";

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
    return loginImages.map(img => (
      <Segment stacked className="grow">
        <Image size="tiny" src={img.src} href={img.url} />
      </Segment>
    ));
  }

  renderLink() {
    return (
      !this.props.quizInit && (
        <span style={{ cursor: "pointer" }} onClick={this.handleOpen}>
          Log In
        </span>
      )
    );
  }

  render() {
    return (
      <Modal
        closeIcon
        size="tiny"
        trigger={this.renderLink()}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>
          <Header as="h2" color="teal" textAlign="center">
            <Image src={logo} /> Log-in to your account
          </Header>
        </Modal.Header>
        <Modal.Content>
          <Grid textAlign="center" verticalAlign="middle height-adjust">
            <Grid.Column style={{ maxWidth: 450 }}>
              <Form size="large">{this.renderLoginItems()}</Form>
              <Message>New to us? Sign up through Google or LinkedIn</Message>
            </Grid.Column>
          </Grid>
        </Modal.Content>
      </Modal>
    );
  }
}

export default Login;
